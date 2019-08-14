import fetch from 'isomorphic-fetch';
import {Observable, from} from 'rxjs';
import {assessResponseStatus} from '../utils/request-utils';

const BASE_URL = 'http://localhost:3000/api/item';

const fetchHelper = (url, method, body) => {
  const requestOptions = {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  };

  if (body) {
    requestOptions.body = JSON.stringify(body);
  }

  const request = fetch(url, requestOptions)
    .then(response => assessResponseStatus(response));

  return from(request);
};

export const API = {
  fetchTodoList: (state$) => {
    const url = `${BASE_URL}/`;
    return fetchHelper(url, 'GET');
  },

  updateItem: (state$, id) => {
    const url = `${BASE_URL}/${id}/update`,
      form = state$.value.todoList.selectedItemForm,
      data = {
        name: form.name,
        description: form.description,
        dueBy: form.dueBy
      };
    return fetchHelper(url, 'POST');
  },

  deleteItem: (state$, id) => {
    const url = `${BASE_URL}/${id}/remove`;
    return fetchHelper(url, 'DELETE');
  },

  createItem: (state$) => {
    const url = `${BASE_URL}/create`,
      form = state$.value.todoList.addItemForm,
      data = {
        name: form.name,
        description: form.description,
        dueBy: form.dueBy
      };
    return fetchHelper(url, 'POST', data);
  }
};
