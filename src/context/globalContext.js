//? I need global state. I think this is from the data folder
import React, {useState, useEffect, useReducer} from 'react';
const LanguageContext = React.createContext();
import {categories} from '../data/categories.json';

function reducer(state, action) {
  switch (action.type) {
  }
}

const initialState = {
  categories: categories,
  learnt: [],
  seen: [],
  all: [],
  language: ['en', 'mg'],
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
