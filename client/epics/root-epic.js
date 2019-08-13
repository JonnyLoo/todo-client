import {combineEpics} from 'redux-observable';
import {todoListEpic} from './todo-list-epic';

export default combineEpics(
  todoListEpic
);
