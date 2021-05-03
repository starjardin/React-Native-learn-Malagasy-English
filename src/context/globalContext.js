import React, {useReducer} from 'react';

import {categories} from '../data/categories.json';
import {phrases} from '../data/phrases.json';

const LanguageContext = React.createContext();

function reducer(state, action) {
  switch (action.type) {
    case 'FIND_ANSWER': {
      return {
        ...state,
        answer: action.payload,
      };
    }
    case 'TOGGLE_NEXT_BUTTON': {
      return {
        ...state,
        isNextButtonShown: true,
      };
    }
    case 'LEARN_PHRASE': {
      return {
        ...state,
        categoryToLearn: action.category,
        phraseToLearn: action.phrase,
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
  isNextButtonShown: false,
  categoryToLearn: {},
  phraseToLearn: {},
  answer: {},
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
