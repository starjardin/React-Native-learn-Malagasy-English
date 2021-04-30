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
  const [seenResponse, setSeenResponse] = useState(false);

  return (
    <View>
      <View>
        <Text>Category: {category}</Text>
      </View>
      <View>
        <PhraseTextarea phrase={phrase} />
      </View>
      <List
        data={shuffledAnswers}
        buttonText={'Pick'}
        textColor={answer.name.mg === phrase ? '#ff00ff' : '#00ffff'}
      />
      <Button
        buttonText={'Next'}
        onPress={() => {
          navigation.navigate('LearningScreen');
          setSeenResponse(!seenResponse);
        }}
      />
    </View>
  );
};
