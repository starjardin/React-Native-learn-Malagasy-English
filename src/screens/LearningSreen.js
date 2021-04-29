// import React from 'react';
// import {Text, View} from 'react-native';

// export default function () {
//   return (
//     <View>
//       <Text>Hello world</Text>
//     </View>
//   );
// }

import React from 'react';
import {View, Text} from 'react-native';

export default ({route}) => {
  const {item} = route.params;
  return (
    <View>
      <Text>{JSON.stringify(item)}</Text>
      <Text>Hello</Text>
    </View>
  );
};
