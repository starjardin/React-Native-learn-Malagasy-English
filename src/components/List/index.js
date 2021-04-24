import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import ListItem from '../ListItem';

export default function List({navigation, navigateTo, data}) {
  //TODO: You still need to do something with the langauge switcher
  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={({item, index}) => (
          <ListItem
            name={item.name.en}
            onRowPress={() => {
              navigation.navigate(`${navigateTo}`, {
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
