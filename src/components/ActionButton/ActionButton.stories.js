import {action} from '@storybook/addon-actions';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import Button from './';
import Error from '../../icons/error.svg';
import ArrowRight from '../../icons/arrow-right.svg';
import Success from '../../icons/success-green.svg';

const styels = StyleSheet.create({
  containerStyles: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

storiesOf('Button', module)
  .addDecorator(getStory => (
    <View style={styels.containerStyles}>{getStory()}</View>
  ))
  .add('Action Button error', () => (
    <Button
      onPress={action('clicked-text for the new button')}
      buttonText="I am the action button error"
      textColor="#D4068E">
      <Error />
    </Button>
  ))
  .add('Action Button wrong', () => (
    <Button
      onPress={action('clicked-text for the new button')}
      buttonText="Worng"
      textColor="#D4068E">
      <Error />
    </Button>
  ))
  .add('Action Button Learn', () => (
    <Button
      onPress={action('clicked-text for the new button')}
      buttonText="Learn"
      textColor="#06B6D4">
      <ArrowRight />
    </Button>
  ))
  .add('Action Button Pick', () => (
    <Button
      onPress={action('clicked-text for the new button')}
      buttonText="Pick"
      textColor="#06B6D4">
      <ArrowRight />
    </Button>
  ))
  .add('Action Button success', () => (
    <Button
      onPress={action('clicked-text for the new button')}
      buttonText="correct"
      textColor="#06D440">
      <Success />
    </Button>
  ));
