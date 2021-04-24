import React, {useContext} from 'react';
import {View, Text} from 'react-native';

import {LanguageContext} from '../context/globalContext';
import ToolButton from '../components/ToolButton';
import LanguageSwitcherButton from '../components/LanguageSwitcherButton';
import Settings from '../icons/setting-icon.svg';
import ChevronLeft from '../icons/chevron-left.svg';
import LanguageSwitcherIcon from '../icons/lang-switcher';
import {Outset, styles} from '../screens/Home';

export default ({route, navigation}) => {
  console.log(navigation);
  const {item} = route.params;
  const {state} = useContext(LanguageContext);
  const {phrases} = state;
  return (
    <View>
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
      <Text>I am the : {JSON.stringify(phrases)}</Text>
    </View>
  );
};
