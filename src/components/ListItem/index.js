import React from 'react';
import PropTypes from 'prop-types';
import {SafeAreaView, StyleSheet, View} from 'react-native';

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
});

// I choose to render the text and the color from the props, just in case of change in the future

export default function ListItem({children}) {
  return (
    <SafeAreaView style={styles.containerStyles}>
      <View style={styles.listItemStyles}>{children}</View>
    </SafeAreaView>
  );
}

// Default prop types // just ignore if there is no props
ListItem.defaultProps = {
  headerText: null,
  textColor: null,
};

ListItem.propTypes = {
  HeaderText: PropTypes.string,
  textColor: PropTypes.string,
};
