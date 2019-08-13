export default (initialState, fmap) => {
  return (state = initialState, {type, payload}) => {
    const handle = fmap[type];
    return handle ? handle(state, payload) : state;
  };
};
