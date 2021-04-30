import React, {useState, useContext} from 'react';
import PropTypes from 'prop-types';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Button from '../ActionButton';
import ArrowRight from '../../icons/arrow-right.svg';
import Correct from '../../icons/success-green';
import {LanguageContext} from '../../context/globalContext';

const styles = StyleSheet.create({
  containerStyles: {
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderBottomColor: '#E5E5E5',
  },

  listItemStyles: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 17,
    paddingRight: 20,
    paddingLeft: 16,
    paddingTop: 17,
  },
  textStyles: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 19,
    flexBasis: '70%',
    color: '#111827',
  },
});

// I choose to render the text and the color from the props, just in case of change in the future

export default function ListItem({name, onRowPress, textColor, rowRef}) {
  const {state} = useContext(LanguageContext);
  const {phraseToLearn, answer} = state;

  function handlePress() {
    if (onRowPress) {
      onRowPress();
    }
  }

  let touchProps = {
    style: [styles.listItemStyles],
  };

  return (
    <SafeAreaView style={styles.containerStyles}>
      <TouchableOpacity
        {...touchProps}
        //if onRowPress exists from the parent element then invoke it or else just return null
        onPress={() => handlePress(name)}>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={[styles.textStyles]}>
          {name}
        </Text>
        {/* {TODO: May be I need to figure something out here} */}
        <Button
          buttonText={
            name.trim().toLowerCase() === phraseToLearn.en.trim().toLowerCase()
              ? 'correct'
              : 'Pick'
          }
          textColor={
            name.trim().toLowerCase() === phraseToLearn.en.trim().toLowerCase()
              ? '#06D440'
              : '#06B6D4'
          }
          onPressButton={onRowPress ? onRowPress : null}>
          {name === phraseToLearn.en ? <Correct /> : <ArrowRight />}
        </Button>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

// Default prop types // just ignore if there is no props
ListItem.defaultProps = {
  name: null,
  onRowPress: null,
  buttonText: null,
};

ListItem.propTypes = {
  name: PropTypes.string,
  onRowPress: PropTypes.func,
  buttonText: PropTypes.string,
};
