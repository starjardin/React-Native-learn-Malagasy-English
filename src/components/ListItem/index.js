import React from 'react';
import PropTypes from 'prop-types';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Button from '../ActionButton';
import ArrowRight from '../../icons/arrow-right.svg';

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

export default function ListItem({
  name,
  onRowPress,
  buttonText,
  textColor,
  rowRef,
}) {
  return (
    <SafeAreaView style={styles.containerStyles}>
      <TouchableOpacity
        style={styles.listItemStyles}
        //if onRowPress exists form the parent element then invoke it or else just return null
        onPress={onRowPress ? onRowPress : null}>
        <Text
          ref={rowRef}
          numberOfLines={1}
          ellipsizeMode="tail"
          style={[styles.textStyles]}
          // textColor && {color: textColor}]}
        >
          {name}
        </Text>
        <Button
          buttonText={buttonText !== '' ? buttonText : 'Learn'}
          textColor={textColor}
          onPressButton={onRowPress ? onRowPress : null}>
          <ArrowRight />
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
