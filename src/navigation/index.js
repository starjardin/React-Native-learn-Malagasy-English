import React from 'react';
import LearningScreen from '../screens/LearningSreen';
import Home from '../screens/Home';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

const CurrentListStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      // screenOptions={{
      //   headerShown: false,
      // }}>
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="LearningScreen" component={LearningScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default CurrentListStack;

// yarn add @react-navigation/native
// yarn add install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
