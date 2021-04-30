import React, {useState} from 'react';
import {View} from 'react-native';
import List from '../components/List';
import Button from '../components/NextButton';

export default ({route, navigation}) => {
  const {shuffledAnswers} = route.params;
  const [seenResponse, setSeenResponse] = useState(false);
  return (
    <View>
      <List data={shuffledAnswers} buttonText={'Pick'} textColor="#00ff00" />
      <Button
        buttonText={'Next'}
        onPress={() => {
          navigation.navigate('LearningScreen');
          setSeenResponse(!seenResponse);
        }}
      />
    </View>
  );
};
