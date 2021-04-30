import React, {useContext} from 'react';
import {View} from 'react-native';

import {LanguageContext} from '../../context/globalContext';
import List from '../List';
import {shuffle} from '../../utils/shuffle';
import PhraseTextarea from '../PhraseTextarea';
import Subtitle from '../Subtitle';

export default ({route, navigation}) => {
  const {item} = route.params;
  const {state, dispatch} = useContext(LanguageContext);
  let {phrasesIds} = item;
  const {phrases, categories} = state;

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
      <Subtitle text={`Category : ${item.name.en}`} />
      <PhraseTextarea phrase={phraseToLearn.name?.mg} />
      <View>
        <Subtitle text={'Pick a solution:'} />
        <List
          data={shuffledAnswers}
          buttonText="pick"
          navigation={navigation}
          navigateTo={'LearningScreenValidation'}
          onRowPress={() => {
            navigation.navigate('LearningScreenValidation', {shuffledAnswers});
            dispatch({
              type: 'LEARN_PHRASE',
              phrase: phraseToLearn,
              category: item.name.en,
            });
          }}
        />
      </View>
    </View>
  );
};
