import React, {useContext, useRef} from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import {LanguageContext} from '../../context/globalContext';
import ListItem from '../ListItem';

export default function List({
  buttonText,
  textColor,
  data,
  onRowPress,
  navigation,
  navigateTo,
}) {
  const {dispatch, state} = useContext(LanguageContext);
  const {answer} = state;
  const phrase = state.phraseToLearn.mg;
  const category = state.categoryToLearn;
  const rowRef = useRef(null);
  //TODO: You still need to do something with the langauge switcher

  function handlePress(item) {
    navigation && navigation.navigate(`${navigateTo}`, {item});
    if (onRowPress) {
      onRowPress();
      dispatch({
        type: 'FIND_ANSWER',
        payload: item,
      });
      // rowRef.current;
    }
  }
  console.log(rowRef);

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={({item, index}) => (
          <ListItem
            name={item.name.en}
            rowRef={rowRef}
            //The buttons inside list items can have text from props.
            buttonText={buttonText}
            textColor={textColor}
            onRowPress={() => handlePress(item)}
          />
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}
