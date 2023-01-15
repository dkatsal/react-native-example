import React from 'react';
import {useSelector} from 'react-redux';
import {Users, SignInContainer, EditUser} from '../components/pages';

import {RootState} from '../store/reducers';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export const Router = (): JSX.Element => {
  const access_token = useSelector(
    (state: RootState) => state.user.access_token,
  );

  let routes: JSX.Element = (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'Sign In'} component={SignInContainer} />
    </Stack.Navigator>
  );

  if (access_token) {
    routes = (
      <Stack.Navigator>
        <Stack.Screen name={'Users'} component={Users} />
        <Stack.Screen name={'Edit user'} component={EditUser} />
      </Stack.Navigator>
    );
  }

  return routes;
};
