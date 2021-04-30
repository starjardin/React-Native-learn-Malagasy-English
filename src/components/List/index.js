import React, {useContext, useState} from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import {LanguageContext} from '../../context/globalContext';
import ListItem from '../ListItem';

export default function List({data, onRowPress, navigation, navigateTo}) {
  const {dispatch} = useContext(LanguageContext);

  //TODO: You still need to do something with the langauge switcher

  function handlePress(item) {
    navigation && navigation.navigate(`${navigateTo}`, {item});
    if (onRowPress) {
      onRowPress();
      dispatch({
        type: 'FIND_ANSWER',
        payload: item,
      });
    }
  }

  const renderItems = ({item}) => {
    return (
      <ListItem
        item={item}
        name={item.name.en}
        onRowPress={() => handlePress(item)}
      />
    );
  };

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={renderItems}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const ListContext = React.createContext();

const ListContextProvider = ({children}) => {
  const [categorySelected, setCategorySelected] = useState('');
  return (
    <ListContext.Provider
      value={{
        categorySelected,
        setCategorySelected,
      }}>
      {children}
    </ListContext.Provider>
  );
};

export {ListContextProvider, ListContext};
