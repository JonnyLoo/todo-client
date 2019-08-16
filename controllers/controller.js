const request = require('request');

// could store this in some config file and use different urls for diff envs
const BASE_URL = 'http://localhost:3001/api/item';

// make request to get todo list
const getList = (req, res) => {
  request.get({
    url: `${BASE_URL}/`
  },
  (err, response, body) => {
    if (err) {
      // this is to catch errors from our UI's server
      return res.status(500).send('oops there was an error');
    } if (response.statusCode === 500) {
      // this catches errors from the server itself
      // just sending 500 as generic error status code
      return res.status(500).send('oops there was a server error');
    }
    return res.status(200).send(JSON.parse(body).todoList);
  });
};

// make post request to update item
const updateItem = (req, res) => {
  request.post({
    url: `${BASE_URL}/${req.params._id}/update`,
    body: req.body,
    json: true
  },
  (err, response, body) => {
    if (err) {
      return res.status(500).send('oops there was an error');
    } if (response.statusCode === 500) {
      return res.status(500).send('oops there was a server error');
    }
    // could use something like 204 but the server is sending back success confirmation
    return res.status(200).send(body);
  });
};

// make delete request to remove item
const removeItem = (req, res) => {
  request.delete({
    url: `${BASE_URL}/${req.params._id}/remove`
  },
  (err, response, body) => {
    if (err) {
      return res.status(500).send('oops there was an error');
    } if (response.statusCode === 500) {
      return res.status(500).send('oops there was a server error');
    }
    return res.status(200).send(body);
  });
};

// post request to create item
const createItem = (req, res) => {
  request.post({
    url: `${BASE_URL}/create`,
    body: req.body,
    json: true
  },
  (err, response, body) => {
    if (err) {
      return res.status(500).send('oops there was an error');
    } if (response.statusCode === 500) {
      return res.status(500).send('oops there was a server error');
    }
    return res.status(201).send(body.item);
  });
};

module.exports = {
  getList,
  updateItem,
  removeItem,
  createItem
};
