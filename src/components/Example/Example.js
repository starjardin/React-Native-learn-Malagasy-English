// components/Task.js
import * as React from 'react';
import { Text, SafeAreaView } from 'react-native';
// import { styles } from '../constants/globalStyles';

export default function Example({label}) {

  console.log(label);
  return (
    <SafeAreaView >
      <Text>{label}</Text>
      <Text>{label}</Text>
      <Text>{label}</Text>
      <Text>{label}</Text>
      <Text>{label}</Text>
      <Text>{label}</Text>
      <Text>{label}</Text>
      <Text>{label}</Text>
      <Text>{label}</Text>
      <Text>{label}</Text>
      <Text>{label}</Text>
      <Text>{label}</Text>
      <Text>{label}</Text>
      <Text>{label}</Text>
    </SafeAreaView>
  );
}