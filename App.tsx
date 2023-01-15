import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  // StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Provider as ReduxProvider} from 'react-redux';
import store from './src/store/configureStore';
import {Router} from './src/routes/Router';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
//
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//
const Stack = createNativeStackNavigator();

// function HomeScreen() {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }
//
// const Stack = createNativeStackNavigator();
//
// function App() {
//   return (
//     <NavigationContainer>
//       <ReduxProvider store={store}>
//         <Stack.Navigator>
//           <Stack.Screen name="Home" component={HomeScreen} />
//         </Stack.Navigator>
//       </ReduxProvider>
//     </NavigationContainer>
//   );
// }

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const Stack = createNativeStackNavigator();

  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </ReduxProvider>
  );
};
// </SafeAreaView>

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
// });

export default App;
