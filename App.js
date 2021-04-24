import React from 'react';
// import Home from './src/screens/Home';
import Navigtion from './src/navigation';
import {ContextProvider} from './src/context/globalContext';

export default function App() {
  return (
    <ContextProvider>
      <Navigtion />
    </ContextProvider>
  );
}
