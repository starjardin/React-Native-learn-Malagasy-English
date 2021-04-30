import React, {useContext, useState} from 'react';
import PropTypes from 'prop-types';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Button from '../ActionButton';
import ArrowRight from '../../icons/arrow-right.svg';
import Correct from '../../icons/success-green';
import {LanguageContext} from '../../context/globalContext';
import {listItemStyles} from '../../styles/ListemStyles';
import {ListContext} from '../List';

const styles = StyleSheet.create({
  isSelectedStyle: {
    backgroundColor: '#fff',
    ...listItemStyles.itemStyles,
  },
  categoryselectedStyle: {
    ...listItemStyles.itemStyles,
    backgroundColor: '#ff0',
  },
});

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

  let buttons = (
    <Button
      buttonText={
        name?.trim().toLowerCase() === phraseToLearn.en?.trim().toLowerCase()
          ? 'correct'
          : 'Pick'
      }
      textColor={
        name?.trim().toLowerCase() === phraseToLearn.en?.trim().toLowerCase()
          ? '#06D440'
          : '#06B6D4'
      }
      onPressButton={onRowPress ? onRowPress : null}>
      {name === phraseToLearn.en ? <Correct /> : <ArrowRight />}
    </Button>
  );

  let listView = (
    // <View style={viewStyle}>
    <View style={listItemStyles.itemStyles}>
      <Text
        numberOfLines={1}
        ellipsizeMode="tail"
        style={[listItemStyles.textStyles]}>
        {name}
      </Text>
      {buttons}
      {/* {TODO: May be I need to figure something out here} */}
    </View>
  );

  let touchProps = {
    // style: listItemStyles.containerStyles,
    style: [
      listItemStyles.containerStyles,
      categorySelected === item.id && styles.categoryselectedStyle,
    ],
    onPress: () => {
      handlePress(name);
      setCategorySelected(item.id);
    },
  };

  return (
    <SafeAreaView>
      <TouchableOpacity {...touchProps}>{listView}</TouchableOpacity>
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

/* 
constructor(props) {
  super(props);
  this.state = {
    selectedFriendIds: [],
  }
}

selectFriend(friend) {
  this.setState({
    selectedFriendIds: this.state.selectedFriendIds.concat([friend.id]),
  });
}

selectedFriendIds
renderFriend
friendItem
viewStyle = styles
isFriendSelected = bread and butter

renderFriend(friend) {
  const isFriendSelected = this.state.selectedFriendIds.indexOf(friend.id) !== -1;
  const viewStyle = isFriendSelected ?
    styles.profilePictureContainerSelected : styles.profilePictureContainerNoBorder;

  return (
    <TouchableHighlight onPress={ () => this.selectFriend(friend) }>
      <View style={styles.friendItem}>
        <View style={viewStyle}>
          <Image
            source={{uri: 'https://graph.facebook.com/' + friend.id + '/picture?width=500&height=500'}}
            style={styles.profilePicture}
          />
        </View>
        <Text style={styles.profileName}>{friend.name}</Text>
      </View>
    </TouchableHighlight>
  );
}
*/
