import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import ListItemHeadding from './';
import Button from '../ActionButton';
import ArrowRight from '../../icons/arrow-right.svg';

const styels = StyleSheet.create({
  containerStyles: {
    margin: 20,
  },

  textStyles: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 19,
    color: '#111827',
  },
});

storiesOf('Section Heading', module)
  .addDecorator(getStory => (
    <View style={styels.containerStyles}>{getStory()}</View>
  ))
  .add('Section Heading', () => (
    <View>
      <ListItemHeadding>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styels.textStyles}>
          All
        </Text>
        <Button buttonText={'Learn'} textColor="#06B6D4">
          <ArrowRight />
        </Button>
      </ListItemHeadding>
      <ListItemHeadding>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styels.textStyles}>
          All
        </Text>
        <Button buttonText={'Pick'} textColor="#06B6D4">
          <ArrowRight />
        </Button>
      </ListItemHeadding>
      <ListItemHeadding>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styels.textStyles}>
          All
        </Text>
        <Button buttonText={'Learn'} textColor="#06B6D4">
          <ArrowRight />
        </Button>
      </ListItemHeadding>
      <ListItemHeadding>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styels.textStyles}>
          All
        </Text>
        <Button buttonText={'Pick'} textColor="#06B6D4">
          <ArrowRight />
        </Button>
      </ListItemHeadding>
    </View>
  ));
