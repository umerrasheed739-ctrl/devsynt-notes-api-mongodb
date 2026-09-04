import { useState } from 'react';

function NoteForm({ onAddNote }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    onAddNote({ title, content });
    setTitle('');
    setContent('');
  };

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <h2>Create New Note</h2>
      <div className="form-group">
        <input
          type="text"
          placeholder="Note Title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <textarea
          placeholder="Write your note description here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows="4"
        />
      </div>
      <button type="submit" className="btn-primary">Add Note</button>
    </form>
  );
}

export default NoteForm;