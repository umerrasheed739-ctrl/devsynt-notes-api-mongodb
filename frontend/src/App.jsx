import { useState, useEffect } from 'react';
import axios from 'axios';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import './App.css';

const API_URL = 'http://localhost:3000/api/notes';

function App() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all notes
  const fetchNotes = async () => {
    try {
      setLoading(true);
      const res = await axios.get(API_URL);
      setNotes(res.data.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch notes from backend server.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  // Add new note (POST)
  const handleAddNote = async (newNoteData) => {
    try {
      const res = await axios.post(API_URL, newNoteData);
      setNotes([res.data.data, ...notes]);
    } catch (err) {
      alert('Error creating note.');
    }
  };

  // Update existing note (PUT)
  const handleUpdateNote = async (id, updatedData) => {
    try {
      const res = await axios.put(`${API_URL}/${id}`, updatedData);
      setNotes(notes.map((note) => (note._id === id ? res.data.data : note)));
    } catch (err) {
      alert('Error updating note.');
    }
  };

  // Delete note (DELETE)
  const handleDeleteNote = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setNotes(notes.filter((note) => note._id !== id));
    } catch (err) {
      alert('Error deleting note.');
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Notes Manager</h1>
        <p>Week 5 - REST API Integration with React</p>
      </header>

      <main className="app-main">
        <NoteForm onAddNote={handleAddNote} />

        <section className="notes-section">
          <h2>Your Notes ({notes.length})</h2>

          {loading && <div className="status-msg">Loading notes...</div>}
          {error && <div className="status-msg error-msg">{error}</div>}

          {!loading && !error && (
            <NoteList 
              notes={notes} 
              onDeleteNote={handleDeleteNote} 
              onUpdateNote={handleUpdateNote} 
            />
          )}
        </section>
      </main>
    </div>
  );
}

export default App;