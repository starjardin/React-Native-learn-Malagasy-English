import React from 'react';
import {View} from 'react-native';

import ToolButton from '../components/ToolButton';
import LanguageSwitcherButton from '../components/LanguageSwitcherButton';
import Settings from '../icons/setting-icon.svg';
import ChevronLeft from '../icons/chevron-left.svg';
import LanguageSwitcherIcon from '../icons/lang-switcher';
import {Outset, styles} from '../screens/Home';
import Answers from '../components/ListOfAnswers/';

export default ({route, navigation}) => {
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

      <Answers route={route} navigation={navigation} />
    </View>
  );
};
