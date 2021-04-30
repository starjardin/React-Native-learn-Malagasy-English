import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import Button from '../ActionButton';
import ArrowRight from '../../icons/arrow-right.svg';
import Correct from '../../icons/success-green';
import Incorrect from '../../icons/x-error.svg';
import {LanguageContext} from '../../context/globalContext';
import {listItemStyles} from '../../styles/ListemStyles';
import {ListContext} from '../List';

// I choose to render the text and the color from the props, just in case of change in the future

export default function ListItem({item, name, onRowPress}) {
  const {state} = useContext(LanguageContext);
  const {categorySelected, setCategorySelected} = useContext(ListContext);
  const {phraseToLearn} = state;

  function handlePress() {
    if (onRowPress) {
      onRowPress();
    }
  }

  const buttons =
    name === phraseToLearn.en && categorySelected ? (
      <Button buttonText={'correct'} textColor={'#06D440'}>
        <Correct />
      </Button>
    ) : categorySelected === item.id ? (
      <Button buttonText={'wrong'} textColor={'#D4068E'}>
        <Incorrect />
      </Button>
    ) : (
      <Button buttonText={'Pick'} textColor={'#06B6D4'}>
        <ArrowRight />
      </Button>
    );

  const listItemView = (
    <View style={listItemStyles.itemStyles}>
      <Text
        numberOfLines={1}
        ellipsizeMode="tail"
        style={[listItemStyles.textStyles]}>
        {name}
      </Text>
      {buttons}
    </View>
  );

  const touchProps = {
    style: [listItemStyles.containerStyles],
    onPress: () => {
      handlePress(name);
      setCategorySelected(item.id);
    },
  };

  return (
    <SafeAreaView>
      <TouchableOpacity {...touchProps}>{listItemView}</TouchableOpacity>
    </SafeAreaView>
  );
}

// Default prop types // just ignore if there is no props
ListItem.defaultProps = {
  name: null,
  onRowPress: null,
  buttonText: null,
};

ListItem.propTypes = {
  name: PropTypes.string,
  onRowPress: PropTypes.func,
  buttonText: PropTypes.string,
};
