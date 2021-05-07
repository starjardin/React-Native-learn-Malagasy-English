import React, {useContext} from 'react';
import List from './';
import {storiesOf} from '@storybook/react-native';
import {View} from 'react-native';
import {LanguageContext} from '../../context/globalContext';

const Parent = () => {
  const {dispatch} = useContext(LanguageContext);
  return <List dispatch={dispatch} />;
};

storiesOf('List', module)
  .addDecorator(getStory => <View>{getStory()}</View>)
  .add('List', () => <Parent />);
