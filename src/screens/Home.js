import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ToolButton from '../components/ToolButton';
import LanguageSwitcherButton from '../components/LanguageSwitcherButton';
import List from '../components/List';
import {categories} from '../data/categories.json';
import Settings from '../icons/setting-icon.svg';
import Add from '../icons/add.svg';
import Tick from '../icons/succes-white.svg';
import Doubletick from '../icons/success-double.svg';
import LanguageSwitcherIcon from '../icons/lang-switcher';

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
});

export default function ({navigation}) {
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
      <Text>Hello world</Text>
      <View style={styles.list}>
        <List
          data={categories}
          onRowPress={() => {
            alert('You pressed and clicked');
          }}
        />
      </View>
    </View>
  );
}
