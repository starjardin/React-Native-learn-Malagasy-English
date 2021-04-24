import React from 'react';
import {View, Text} from 'react-native';

export default ({route}) => {
  const {item} = route.params;
  return (
    <View>
      <Text>{JSON.stringify(item, null, 2)}</Text>
    </View>
  );
};
