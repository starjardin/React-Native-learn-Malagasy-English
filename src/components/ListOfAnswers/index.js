import React, {useContext} from 'react';
import {View} from 'react-native';

import {LanguageContext} from '../../context/globalContext';
import List from '../List';
import {shuffle} from '../../utils/shuffle';
import {randomUniqueNum} from '../../utils/randomNumber';
import PhraseTextarea from '../PhraseTextarea';
import Subtitle from '../Subtitle';

export default ({route, navigation}) => {
  const {item} = route.params;
  const {state, dispatch} = useContext(LanguageContext);
  let {phrasesIds} = item;
  const {phrases} = state;

  let haveNumber = [];
  function generateUniqueRandom(maxNumber) {
    //!Generate random number
    let random = (Math.random() * maxNumber).toFixed();
    random = Number(random);
    if (!haveNumber.includes(random)) {
      haveNumber.push(random);
      return random;
    } else {
      if (haveNumber.length < maxNumber) {
        //!Recursively generate number
        return generateUniqueRandom(maxNumber);
      } else {
        return false;
      }
    }
  }

  const uniqueNumber = generateUniqueRandom(phrasesIds.length - 1);

  //!find a phrase from phrases that has the same id to the phraseId in line above
  const phraseToLearn = phrases.find(el => el.id === phrasesIds[uniqueNumber]);

  const uniqueNumb = randomUniqueNum(phrases.length, phrases.length);
  const randomNumb4 = phrases.indexOf(phraseToLearn);

  //! Pick an object from the phrases array by their indexes.
  const item1 = phrases[uniqueNumb[1]];
  const item2 = phrases[uniqueNumb[2]];
  const item3 = phrases[uniqueNumb[3]];
  const item4 = phrases[randomNumb4];
  const itemsToChooseFrom = [item1, item2, item3, item4];

  //!Suffle the items
  const shuffledAnswers = shuffle(itemsToChooseFrom);

  return (
    <View>
      <Subtitle text={`Category : ${item.name.en}`} />
      <PhraseTextarea phrase={phraseToLearn?.name.mg} />
      <View>
        <Subtitle text={'Pick a solution:'} />
        <List
          data={shuffledAnswers}
          buttonText="pick"
          navigation={navigation}
          navigateTo={'LearningScreenValidation'}
          onRowPress={() => {
            //!pass the shuffledAnswers to be displayed in the LearningValidationScreen
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
