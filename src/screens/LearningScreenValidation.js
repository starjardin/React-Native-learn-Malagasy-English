import React, {useContext} from 'react';
import {View, Text} from 'react-native';

import List from '../components/List';
import Button from '../components/NextButton';
import PhraseTextarea from '../components/PhraseTextarea';
import {LanguageContext} from '../context/globalContext';
import Navbar from '../components/Navbar';
import {containerStyles} from '../styles/containerStyles';

export default ({route, navigation}) => {
  const {state} = useContext(LanguageContext);
  const phrase = state.phraseToLearn.mg;
  const category = state.categoryToLearn;
  const {shuffledAnswers} = route.params;

  const ListOfView = (
    <List data={shuffledAnswers} buttonText={'Pick'} textColor={'#00ffff'} />
  );
  return (
    <View style={containerStyles.container}>
      <Navbar page="HomeScreenValidation" navigation={navigation} />
      <View>
        <Text>Category: {category}</Text>
      </View>
      <View>
        <PhraseTextarea phrase={phrase} />
      </View>
      {ListOfView}
      <Button
        buttonText={'Next'}
        onPress={() => {
          navigation.navigate('LearningScreen');
        }}
      />
    </View>
  );
};
