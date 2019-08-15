import fetch from 'isomorphic-fetch';
import { from } from 'rxjs';
import { assessResponseStatus } from '../utils/request-utils';

const BASE_URL = 'http://localhost:3000/api/item';

const fetchHelper = (url, method, body) => {
  const requestOptions = {
    method,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  };

  if (body) {
    requestOptions.body = JSON.stringify(body);
  }

  const request = fetch(url, requestOptions)
    .then((response) => assessResponseStatus(response));

  return from(request);
};

export const API = {
  fetchTodoList: () => {
    const url = `${BASE_URL}/`;
    return fetchHelper(url, 'GET');
  },

  updateItem: (state$, id) => {
    const url = `${BASE_URL}/${id}/update`;
    const form = state$.value.todoList.viewItemForm;
    const data = {
      name: form.name,
      description: form.description,
      dueBy: form.dueBy,
      completed: form.completed
    };
    return fetchHelper(url, 'POST', data);
  },

  deleteItem: (state$, id) => {
    const url = `${BASE_URL}/${id}/remove`;
    return fetchHelper(url, 'DELETE');
  },

  createItem: (state$) => {
    const url = `${BASE_URL}/create`;
    const form = state$.value.todoList.addItemForm;
    const data = {
      name: form.name,
      description: form.description,
      dueBy: form.dueBy
    };
    return fetchHelper(url, 'POST', data);
  }
};
