import { combineReducers } from 'redux';
import todoListReducer from './todo-list-reducer';

export default combineReducers({
  todoList: todoListReducer
});
