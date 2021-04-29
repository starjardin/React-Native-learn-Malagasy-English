import React, {useReducer} from 'react';

import {categories} from '../data/categories.json';
import {phrases} from '../data/phrases.json';

const LanguageContext = React.createContext();

function reducer(state, action) {
  switch (action.type) {
    case 'answerQuestion': {
      return {
        ...state,
        rightAnswer: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}

const initialState = {
  categories: categories,
  learnt: [],
  seen: [],
  phrases: phrases,
  language: ['en', 'mg'],
  rightAnswer: '',
};

function ContextProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <LanguageContext.Provider
      value={{
        state,
        dispatch,
      }}>
      {props.children}
    </LanguageContext.Provider>
  );
}

export {ContextProvider, LanguageContext};