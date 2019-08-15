import createReducer from './create-reducer';
import * as ActionTypes from '../constants/action-types';

export const todoList = {
  name: '',
  items: [],
  isFetching: false,
  error: null,
  viewItemForm: {
    id: '',
    name: '',
    description: '',
    dueBy: '',
    completed: false,
    isSelected: false
  },
  addItemForm: {
    name: '',
    description: '',
    dueBy: ''
  }
};

export default createReducer(todoList, {

  [ActionTypes.GET_TODO_LIST]: (state) => {
    return {
      ...state,
      isFetching: true
    };
  },

  [ActionTypes.GET_TODO_LIST_SUCCESS]: (state, payload) => {
    return {
      ...state,
      name: payload.name,
      items: payload.items,
      isFetching: false
    };
  },

  [ActionTypes.GET_TODO_LIST_ERROR]: (state, payload) => {
    return {
      ...state,
      error: payload,
      isFetching: false
    };
  },

  [ActionTypes.UPDATE_ITEM_SUCCESS]: (state, payload) => {
    return {
      ...state,
      items: payload
    };
  },

  [ActionTypes.UPDATE_ITEM_ERROR]: (state, payload) => {
    return {
      ...state,
      error: payload
    };
  },

  [ActionTypes.DELETE_ITEM_SUCCESS]: (state, payload) => {
    return {
      ...state,
      items: payload
    };
  },

  [ActionTypes.DELETE_ITEM_ERROR]: (state, payload) => {
    return {
      ...state,
      error: payload
    };
  },

  [ActionTypes.CREATE_ITEM_SUCCESS]: (state, payload) => {
    return {
      ...state,
      items: payload
    };
  },

  [ActionTypes.CREATE_ITEM_ERROR]: (state, payload) => {
    return {
      ...state,
      error: payload
    };
  },

  [ActionTypes.SELECT_ITEM]: (state, payload) => {
    return {
      ...state,
      viewItemForm: Object.assign({}, state.viewItemForm, {
        ...payload,
        isSelected: true
      })
    };
  },

  [ActionTypes.UPDATE_VIEW_ITEM_FORM]: (state, payload) => {
    return {
      ...state,
      viewItemForm: Object.assign({}, state.viewItemForm, {
        [payload.field]: payload.update
      })
    };
  },

  [ActionTypes.CLEAR_VIEW_ITEM_FORM]: (state) => {
    return {
      ...state,
      viewItemForm: todoList.viewItemForm
    };
  },

  [ActionTypes.UPDATE_ADD_ITEM_FORM]: (state, payload) => {
    return {
      ...state,
      addItemForm: Object.assign({}, state.addItemForm, {
        [payload.field]: payload.update
      })
    };
  },

  [ActionTypes.CLEAR_ADD_ITEM_FORM]: (state) => {
    return {
      ...state,
      addItemForm: todoList.addItemForm
    };
  },
});
