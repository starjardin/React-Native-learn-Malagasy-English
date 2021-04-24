import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, Image, TouchableOpacity} from 'react-native';

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
  onPress,
  buttonText,
  ImageSource,
  textColor,
  ...restProps
}) {
  return (
    <TouchableOpacity style={styles.actionButtonStyles} activeOpacity={0.5}>
      <Text style={[styles.TextStyle, {color: textColor}]}> {buttonText} </Text>
      <Image source={ImageSource} style={styles.ImageIconStyle} />
    </TouchableOpacity>
  );
}

Button.defaultProps = {
  buttonText: null,
  ImageSource: null,
  onPress: () => {},
};

Button.propTypes = {
  buttonText: PropTypes.node,
  onPress: PropTypes.func,
};
