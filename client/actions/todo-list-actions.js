import {
  GET_TODO_LIST,
  UPDATE_ITEM,
  DELETE_ITEM,
  CREATE_ITEM
} from '../constants/action-types';

export const getTodoList = () => {
  return {
    type: GET_TODO_LIST
  };
};

export const updateItem = () => {
  return {
    type: UPDATE_ITEM
  };
};

export const deleteItem = () => {
  return {
    type: DELETE_ITEM
  };
};

export const createItem = () => {
  return {
    type: CREATE_ITEM
  };
};
