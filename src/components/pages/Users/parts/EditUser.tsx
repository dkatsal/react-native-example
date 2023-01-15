import React, {FC, useEffect, useState} from 'react';

import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from '../UsersStyles';
import {useAppDispatch} from '../../../../store/configureStore';
import {UserById} from '../../../../models/manageUsers/manageUsers.model';
import {useNavigation} from '@react-navigation/native';
import {
  getUserById,
  updateUser,
} from '../../../../store/manageUsers/manageUsersSlice';
import DropDownPicker from 'react-native-dropdown-picker';

interface InitialUser {
  id: number;
  email: string;
}

interface IProps {
  route: any;
}

const initialOption = {
  permissions: {
    sign_in: 1,
    view_patient_list: 1,
    create_edit_patient: 1,
    view_questionnaire_list: 1,
    create_edit_questionnaire: 1,
    fill_questionnaire: 1,
    view_reports: 1,
    view_manage_user_list: 1,
    create_edit_manage_user: 1,
  },
};

const EditUser: FC<IProps> = ({route}) => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const {id} = route.params;

  const [isChanged, setIsChanged] = React.useState(false);
  const [user, setUser] = useState<UserById | null>(null);
  const [fields, setFields] = useState({
    first_name: '',
    last_name: '',
  });

  const [open, setOpen] = useState(false);
  const [roleValue, setRoleValue] = useState<any>(null);
  const [items, setItems] = useState([
    {label: 'Admin', value: 'admin'},
    {label: 'Clinician', value: 'clinician'},
  ]);

  useEffect(() => {
    dispatch(
      getUserById({
        id: +id,
        callback: response => {
          setUser(response);
        },
      }),
    );
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      setFields({first_name: user.first_name, last_name: user.last_name});
      setRoleValue(user.role[0].name === 'admin' ? 'admin' : 'clinician');
    }
  }, [user]);

  const handleChange = (fieldName: string) => (value: string) => {
    setIsChanged(true);
    setFields({
      ...fields,
      [fieldName]: value,
    });
  };

  const handleUpdateUser = () => {
    if (user) {
      let userData: InitialUser = {
        id: user.id,
        email: user.email,
      };

      const userProfileData = {
        ...fields,
      };

      const contactData = {
        phone: user.contact.length ? user.contact[0].phone : '',
        mobile: user.contact.length ? user.contact[0].mobile : '',
      };

      const roleData = {
        role: roleValue,
      };
      const options = {
        permissions:
          user.permissions && Object.keys(user.permissions).length !== 0
            ? user.permissions
            : initialOption.permissions,
      };

      const optionData = {
        ...JSON.parse(JSON.stringify(options)),
      };

      const sendData = {
        user: userData,
        user_profile: userProfileData,
        contact: contactData,
        role: roleData,
        option: optionData,
      };

      dispatch(
        updateUser({
          data: sendData,
          callback: () => {
            navigation.navigate('Users');
            setIsChanged(false);
          },
        }),
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.editUserWrapper}>
        <View style={styles.block}>
          <Text style={styles.label}>First name</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChange('first_name')}
            value={fields.first_name}
          />
        </View>
        <View style={styles.block}>
          <Text style={styles.label}>Last name</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChange('last_name')}
            value={fields.last_name}
          />
        </View>

        <View style={[styles.block, {marginBottom: 20, zIndex: 3}]}>
          <Text style={styles.label}>Role</Text>
          <DropDownPicker
            style={{
              borderRadius: 5,
              marginBottom: 20,
            }}
            zIndex={4}
            open={open}
            value={roleValue}
            items={items}
            setOpen={setOpen}
            setValue={setRoleValue}
            setItems={setItems}
            placeholder={(roleValue && roleValue[0]?.label) || ''}
          />
        </View>
      </View>
      <TouchableOpacity
        onPress={handleUpdateUser}
        disabled={!isChanged && user?.role && user.role[0].name === roleValue}
        style={[
          styles.btn,
          isChanged || (user?.role && user.role[0].name !== roleValue)
            ? {opacity: 1}
            : {opacity: 0.5},
        ]}>
        <Text style={styles.btnText}>UPDATE</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditUser;
