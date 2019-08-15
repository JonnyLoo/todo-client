import status from '../constants/response-statuses';

export const assessResponseStatus = (response) => {
  if (status.OK.includes(response.status)) {
    return response.json().then((data) => Promise.resolve(data));
  }

  if (status.BAD.includes(response.status)) {
    return Promise.reject(new Error('oops something went wrong'));
  }

  const error = new Error(response.statusText || 'error');
  return Promise.reject(error);
};
