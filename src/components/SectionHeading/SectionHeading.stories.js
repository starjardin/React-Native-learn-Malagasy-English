import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import ListItemHeadding from './';

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
      <ListItemHeadding actionText="All" buttonText="Learn" />
      <ListItemHeadding actionText="Will " buttonText="Pick" />
      <ListItemHeadding actionText="All" buttonText="Learn" />
      <ListItemHeadding actionText="Not all All" buttonText="Pick" />
    </View>
  ));
