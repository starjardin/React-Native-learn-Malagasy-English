import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import SectionHeader from './';

const styels = StyleSheet.create({
  containerStyles: {
    padding: 20,
  },
});

storiesOf('SectionHeader', module)
  .addDecorator(getStory => (
    <View style={styels.containerStyles}>{getStory()}</View>
  ))
  .add('Section header', () => (
    <SectionHeader headerText="Learn Malagasy" textColor="#06B6D4" />
  ));
