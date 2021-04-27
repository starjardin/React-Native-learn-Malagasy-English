import {action} from '@storybook/addon-actions';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import Button from './';
import LanguageSwitcher from '../../icons/lang-switcher.svg';

const styels = StyleSheet.create({
  containerStyles: {
    padding: 20,
    flexDirection: 'row',
  },
});

storiesOf('Langauge switch', module)
  .addDecorator(getStory => (
    <View style={styels.containerStyles}>{getStory()}</View>
  ))
  .add('Switch Language', () => (
    <Button onPress={action('you switched language')}>
      <LanguageSwitcher />
    </Button>
  ));
