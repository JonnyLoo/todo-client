import {
  GET_TODO_LIST,
  GET_ITEM,
  UPDATE_ITEM,
  DELETE_ITEM,
  CREATE_ITEM
} from '../constants/action-types';

const getTodoList = () => {
  return {
    type: GET_TODO_LIST
  };
};

const getItem = () => {
  return {
    type: GET_ITEM
  };
};

const updateItem = () => {
  return {
    type: UPDATE_ITEM
  };
};

const deleteItem = () => {
  return {
    type: DELETE_ITEM
  };
};

const createItem = () => {
  return {
    type: CREATE_ITEM
  };
};

module.exports = {
  getTodoList,
  getItem,
  updateItem,
  deleteItem,
  createItem
}
