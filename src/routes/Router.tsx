import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {useAppSelector} from '../store/configureStore';
import {Users, SignInContainer, EditUser} from '../components/pages';

const Stack = createStackNavigator();

export const Router = (): JSX.Element => {
  const access_token = useAppSelector(state => state.user.access_token);

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
