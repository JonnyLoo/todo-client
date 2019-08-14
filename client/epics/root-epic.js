import {combineEpics} from 'redux-observable';
import {
  getTodoListEpic,
  updateItemEpic,
  deleteItemEpic,
  createItemEpic
} from './todo-list-epic';

export default combineEpics(
  getTodoListEpic,
  updateItemEpic,
  deleteItemEpic,
  createItemEpic
);
