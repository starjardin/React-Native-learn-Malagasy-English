
import * as React from 'react';
import { View } from 'react-native';

import { storiesOf } from '@storybook/react-native';

import Example from './Example';


storiesOf('Example', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('short', () => <Example label= {'short'}/>)
  .add('longer', () => <Example label= {'longer longer longer longer longer '} />)
  .add('longest', () => <Example label= {'longest longer longer longer longer longer longer longer longer '} />)
  .add('new', () => <Example label= {'new new'} />);
