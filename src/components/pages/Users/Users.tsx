import React, {FC, useCallback, useState} from 'react';

import {useSelector} from 'react-redux';
import {Alert, Button, ScrollView, Text, View} from 'react-native';
import {styles} from './UsersStyles';
import {logout} from '../../../store/user/userSlice';
import {useAppDispatch} from '../../../store/configureStore';
import {RootState} from '../../../store/reducers';
import {
  deleteUserById,
  getUsersList,
} from '../../../store/manageUsers/manageUsersSlice';
import {
  FilterUsers,
  ManageUser,
} from '../../../models/manageUsers/manageUsers.model';
import UserItem from './parts/UserItem';
import {useFocusEffect, useNavigation} from '@react-navigation/native';

interface IProps {}

const Users: FC<IProps> = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  const usersList = useSelector(
    (state: RootState) => state.manageUsers.usersList,
  );

  const [searchUsers, setSearchUsers] = useState<FilterUsers>({
    ordering: {
      users: {
        created_at: 'desc',
      },
    },
    searching: '',
  });

  useFocusEffect(
    useCallback(() => {
      dispatch(
        getUsersList({
          data: searchUsers,
          page: 1,
        }),
      );
    }, []),
  );

  const editUser = (id: number) => {
    navigation.navigate('Edit user', {id});
  };

  const deleteUser = (user: ManageUser) => {
    Alert.alert(
      '',
      `Are you sure you want to delete this user? \n ${user.first_name} ${user.last_name}`,
      [
        {
          text: 'Cancel',
          onPress: () => {},
        },
        {
          text: 'OK',
          onPress: () => {
            dispatch(
              deleteUserById({
                ids: [user.id],
                callback: () => {
                  dispatch(getUsersList({data: searchUsers, page: 1}));
                },
              }),
            );
          },
        },
      ],
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.usersWrapper}>
        <View>
          {usersList?.data.length
            ? usersList?.data.map(user => (
                <UserItem
                  key={user.id}
                  userData={user}
                  deleteUser={deleteUser}
                  editUser={editUser}
                />
              ))
            : null}
        </View>
      </ScrollView>
      <View style={styles.logoutBtn}>
        <Button
          onPress={() => dispatch(logout())}
          title="logout"
          color="black"
        />
      </View>
    </View>
  );
};

export default Users;
