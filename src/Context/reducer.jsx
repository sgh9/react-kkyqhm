const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload.note];

    case 'UPDATE':
      const { id } = action.payload.note;
      const index = [...state].findIndex(
        note => note.id.toString() === id.toString()
      );

      let notes = [...state];
      notes[index] = action.payload.note;

      return [...notes];

    case 'DELETE':
      let remainingNotes = [...state].filter(note => {
        return note.id.toString() !== action.payload.id.toString();
      });
      return remainingNotes;
  }

  return state;
};
export default reducer;
