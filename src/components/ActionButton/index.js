import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, Image, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  actionButtonStyles: {},
  icons: {
    width: 20,
    height: 20,
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
    <TouchableOpacity
      style={[styles.actionButtonStyles]}
      onPress={onPress}
      porps={restProps}>
      <Text style={{color: textColor}}>{buttonText}</Text>
      <Image source={ImageSource} />
      <Image
        source={require('../../icons//error.svg')}
        resizeMode="contain"
        style={styles.icons}
      />
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
  //   ImageSource: PropTypes.string,
  //   textColor: PropTypes.color,
};
