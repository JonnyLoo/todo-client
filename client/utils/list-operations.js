// operations as workaround to mutating the item list
// all functions give back new lists containing the updated info
export const updateItem = (array, id, update) => {
  const newArray = array.map((item) => {
    if (item._id === id) {
      return {
        ...item,
        ...update
      };
    }

    return item;
  });

  return newArray;
};

export const removeItem = (array, index) => {
  const newArray = array.slice();
  newArray.splice(index, 1);

  return newArray;
};

export const insertItem = (array, item) => {
  const newArray = array.slice();
  newArray.push(item);

  return newArray;
};
