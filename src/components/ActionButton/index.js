import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  actionButtonStyles: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icons: {
    width: 16,
    height: 16,
  },
  TextStyle: {
    textTransform: 'capitalize',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'right',
    paddingRight: 10,
  },
});

export default function Button({
  onPressButton,
  buttonText,
  textColor,
  children,
  ...restProps
}) {
  return (
    <TouchableOpacity
      style={styles.actionButtonStyles}
      activeOpacity={0.5}
      onPress={onPressButton}
      {...restProps}>
      <Text style={[styles.TextStyle, {color: textColor}]}> {buttonText} </Text>
      {children}
    </TouchableOpacity>
  );
}

Button.defaultProps = {
  buttonText: null,
  onPress: () => {},
  children: null,
};

Button.propTypes = {
  buttonText: PropTypes.node,
  onPress: PropTypes.func,
  children: PropTypes.node,
};
