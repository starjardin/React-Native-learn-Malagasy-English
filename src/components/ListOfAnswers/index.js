import React, {useContext, useState, useEffect} from 'react';
import {View, Text} from 'react-native';

import {LanguageContext} from '../../context/globalContext';
import List from '../List';
import {shuffle} from '../../utils/shuffle';
import PhraseTextarea from '../PhraseTextarea';

export default ({route, navigation}) => {
  const [isNextButtonShown, setIsNextButtonShown] = useState(false);
  const {item} = route.params;
  const {state, dispatch} = useContext(LanguageContext);
  const {phrasesIds} = item;
  const {phrases} = state;
  const randomPhrasesIdsNumber = Math.floor(Math.random() * phrasesIds.length);
  const phraseToLearn = phrases.find(
    el => el.id === phrasesIds[randomPhrasesIdsNumber],
  );

  const randomNumb1 = Math.floor(Math.random() * phrases.length);
  const randomNumb2 = Math.floor(Math.random() * phrases.length);
  const randomNumb3 = Math.floor(Math.random() * phrases.length);
  const randomNumb4 = phrases.indexOf(phraseToLearn);
  //? Pick an object from the phrases array by their indexes.
  const obj1 = phrases[randomNumb1];
  const obj2 = phrases[randomNumb2];
  const obj3 = phrases[randomNumb3];
  const obj4 = phrases[randomNumb4];
  const answers = [obj1, obj2, obj3, obj4];
  const shuffledAnswers = shuffle(answers);

  return (
    <View>
      <Text>Category: {item.name.en}</Text>
      <PhraseTextarea phrase={phraseToLearn?.name.mg} />
      <View>
        <Text>Pick a solution:</Text>
        <List
          buttonColor="red"
          data={shuffledAnswers}
          buttonText="pick"
          textColor="#06B6D4"
          navigation={navigation}
          navigateTo={'LearningScreenValidation'}
          onRowPress={() =>
            navigation.navigate('LearningScreenValidation', {shuffledAnswers})
          }
        />
      </View>
      <View>{isNextButtonShown && <Text>Hello world</Text>}</View>
    </View>
  );
};
