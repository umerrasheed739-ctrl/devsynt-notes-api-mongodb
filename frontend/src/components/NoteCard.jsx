return (
  <div className="note-card">
    <div className="note-header">
      <h3>{note.title}</h3>
      {formattedDate && <span className="note-date">{formattedDate}</span>}
    </div>
    <p className="note-content">{note.content || 'No description provided.'}</p>
    
    <div className="note-actions">
      <button className="btn-edit" onClick={() => setIsEditing(true)}>
        Edit
      </button>
      <button className="btn-delete" onClick={() => onDeleteNote(note._id)}>
        Delete
      </button>
    </div>
  </div>
);