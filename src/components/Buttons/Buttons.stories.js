import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import React from 'react';
import { Text, View } from 'react-native';
import Button from './Buttons';

// storiesOf('Button', module)
//   .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
//   .add('with text', () => (
//     <Button onPress={action('clicked-text')}>
//       <Text>{text('Button text', 'Hello Button')}</Text>
//     </Button>
//   ))
//   .add('with some emoji', () => (    
//     <Button onPress={action('clicked-emoji')}>
//       <Text>😀 😎 👍 </Text>
//     </Button>
//   ));


import{ storiesOf } from '@storybook/react-native'

storiesOf('Button', module)
	.addDecorator(story => <View>{story()}</View>)
	.add('Submit', () => <Button 
		onPress={() => alert('You clicked')}
		text={'Submit'}
	/>)

