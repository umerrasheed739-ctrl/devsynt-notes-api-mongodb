import express from 'express';
import Note from '../models/Note.js';

const router = express.Router();

// GET all notes
router.get('/', async (req, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, count: notes.length, data: notes });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// GET single note
router.get('/:id', async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ success: false, error: 'Note not found' });
    res.status(200).json({ success: true, data: note });
  } catch (err) {
    res.status(400).json({ success: false, error: 'Invalid Note ID' });
  }
});

// POST new note
router.post('/', async (req, res) => {
  try {
    const { title, content } = req.body;
    if (!title || title.trim() === '') {
      return res.status(400).json({ success: false, error: 'Title cannot be empty' });
    }
    const newNote = await Note.create({ title, content });
    res.status(201).json({ success: true, data: newNote });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// PUT update note
router.put('/:id', async (req, res) => {
  try {
    const { title, content } = req.body;
    const note = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true, runValidators: true }
    );
    if (!note) return res.status(404).json({ success: false, error: 'Note not found' });
    res.status(200).json({ success: true, data: note });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});

// DELETE note
router.delete('/:id', async (req, res) => {
  try {
    const note = await Note.findByIdAndDelete(req.params.id);
    if (!note) return res.status(404).json({ success: false, error: 'Note not found' });
    res.status(200).json({ success: true, message: 'Note deleted successfully' });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});

export default router;