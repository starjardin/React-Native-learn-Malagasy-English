import React from 'react';
import PropTypes from 'prop-types';
import {SafeAreaView, StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
  listItemStyles: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 15,
    paddingTop: 15,
    paddingRight: 20,
    paddingLeft: 16,
  },
});

// I choose to render the text and the color from the props, just in case of change in the future

export default function ListItemHeadding({children}) {
  return (
    <SafeAreaView style={styles.containerStyles}>
      <View style={styles.listItemStyles}>{children}</View>
    </SafeAreaView>
  );
}

// Default prop types // just ignore if there is no props
ListItemHeadding.defaultProps = {
  children: null,
};

ListItemHeadding.propTypes = {
  children: PropTypes.node,
};
