import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import ListItem from '../ListItem';

export default function List({navigation, lang, data, onRowPress}) {
  //TODO: You still need to do something with the langauge switcher
  console.log(navigation);
  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={({item, index}) => (
          <ListItem
            name={item.name.en}
            onRowPress={() => {
              navigation.navigate('LearningScreen', {
                item,
              });
            }}
          />
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}
