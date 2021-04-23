import React from 'react';
import PropTypes from 'prop-types';
import {TouchableHighlight, StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
  nextButton: {
    backgroundColor: '#06B6D4',
    borderRadius: 30,
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 19,
    color: '#FFFFFF',
    paddingTop: 11,
    paddingBottom: 11,
    paddingRight: 31,
    paddingLeft: 27,
    justifyContent: 'center',
    alignSelf: 'center',
  },

  textStyle: {
    color: '#FFFFFF',
  },

  disabledButton: {
    backgroundColor: '#F9F9F9',
    borderStyle: 'solid',
    borderColor: '#06B6D4',
    borderWidth: 1,
    borderRadius: 30,
  },

  textStyleDisabledButtoon: {
    color: '#06B6D4',
  },
});

export default function Button({onPress, buttonText, disabled, ...restProps}) {
  return (
    <TouchableHighlight
      style={[styles.nextButton, disabled && styles.disabledButton]}
      onPress={onPress}>
      <Text
        style={[styles.textStyle, disabled && styles.textStyleDisabledButtoon]}>
        {buttonText}
      </Text>
    </TouchableHighlight>
  );
}

Button.defaultProps = {
  buttonText: null,
  onPress: () => {},
};

Button.propTypes = {
  buttonText: PropTypes.node,
  onPress: PropTypes.func,
};
