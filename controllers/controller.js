const request = require('request');
const BASE_URL = 'http://localhost:3001/api/item';

const getList = (req, res) => {
  request.get({
    url: `${BASE_URL}/`
  },
  (err, response, body) => {
    if (err) {
      return res.status(500).send('oops there was an error');
    } else if (response.statusCode === 500) {
      return res.status(500).send('oops there was a server error');
    } else {
      return res.status(200).send(JSON.parse(body).todoList);
    }
  });
};

const updateItem = (req, res) => {
  request.post({
    url: `${BASE_URL}/${req.params._id}/update`,
    body: req.body,
    json: true
  },
  (err, response, body) => {
    if (err) {
      return res.status(500).send('oops there was an error');
    } else if (response.statusCode === 500) {
      return res.status(500).send('oops there was a server error');
    } else {
      return res.status(200).send(body);
    }
  });
};

const removeItem = (req, res) => {
  request.delete({
    url: `${BASE_URL}/${req.params._id}/remove`
  },
  (err, response, body) => {
    if (err) {
      return res.status(500).send('oops there was an error');
    } else if (response.statusCode === 500) {
      return res.status(500).send('oops there was a server error');
    } else {
      return res.status(200).send(body);
    }
  });
};

const createItem = (req, res) => {
  request.post({
    url: `${BASE_URL}/create`,
    body: req.body,
    json: true
  },
  (err, response, body) => {
    if (err) {
      return res.status(500).send('oops there was an error');
    } else if (response.statusCode === 500) {
      return res.status(500).send('oops there was a server error');
    } else {
      return res.status(201).send(body.item);
    }
  });
};

module.exports = {
  getList,
  updateItem,
  removeItem,
  createItem
};
