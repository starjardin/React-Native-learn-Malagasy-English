import * as React from 'react';
import {View} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import PhraseTextarea from './';

function Edit() {
  const [text, setText] = React.useState('');
  return (
    <PhraseTextarea
      phrase={text}
      editable={true}
      onChange={input => setText(input)}
    />
  );
}
storiesOf('PhraseTextarea', module)
  .addDecorator(story => <View style={{padding: 23}}>{story()}</View>)
  .add('editable input', () => <Edit />)
  .add('not editable phrase', () => (
    <PhraseTextarea phrase={'a word word'} editable={false} />
  ))
  .add('not editable and longer', () => (
    <PhraseTextarea
      phrase={
        'Longer phrase Longer phrase Longer phrase Longer phrase Longer phrase'
      }
      editable={false}
    />
  ));
