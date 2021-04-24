import React from 'react';
import List from './';
import {storiesOf} from '@storybook/react-native';
import {View} from 'react-native';

storiesOf('List', module)
  .addDecorator(getStory => <View>{getStory()}</View>)
  .add('List', () => <List />);
