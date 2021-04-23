import {action} from '@storybook/addon-actions';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import Button from './';

const styels = StyleSheet.create({
  containerStyles: {
    padding: 10,
  },
});

storiesOf('Button', module)
  .addDecorator(getStory => (
    <View style={styels.containerStyles}>{getStory()}</View>
  ))
  .add('Next Button', () => (
    <Button
      onPress={action('clicked-text for the new button')}
      buttonText="Next"
    />
  ))
  .add('Disabled Button', () => (
    <Button
      onPress={action('clicked-text for the new button')}
      buttonText="Disabled"
      disabled
    />
  ));
