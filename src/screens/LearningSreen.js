import React, {useContext} from 'react';
import {View, Text} from 'react-native';

import {LanguageContext} from '../context/globalContext';
import ToolButton from '../components/ToolButton';
import LanguageSwitcherButton from '../components/LanguageSwitcherButton';
import Settings from '../icons/setting-icon.svg';
import ChevronLeft from '../icons/chevron-left.svg';
import LanguageSwitcherIcon from '../icons/lang-switcher';
import {Outset, styles} from '../screens/Home';
import PhraseTextArea from '../components/PhraseTextarea';
import List from '../components/List';

export default ({route, navigation}) => {
  const {item} = route.params;
  const {state, dispatch} = useContext(LanguageContext);
  console.log(state);
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

  function shuffle(sourceArray) {
    for (var i = 0; i < sourceArray.length - 1; i++) {
      var j = i + Math.floor(Math.random() * (sourceArray.length - i));

      var temp = sourceArray[j];
      sourceArray[j] = sourceArray[i];
      sourceArray[i] = temp;
    }
    return sourceArray;
  }

  const shuffledAnswers = shuffle(answers);
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <ToolButton
          backgroundColor="#06B6D4"
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <ChevronLeft />
        </ToolButton>
        <Outset />
        <ToolButton backgroundColor="#06B6D4">
          <Settings />
        </ToolButton>
        <Outset />
        <LanguageSwitcherButton>
          <LanguageSwitcherIcon />
        </LanguageSwitcherButton>
      </View>
      <Text>Category: {item.name.en}</Text>
      <PhraseTextArea phrase={phraseToLearn?.name.mg} />
      <View>
        <Text>Pick a solution:</Text>
        <List
          buttonColor="red"
          data={shuffledAnswers}
          buttonText="pick"
          onRowPress={
            // console.log(event._dispatchInstances.memoizedProps.children)
            event =>
              dispatch({
                type: 'answerQuestion',
                payload: event._dispatchInstances.memoizedProps.children,
              })
          }
        />
      </View>
    </View>
  );
};
