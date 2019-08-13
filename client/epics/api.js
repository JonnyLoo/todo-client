import fetch from 'isomorphic-fetch';
import {Observable, from} from 'rxjs';

const fetchHelper = (url, method) => {
  const requestOptions = {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  };

  const request = fetch(url, requestOptions)
    .then(response => {
      return response.json().then(data => {
        return Promise.resolve(data);
      });
    });

  return from(request);
};

export const API = {
  fetchTodoList: (store) => {
    const url = 'http://localhost:3000/api/items';
    return fetchHelper(url, 'GET');
  },

  updateItem: (store) => {
    const url = 'http://localhost:3000/api/items';
    return fetchHelper(url, 'POST');
  },

  deleteItem: (store) => {
    const url = 'http://localhost:3000/api/items';
    return fetchHelper(url, 'POST');
  },

  createItem: (store) => {
    const url = 'http://localhost:3000/api/items';
    return fetchHelper(url, 'POST');
  }
};
