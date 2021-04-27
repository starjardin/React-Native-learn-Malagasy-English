import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import ListItem from './';

const styles = StyleSheet.create({
  containerStyles: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#E5E5E5',
    borderRadius: 3,
    margin: 20,
  },
  //   containerStyles: {},
});

storiesOf('ListItem', module)
  .addDecorator(getStory => (
    <View style={styles.containerStyles}>{getStory()}</View>
  ))
  .add('ListItem', () => (
    <View>
      <ListItem name="Hello" />
    </View>
  ));
