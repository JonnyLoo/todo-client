const request = require('request');
const BASE_URL = 'localhost:3001/api/item';

const getList = (req, res) => {
  request.get({
    url: `${BASE_URL}/`
  },
  (err, response, body) => {

  });
};

const updateItem = (req, res) => {
  request.post({
    url: `${BASE_URL}/${req.params._id}/update`
    formData: req.body
  },
  (err, response, body) => {

  });
};

const removeItem = (req, res) => {
  request.get({
    url: `${BASE_URL}/${req.params._id}/remove`
  },
  (err, response, body) => {

  });
};

const createItem = (req, res) => {
  request.post({
    url: `${BASE_URL}/create`,
    formData: req.body
  },
  (err, response, body) => {

  });
};

module.exports = {
  getList,
  updateItem,
  removeItem,
  createItem
};
