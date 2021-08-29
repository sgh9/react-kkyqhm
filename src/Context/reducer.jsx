const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload.note];
    case 'DELETE':
      return [...state, action.payload.note];
    case 'UPDATE':
      return [...state, action.payload.note];
  }

  return state;
};
export default reducer;
