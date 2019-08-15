export const updateItem = (array, id, update) => {
  console.log('updating', id, update);
  const newArray = array.map(item => {
    if (item._id === id) {
      return {
        ...item,
        ...update
      }
    }

    return item;
  });

  return newArray;
}

export const removeItem = (array, index) => {
  const newArray = array.slice();
  newArray.splice(index, 1);

  return newArray;
}

export const insertItem = (array, item) => {
  const newArray = array.slice();
  newArray.push(item);

  return newArray;
}
