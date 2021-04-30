import React from 'react';

import {StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
  textStyles: {
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 22,
    color: '#111827',
    marginBottom: 23,
    marginTop: 23,
  },
});

export default function Subtitle({text}) {
  return <Text style={styles.textStyles}>{text}</Text>;
}
