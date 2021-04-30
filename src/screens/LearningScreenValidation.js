import React, {useState} from 'react';
import {View, Text} from 'react-native';
import List from '../components/List';
import Button from '../components/NextButton';

export default ({route, navigation}) => {
  const {shuffledAnswers} = route.params;
  const [seenResponse, setSeenResponse] = useState(false);
  return (
    <View>
      <List
        data={shuffledAnswers}
        buttonText={'Pick'}
        textColor="#00ff00"
        onRowPress={e => console.log(e.currentTarget.getNode())}
      />
      <Button
        buttonText={'Next'}
        onPress={() => {
          navigation.navigate('LearningScreen');
          setSeenResponse(!seenResponse);
        }}
      />
      <View accessible={true} onPress={e => console.log(e.target.getNode())}>
        <Text>text one</Text>
        <Text>text two</Text>
      </View>
    </View>
  );
};
