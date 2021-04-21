// components/Task.js
import * as React from 'react';
import { TextInput, SafeAreaView } from 'react-native';
// import { styles } from '../constants/globalStyles';

export default function Example({label}) {
  return (
    <SafeAreaView >
      <TextInput value={label} editable={false} />
    </SafeAreaView>
  );
}