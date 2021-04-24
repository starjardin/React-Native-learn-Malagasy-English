import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import ListItem from './';
import Button from '../ActionButton';
import ArrowRight from '../../icons/arrow-right.svg';

const styels = StyleSheet.create({
  containerStyles: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#E5E5E5',
    borderRadius: 3,
    margin: 20,
  },
  //   containerStyles: {},

  textStyles: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 19,
    flexBasis: '70%',
    color: '#111827',
  },
});

storiesOf('ListItem', module)
  .addDecorator(getStory => (
    <View style={styels.containerStyles}>{getStory()}</View>
  ))
  .add('ListItem', () => (
    <View>
      <ListItem>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styels.textStyles}>
          An unncessessarly loooooooooooooooong cat
        </Text>
        <Button buttonText={'Learn'} textColor="#06B6D4">
          <ArrowRight />
        </Button>
      </ListItem>
      <ListItem>
        <Text style={styels.textStyles}>All</Text>
        <Button buttonText={'Learn'} textColor="#06B6D4">
          <ArrowRight />
        </Button>
      </ListItem>
      <ListItem>
        <Text style={styels.textStyles}>All</Text>
        <Button buttonText={'Learn'} textColor="#06B6D4">
          <ArrowRight />
        </Button>
      </ListItem>
      <ListItem>
        <Text style={styels.textStyles}>All</Text>
        <Button buttonText={'Learn'} textColor="#06B6D4">
          <ArrowRight />
        </Button>
      </ListItem>
      <ListItem>
        <Text style={styels.textStyles}>All</Text>
        <Button buttonText={'Learn'} textColor="#06B6D4">
          <ArrowRight />
        </Button>
      </ListItem>
      <ListItem>
        <Text style={styels.textStyles}>All</Text>
        <Button buttonText={'Learn'} textColor="#06B6D4">
          <ArrowRight />
        </Button>
      </ListItem>
    </View>
  ));
