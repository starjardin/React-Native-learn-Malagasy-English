import React, {useReducer, useEffect} from 'react';

import {categories} from '../data/categories.json';
import {phrases} from '../data/phrases.json';

const LanguageContext = React.createContext();

function reducer(state, action) {
  switch (action.type) {
    case 'LOAD_PAGE': {
      return {
        ...state,
        categories: categories,
        phrases: phrases,
      };
    }
    case 'FIND_ANSWER': {
      return {
        ...state,
        answer: action.payload,
      };
    }

    case 'LEARN_PHRASE': {
      return {
        ...state,
        categoryToLearn: action.category,
        phraseToLearn: action.phrase,
      };
    }
    case 'SEEN_ITEM': {
      return {
        ...state,
        seenPhrases: [...state.seenPhrases, action.payload],
      };
    }

    default: {
      return state;
    }
  }
}

const initialState = {
  categories: [],
  learntPhrases: [],
  seenPhrases: [],
  phrases: [],
  categoryToLearn: {},
  phraseToLearn: {},
  answer: {},
};

function ContextProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({
      type: 'LOAD_PAGE',
    });
  }, []);

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
