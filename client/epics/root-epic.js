import {combineEpics} from 'redux-observable';
import {getTodoListEpic} from './todo-list-epic';

export default combineEpics(
  getTodoListEpic
);
