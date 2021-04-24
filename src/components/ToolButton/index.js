import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

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
  children,
  backgroundColor,
  ...restProps
}) {
  return (
    <TouchableOpacity
      style={[styles.toolButtonStyles, {backgroundColor: backgroundColor}]}
      activeOpacity={0.5}
      onPress={onPress}>
      <View>{children}</View>
    </TouchableOpacity>
  );
}

Button.defaultProps = {
  onPress: () => {},
  children: null,
};

Button.propTypes = {
  onPress: PropTypes.func,
  children: PropTypes.node,
};
