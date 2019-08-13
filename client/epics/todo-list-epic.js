import {switchMap, mergeMap, catchError} from 'rxjs/operators';
import {Observable, empty, of} from 'rxjs';
import {ofType} from 'redux-observable';
import {
  GET_TODO_LIST,
  GET_TODO_LIST_SUCCESS,
  GET_TODO_LIST_ERROR,
  UPDATE_ITEM,
  UPDATE_ITEM_SUCCESS,
  UPDATE_ITEM_ERROR,
  DELETE_ITEM,
  DELETE_ITEM_SUCCESS,
  DELETE_ITEM_ERROR,
  CREATE_ITEM,
  CREATE_ITEM_SUCCESS,
  CREATE_ITEM_ERROR
} from '../constants/action-types';
import {API} from './api';

export const getTodoListEpic = (action$, state$) =>
  action$.pipe(
    ofType(GET_TODO_LIST),
    switchMap(() => {
      return API.fetchTodoList(state$)
        .pipe(
          mergeMap(result => {
            return of({ type: GET_TODO_LIST_SUCCESS, payload: result });
          }),
          catchError(error => {
            return of({ type: GET_TODO_LIST_ERROR, payload: error });
          })
        );
    }),
  );

export const updateItemEpic = (action$, state$) =>
  action$.pipe(
    ofType(UPDATE_ITEM),
    switchMap(() => {
      return API.updateItem(state$)
        .pipe(
          mergeMap(result => {
            return of({ type: UPDATE_ITEM_SUCCESS, payload: result });
          }),
          catchError(error => {
            return of({ type: UPDATE_ITEM_ERROR, payload: error });
          })
        );
    }),
  );

export const deleteItemEpic = (action$, state$) =>
  action$.pipe(
    ofType(DELETE_ITEM),
    switchMap(() => {
      return API.deleteItem(state$)
        .pipe(
          mergeMap(result => {
            return of({ type: DELETE_ITEM_SUCCESS, payload: result });
          }),
          catchError(error => {
            return of({ type: DELETE_ITEM_ERROR, payload: error });
          })
        );
    }),
  );

export const createItemEpic = (action$, state$) =>
  action$.pipe(
    ofType(CREATE_ITEM),
    switchMap(() => {
      return API.creteItem(state$)
        .pipe(
          mergeMap(result => {
            return of({ type: CREATE_ITEM_SUCCESS, payload: result });
          }),
          catchError(error => {
            return of({ type: CREATE_ITEM_ERROR, payload: error });
          })
        );
    }),
  );
