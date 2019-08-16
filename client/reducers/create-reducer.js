// function to create reducers
export default (initialState, fmap) => (state = initialState, { type, payload }) => {
  const handle = fmap[type];
  return handle ? handle(state, payload) : state;
};
