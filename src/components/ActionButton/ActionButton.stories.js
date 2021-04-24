import {action} from '@storybook/addon-actions';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import Button from './';

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
      ImageSource={require('../../icons/error.png')}
      textColor="#D4068E"
    />
  ))
  .add('Action Button wrong', () => (
    <Button
      onPress={action('clicked-text for the new button')}
      buttonText="Worng"
      ImageSource={require('../../icons/error.png')}
      textColor="#D4068E"
    />
  ))
  .add('Action Button Learn', () => (
    <Button
      onPress={action('clicked-text for the new button')}
      buttonText="Learn"
      ImageSource={require('../../icons/arrow.png')}
      textColor="#06B6D4"
    />
  ))
  .add('Action Button Pick', () => (
    <Button
      onPress={action('clicked-text for the new button')}
      buttonText="Pick"
      ImageSource={require('../../icons/arrow.png')}
      textColor="#06B6D4"
    />
  ))
  .add('Action Button success', () => (
    <Button
      onPress={action('clicked-text for the new button')}
      buttonText="correct"
      ImageSource={require('../../icons/success.png')}
      textColor="#06D440"
    />
  ));
