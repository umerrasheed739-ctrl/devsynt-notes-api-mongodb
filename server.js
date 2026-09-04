import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'; // 1. Import Cors
import connectDB from './config/db.js';
import notesRouter from './routes/notes.js';

dotenv.config();
connectDB();

const app = express();

app.use(cors()); // 2. Enable CORS
app.use(express.json());

app.get('/', (req, res) => {
  res.send('MongoDB Notes API is Running!');
});

app.use('/api/notes', notesRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));