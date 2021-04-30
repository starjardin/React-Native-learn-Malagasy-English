import React, {useContext} from 'react';
import {View} from 'react-native';

import List from '../components/List';
import {LanguageContext} from '../context/globalContext';

import Navbar from '../components/Navbar';
import {containerStyles} from '../styles/containerStyles';
import Subtitle from '../components//Subtitle';

export default function ({navigation}) {
  const {state} = useContext(LanguageContext);
  const {categories} = state;

  return (
    <View style={containerStyles.container}>
      <Navbar navigation={navigation} page="Home" />
      <View style={[containerStyles.list]}>
        <Subtitle text={'Select a category:'} />
        <List
          data={categories}
          navigation={navigation}
          navigateTo="LearningScreen"
          buttonText="Learn"
          textColor="#06B6D4"
        />
      </View>
      {/* <View style={{marginTop: 23}}>
        <Text style={styles.textStyles}>Seen Prhases:</Text>
        <ListItem
          data={seenPhrases}
          navigation={navigation}
          navigateTo="LearningScreen"
          buttonText="Learn"
          textColor="#06B6D4"
          onRowPress={() => {
            alert('You pressed and clicked');
          }}
        />
      </View> */}
      {/* <View style={{marginTop: 23}}>
        <Text style={styles.textStyles}>Learnt Prhases:</Text>
        <ListItem
          name={'{learntPhrases.length} Words and phrases'}
          onRowPress={() => {
            alert('You pressed and clicked');
          }}
        />
      </View> */}
    </View>
  );
}
