
import * as React from 'react';
import { View } from 'react-native';

import { storiesOf } from '@storybook/react-native';

import Example from './Example';


storiesOf('Task', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('default', () => <Example labe= />)
  .add('pinned', () => <Example task={{ ...task, state: 'TASK_PINNED' }} {...actions} />)
  .add('archived', () => <Example task={{ ...task, state: 'TASK_ARCHIVED' }} {...actions} />);
