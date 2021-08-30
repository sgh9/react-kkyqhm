const reducer = (state, action) => {
  let notes;
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload.note];

    case 'UPDATE':
      const { id } = action.payload.note;
      const index = [...state].findIndex(
        note => note.id.toString() === id.toString()
      );

      notes = [...state];
      notes[index] = action.payload.note;

      return [...notes];

    case 'DELETE':
      notes = [...state].filter(note => {
        return note.id.toString() !== action.payload.id.toString();
      });
      return notes;

    case 'SEARCH':
      notes = [...state].filter(note => {
        return (
          action.payload.searchKey.toString() === '' ||
          note.body
            .toString()
            .toUpperCase()
            .includes(action.payload.searchKey.toString().toUpperCase())
        );
      });

      console.log('searchKey:', notes);
      return notes;
  }
  return state;
};
export default reducer;
