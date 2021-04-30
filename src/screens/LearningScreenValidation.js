import React, {useContext, useState} from 'react';
import {View, Text} from 'react-native';
import List from '../components/List';
import Button from '../components/NextButton';
import PhraseTextarea from '../components/PhraseTextarea';
import {LanguageContext} from '../context/globalContext';

export default ({route, navigation}) => {
  const {state} = useContext(LanguageContext);
  const {answer} = state;
  const phrase = state.phraseToLearn.mg;
  const category = state.categoryToLearn;
  const {shuffledAnswers} = route.params;
  const correctAnswer = answer.name.mg === phrase;

  const ListOfView = correctAnswer ? (
    <List data={shuffledAnswers} buttonText={'Pick'} textColor="#ff00ff" />
  ) : (
    <List data={shuffledAnswers} buttonText={'Pick'} textColor={'#00ffff'} />
  );
  return (
    <View>
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
