import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import ListItem from '../ListItem';

export default function List({
  buttonText,
  textColor,
  data,
  onRowPress,
  navigation,
  navigateTo,
}) {
  //TODO: You still need to do something with the langauge switcher
  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={({item, index}) => (
          <ListItem
            name={item.name.en}
            //The buttons inside list items can have text from props.
            buttonText={buttonText}
            textColor={textColor}
            onRowPress={
              //Some lists do not have onRowPress function but get the navigation props
              onRowPress
                ? onRowPress
                : // if the list does not have onRowPress but has navigation props: do this following.
                  () =>
                    navigation && navigation.navigate(`${navigateTo}`, {item})
            }
          />
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}
