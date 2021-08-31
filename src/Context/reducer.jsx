const reducer = (state, action) => {
  let notes;
  switch (action.type) {
    case 'ADD':
      notes = [action.payload.note, ...state];
      return notes;

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

    default:
      return state;
  }
};
export default reducer;
