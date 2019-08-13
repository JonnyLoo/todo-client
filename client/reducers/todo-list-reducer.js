import createReducer from './create-reducer';
import * as ActionTypes from '../constants/action-types';

export const todoList = {
  items: [],
  isFetching: false,
  error: null
};

export default createReducer(todoList, {

  [ActionTypes.GET_TODO_LIST]: (state) => {
    return {
      ...state,
      isFetching: true
    };
  },

  [ActionTypes.GET_TODO_LIST_SUCCESS]: (state) => {
    return {
      ...state
    };
  },

  [ActionTypes.GET_TODO_LIST_ERROR]: (state) => {
    return {
      ...state
    };
  },

  [ActionTypes.UPDATE_ITEM]: (state) => {
    return {
      ...state
    };
  },

  [ActionTypes.UPDATE_ITEM_SUCCESS]: (state) => {
    return {
      ...state
    };
  },

  [ActionTypes.UPDATE_ITEM_ERROR]: (state) => {
    return {
      ...state
    };
  },

  [ActionTypes.DELETE_ITEM]: (state) => {
    return {
      ...state
    };
  },

  [ActionTypes.DELETE_ITEM_SUCCESS]: (state) => {
    return {
      ...state
    };
  },

  [ActionTypes.DELETE_ITEM_ERROR]: (state) => {
    return {
      ...state
    };
  },

  [ActionTypes.CREATE_ITEM]: (state) => {
    return {
      ...state
    };
  },

  [ActionTypes.CREATE_ITEM_SUCCESS]: (state) => {
    return {
      ...state
    };
  },

  [ActionTypes.CREATE_ITEM_ERROR]: (state) => {
    return {
      ...state
    };
  }
});
