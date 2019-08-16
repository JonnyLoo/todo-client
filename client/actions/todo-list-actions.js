import {
  GET_TODO_LIST,
  UPDATE_ITEM,
  DELETE_ITEM,
  CREATE_ITEM,
  SELECT_ITEM,
  UPDATE_VIEW_ITEM_FORM,
  CLEAR_VIEW_ITEM_FORM,
  UPDATE_ADD_ITEM_FORM,
  APPLY_FILTER
} from '../constants/action-types';

// file contains all the actions for the app
// these actions get mapped to the props of our base TodoList component
export const getTodoList = () => ({
  type: GET_TODO_LIST
});

export const updateItem = (id) => ({
  type: UPDATE_ITEM,
  payload: id
});

export const deleteItem = (id) => ({
  type: DELETE_ITEM,
  payload: id
});

export const createItem = () => ({
  type: CREATE_ITEM
});

export const selectItem = (item) => function (dispatch) {
  dispatch({ type: CLEAR_VIEW_ITEM_FORM });
  dispatch({ type: SELECT_ITEM, payload: item });
};

export const applyFilter = (filter) => ({
  type: APPLY_FILTER,
  payload: filter
});

export const updateForm = (form, field, update) => {
  const action_type = form === 'addItem' ? UPDATE_ADD_ITEM_FORM : UPDATE_VIEW_ITEM_FORM;
  return {
    type: action_type,
    payload: { field, update }
  };
};
