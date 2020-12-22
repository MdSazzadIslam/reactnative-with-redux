//actions are payloads of information that send data from your
//application to your store.They are the only source of
//information for the store.” this means if any state
//change necessary the change required will be dispatched through the actions
'use strict';

export const GET_LANGUAGE = 'GET_LANGUAGE';
export const ADD_LANGUAGE = 'ADD_LANGUAGE';
export const DELETE_LANGUAGE = 'DELETE_LANGUAGE';
export const EDIT_LANGUAGE = 'EDIT_LANGUAGE';

debugger;

export const getLanguage = () => (dispatch) => {
  dispatch({
    type: GET_LANGUAGE,
  });
};
export const addLanguage = (data) => (dispatch) => {
  debugger;
  dispatch({
    type: ADD_LANGUAGE,
    payload: {data},
  });
};

export const editLanguage = (data) => (dispatch) => {
  debugger;
  dispatch({
    type: EDIT_LANGUAGE,
    payload: {data},
  });
};

export const deleteLanguage = (id) => (dispatch) => {
  dispatch({
    type: DELETE_LANGUAGE,
    payload: {id},
  });
};
