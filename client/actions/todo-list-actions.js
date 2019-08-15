import {
  GET_TODO_LIST,
  UPDATE_ITEM,
  DELETE_ITEM,
  CREATE_ITEM,
  COMPLETE_ITEM,
  SELECT_ITEM,
  UPDATE_VIEW_ITEM_FORM,
  CLEAR_VIEW_ITEM_FORM,
  UPDATE_ADD_ITEM_FORM
} from '../constants/action-types';

export const getTodoList = () => {
  return {
    type: GET_TODO_LIST
  };
};

export const updateItem = (id) => {
  return {
    type: UPDATE_ITEM,
    payload: id
  };
};

export const deleteItem = (id) => {
  return {
    type: DELETE_ITEM,
    payload: id
  };
};

export const createItem = () => {
  return {
    type: CREATE_ITEM
  };
};

export const selectItem = (item) => {
  return function(dispatch) {
    dispatch({ type: CLEAR_VIEW_ITEM_FORM });
    dispatch({ type: SELECT_ITEM, payload: item });
  }
}

export const updateForm = (form, field, update) => {
  const action_type = form === 'addItem' ? UPDATE_ADD_ITEM_FORM : UPDATE_VIEW_ITEM_FORM;
  return {
    type: action_type,
    payload: { field: field, update: update }
  };
}
