import {action} from '@storybook/addon-actions';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import Button from './';
import Setting from '../../icons/setting.svg';
import Chevron from '../../icons/chevron-left.svg';
import Tick from '../../icons/succes-white.svg';
import Doubletick from '../../icons/success-double.svg';
import Add from '../../icons/add.svg';

const styels = StyleSheet.create({
  containerStyles: {
    padding: 20,
  },
});

storiesOf('Button', module)
  .addDecorator(getStory => (
    <View style={styels.containerStyles}>{getStory()}</View>
  ))
  .add('tool-button setting', () => (
    <Button
      onPress={action('clicked-text for the new button')}
      backgroundColor="#06B6D4">
      <Setting />
    </Button>
  ))
  .add('tool-button chevron', () => (
    <Button
      onPress={action('clicked-text for the new button')}
      backgroundColor="#06B6D4">
      <Chevron />
    </Button>
  ))
  .add('tool-button tick', () => (
    <Button
      onPress={action('clicked-text for the new button')}
      backgroundColor="#06B6D4">
      <Tick />
    </Button>
  ))
  .add('tool-button double tick', () => (
    <Button
      onPress={action('clicked-text for the new button')}
      backgroundColor="#06B6D4">
      <Doubletick />
    </Button>
  ))
  .add('tool-button add', () => (
    <Button
      onPress={action('clicked-text for the new button')}
      backgroundColor="#06B6D4">
      <Add />
    </Button>
  ));
