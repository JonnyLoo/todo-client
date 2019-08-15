import {switchMap, mergeMap, catchError} from 'rxjs/operators';
import {empty, of, concat} from 'rxjs';
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
  CREATE_ITEM_ERROR,
  CLEAR_ADD_ITEM_FORM,
  CLEAR_VIEW_ITEM_FORM
} from '../constants/action-types';
import {API} from './api';
import {updateItem, removeItem, insertItem} from '../utils/list-operations';

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
    switchMap(({ payload }) => {
      const id = payload;
      return API.updateItem(state$, id)
        .pipe(
          mergeMap(result => {
            const form = state$.value.todoList.viewItemForm,
              items = state$.value.todoList.items,
              newItems = updateItem(items, id, form)

            return of({ type: UPDATE_ITEM_SUCCESS, payload: newItems });
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
    switchMap(({ payload }) => {
      const id = payload;
      return API.deleteItem(state$, id)
        .pipe(
          mergeMap(result => {
            const items = state$.value.todoList.items,
              deleteIndex = items.findIndex(item => item._id === id),
              newItems = removeItem(items, deleteIndex)

            return concat(
              of({ type: DELETE_ITEM_SUCCESS, payload: newItems }),
              of({ type: CLEAR_VIEW_ITEM_FORM })
            );
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
      return API.createItem(state$)
        .pipe(
          mergeMap(result => {
            const items = state$.value.todoList.items,
              newItems = insertItem(items, result);

              return concat(
                of({ type: CREATE_ITEM_SUCCESS, payload: newItems }),
                of({ type: CLEAR_ADD_ITEM_FORM })
              );
          }),
          catchError(error => {
            return of({ type: CREATE_ITEM_ERROR, payload: error });
          })
        );
    }),
  );
