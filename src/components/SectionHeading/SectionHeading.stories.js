import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import ListItemHeading from './';

const styels = StyleSheet.create({
  containerStyles: {
    margin: 20,
  },
});

storiesOf('Section Heading', module)
  .addDecorator(getStory => (
    <View style={styels.containerStyles}>{getStory()}</View>
  ))
  .add('Section Heading', () => (
    <View>
      <ListItemHeading actionText="All" buttonText="Learn" />
      <ListItemHeading actionText="Will " buttonText="Pick" />
      <ListItemHeading actionText="All" buttonText="Learn" />
      <ListItemHeading actionText="Not all All" buttonText="Pick" />
    </View>
  ));
