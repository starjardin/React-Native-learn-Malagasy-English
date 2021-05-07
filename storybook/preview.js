import {ViewComponent} from 'react-native';
import {LanguageContext} from '../src/context/globalContext';

export const decorators = [
  Story => (
    <LanguageContext>
      {/*eslint-disable-next-line react/react-in-jsx-scope */}
      <Story />
    </LanguageContext>
  ),
];

// export const decorators = [
//   Story => (
//     <ViewComponent style={{margin: '20px'}}>
//       <Story />
//     </ViewComponent>
//   ),
// ];
