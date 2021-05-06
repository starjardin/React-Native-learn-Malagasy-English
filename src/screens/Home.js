import React, {useContext} from 'react';
import {SafeAreaView, View} from 'react-native';

import List from '../components/List';
import {LanguageContext} from '../context/globalContext';

import Navbar from '../components/Navbar';
import {containerStyles} from '../styles/containerStyles';
import Subtitle from '../components//Subtitle';

export default function ({navigation}) {
  const {state} = useContext(LanguageContext);
  const {categories} = state;

  return (
    <SafeAreaView>
      <View style={containerStyles.container}>
        <Navbar navigation={navigation} page="Home" />
        <Subtitle text={'Select a category:'} />
        <List
          data={categories}
          navigation={navigation}
          navigateTo="LearningScreen"
          buttonText="Learn"
          textColor="#06B6D4"
        />
      </View>
    </SafeAreaView>
  );
}
