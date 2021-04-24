import {action} from '@storybook/addon-actions';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import Button from './';

const styels = StyleSheet.create({
  containerStyles: {
    padding: 20,
  },
});

//? Please provide image format `ImageSource` other than svgs because svg soes not seem to work.

storiesOf('Button', module)
  .addDecorator(getStory => (
    <View style={styels.containerStyles}>{getStory()}</View>
  ))
  .add('tool-button setting', () => (
    <Button
      onPress={action('clicked-text for the new button')}
      ImageSource={require('../../icons/setting.png')}
      backgroundColor="#06B6D4"
    />
  ))
  .add('tool-button chevron', () => (
    <Button
      onPress={action('clicked-text for the new button')}
      ImageSource={require('../../icons/chevron-left.png')}
      backgroundColor="#06B6D4"
    />
  ))
  .add('tool-button tick', () => (
    <Button
      onPress={action('clicked-text for the new button')}
      ImageSource={require('../../icons/tick.png')}
      backgroundColor="#06B6D4"
    />
  ))
  .add('tool-button double tick', () => (
    <Button
      onPress={action('clicked-text for the new button')}
      ImageSource={require('../../icons/double-tick.png')}
      backgroundColor="#06B6D4"
    />
  ))
  .add('tool-button add', () => (
    <Button
      onPress={action('clicked-text for the new button')}
      ImageSource={require('../../icons/add.png')}
      backgroundColor="#06B6D4"
    />
  ));
