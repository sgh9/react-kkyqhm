import React, { useContext } from 'react';
import './style.css';
import NotesList from './NotesList';
import NotesDetails from './NotesDetails';
import Navbar from './Navbar';
import { Switch, Route } from 'react-router-dom';
import NotesContextProvider from './Context/Context';

export default function App() {
  return (
    <NotesContextProvider>
      <Navbar />
      <main className="container">
        <Switch>
          <Route exact path="/">
            <NotesList />
          </Route>
          <Route exact path="/:category">
            <NotesList />
          </Route>
          <Route exact path="/:category/notes/:notesId">
            <NotesDetails />
          </Route>
          <Route path="*" render={() => <p>401</p>} />
        </Switch>
      </main>
    </NotesContextProvider>
  );
}
