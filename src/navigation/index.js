import React from 'react';
import LearningScreen from '../screens/LearningSreen';
import Home from '../screens/Home';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import LearningScreenValidation from '../screens/LearningScreenValidation';

const Stack = createStackNavigator();

const CurrentListStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="LearningScreen" component={LearningScreen} />
        <Stack.Screen
          name="LearningScreenValidation"
          component={LearningScreenValidation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default CurrentListStack;
