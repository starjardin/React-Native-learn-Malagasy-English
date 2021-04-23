import {action} from '@storybook/addon-actions';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {View} from 'react-native';
import Button from './';

storiesOf('Button', module)
  .addDecorator(getStory => <View>{getStory()}</View>)
  .add('Next Button', () => (
    <Button
      onPress={action('clicked-text for the new button')}
      buttonText="Next"
    />
  ))
  .add('Disabled Button', () => (
    <Button
      onPress={action('clicked-text for the new button')}
      buttonText="Next"
      disabled
    />
  ));
