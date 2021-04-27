import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import ListItem from '../ListItem';
import {categories} from '../../data/categories.json';

export default function List({navigation, lang}) {
  //TODO: You still need to do something with the langauge switcher
  return (
    <SafeAreaView>
      <FlatList
        data={categories}
        renderItem={({item, index}) => (
          <ListItem
            name={item.name.en}
            onRowPress={() => {
              //? here is your page navigation
              //? navigation.navigate('LearningPage');
            }}
          />
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}
