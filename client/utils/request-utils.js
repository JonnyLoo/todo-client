export const assessResponseStatus = (response) => {
  if(response.status === 200) {
    return response.json().then(data => {
      return Promise.resolve(data);
    });
  }

  if(response.status === 500) {
    return Promise.reject(new Error('oops something went wrong'));
  }

  const error = new Error(response.statusText || 'error');
  return Promise.reject(error);
}
