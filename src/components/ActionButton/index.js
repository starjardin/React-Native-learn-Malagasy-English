import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, Image, SafeAreaView} from 'react-native';

const styles = StyleSheet.create({
  actionButtonStyles: {
    color: '#FF0000',
  },
});

export default function Button({
  onPress,
  buttonText,
  disabled,
  ImageSource,
  textColor,
  ...restProps
}) {
  return (
    <SafeAreaView
      style={[styles.actionButtonStyles]}
      onPress={onPress}
      porps={restProps}>
      <Text style={{color: textColor}}>{buttonText}</Text>
      <Image source={ImageSource} />
    </SafeAreaView>
  );
}

Button.defaultProps = {
  buttonText: null,
  disabled: false,
  onPress: () => {},
};

Button.propTypes = {
  buttonText: PropTypes.node,
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
};
