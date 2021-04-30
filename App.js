import React from 'react';
// import Home from './src/screens/Home';
import Navigtion from './src/navigation';
import {ContextProvider} from './src/context/globalContext';
import {ListContextProvider} from './src/components/List';

export default function App() {
  return (
    <ContextProvider>
      <ListContextProvider>
        <Navigtion />
      </ListContextProvider>
    </ContextProvider>
  );
}
