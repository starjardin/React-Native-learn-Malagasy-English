// components/Task.js
import * as React from 'react';
// import { styles } from '../constants/globalStyles';
import { TouchableHighlight } from 'react-native';


export default function Button({text}) {
  return <TouchableHighlight >{ text }</TouchableHighlight>
}