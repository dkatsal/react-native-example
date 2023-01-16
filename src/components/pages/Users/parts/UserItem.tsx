import React, {FC} from 'react';

import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../UsersStyles';
import {ManageUser} from '../../../../models/manageUsers/manageUsers.model';
import EditIcon from '../../../../helpers/editIcon';
import RemoveIcon from '../../../../helpers/removeIcon';

interface IProps {
  userData: ManageUser;
  deleteUser: (user: ManageUser) => void;
  editUser: (id: number) => void;
}

const UserItem: FC<IProps> = ({userData, deleteUser, editUser}) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <Text style={styles.id}>{userData.id}</Text>
        <Text style={styles.name} numberOfLines={1}>
          {`${userData.first_name} ${userData.last_name}`}
        </Text>
      </View>
      <View style={styles.itemRight}>
        <Text style={styles.role}>{userData.role}</Text>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => {
            editUser(userData.id);
          }}>
          <EditIcon width={15} height={14} color={'#53A0DF'} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => {
            deleteUser(userData);
          }}>
          <RemoveIcon width={15} height={14} color={'#53A0DF'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserItem;
