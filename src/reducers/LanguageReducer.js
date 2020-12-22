//Actions describe the fact that something happened,
//but don’t specify how the application’s state changes
//in response.This is the job of reducers.”
//when an action is dispatched for state change
//its the reducers duty to make the necessary changes
//to the state and return the new state of the application.
'use strict';

import {
  ADD_LANGUAGE,
  GET_LANGUAGE,
  DELETE_LANGUAGE,
} from '../actions/LanguageAction';

const INITIAL_STATE = {
  languages: [],
};

const LanguageReducer = (state = INITIAL_STATE, action) => {
  debugger;
  let newLanguages = state.languages;
  switch (action.type) {
    case ADD_LANGUAGE:
      newLanguages.push(action.payload.data);
      return {
        ...state,
        languages: newLanguages,
      };
    case GET_LANGUAGE:
      return {
        ...state,
        languages: [...state.languages],
      };

    case DELETE_LANGUAGE:
      return {
        ...state,
        languages: state.languages.filter(
          (item) => item.id !== action.payload.id,
        ),
      };

    default:
      return state;
  }
};

export default LanguageReducer;
