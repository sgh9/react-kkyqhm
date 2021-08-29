import React, { useContext } from 'react';
import './style.css';
import NotesList from './NotesList';
import NotesDetails from './NotesDetails';
import Navbar from './Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotesContextProvider from './Context/Context';

export default function App() {
  return (
    <Router>
      <NotesContextProvider>
        <Navbar />
        <main className="container">
          <Switch>
            <Route exact path="/">
              <NotesList />
            </Route>
            <Route exact path="/:notesId">
              <NotesDetails />
            </Route>
          </Switch>
        </main>
      </NotesContextProvider>
    </Router>
  );
}
