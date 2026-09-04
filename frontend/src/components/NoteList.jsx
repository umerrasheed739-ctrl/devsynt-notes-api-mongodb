import NoteCard from './NoteCard';

function NoteList({ notes, onDeleteNote, onUpdateNote }) {
  if (notes.length === 0) {
    return (
      <div className="empty-state">
        <p>No notes available. Create your first note above!</p>
      </div>
    );
  }

  return (
    <div className="notes-grid">
      {notes.map((note) => (
        <NoteCard 
          key={note._id} 
          note={note} 
          onDeleteNote={onDeleteNote} 
          onUpdateNote={onUpdateNote}
        />
      ))}
    </div>
  );
}

export default NoteList;