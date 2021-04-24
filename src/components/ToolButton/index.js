import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  toolButtonStyles: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 40,
    height: 40,
    borderRadius: 50,
    justifyContent: 'center',
  },
});

export default function Button({
  onPress,
  ImageSource,
  backgroundColor,
  ...restProps
}) {
  return (
    <TouchableOpacity
      style={[styles.toolButtonStyles, {backgroundColor: backgroundColor}]}
      activeOpacity={0.5}>
      <Image source={ImageSource} />
    </TouchableOpacity>
  );
}

Button.defaultProps = {
  ImageSource: null,
  onPress: () => {},
};

Button.propTypes = {
  onPress: PropTypes.func,
};
