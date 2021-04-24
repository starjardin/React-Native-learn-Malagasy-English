import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import ToolButton from '../components/ToolButton';
import LanguageSwitcherButton from '../components/LanguageSwitcherButton';
import List from '../components/List';
import {LanguageContext} from '../context/globalContext';
import Settings from '../icons/setting-icon.svg';
import Add from '../icons/add.svg';
import Tick from '../icons/succes-white.svg';
import Doubletick from '../icons/success-double.svg';
import LanguageSwitcherIcon from '../icons/lang-switcher';
import ListItem from '../components/ListItem';

const styles = StyleSheet.create({
  container: {
    marginLeft: 23,
    marginRight: 23,
    marginTop: 35,
  },
  list: {
    flexBasis: '50%',
  },
  buttonContainer: {
    marginBottom: 20,
    flexDirection: 'row',
  },
  textStyles: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 22,
    color: '#111827',
  },
});

export default function ({navigation}) {
  const {state} = useContext(LanguageContext);
  const {categories} = state;
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <ToolButton backgroundColor="#06B6D4">
          <Add />
        </ToolButton>
        <LanguageSwitcherButton>
          <LanguageSwitcherIcon />
        </LanguageSwitcherButton>
        <ToolButton backgroundColor="#06B6D4">
          <Tick />
        </ToolButton>
        <ToolButton backgroundColor="#06B6D4">
          <Doubletick />
        </ToolButton>
        <ToolButton backgroundColor="#06B6D4">
          <Settings />
        </ToolButton>
      </View>
      <View style={styles.list}>
        <List
          data={categories}
          onRowPress={() => {
            navigation.navigate('LearningScreen');
          }}
        />
      </View>
      <View style={{marginTop: 23}}>
        <Text style={styles.textStyles}>Seen Prhases:</Text>
        <ListItem
          name={'{seenPhrase.length}Words and phrases'}
          onRowPress={() => {
            alert('You pressed and clicked');
          }}
        />
      </View>
      <View style={{marginTop: 23}}>
        <Text style={styles.textStyles}>Learnt Prhases:</Text>
        <ListItem
          name={'{learntPhrases.length} Words and phrases'}
          onRowPress={() => {
            alert('You pressed and clicked');
          }}
        />
      </View>
    </View>
  );
}
