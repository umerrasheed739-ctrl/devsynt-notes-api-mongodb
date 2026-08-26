# Notes REST API

A simple RESTful API built with **Node.js**, **Express**, and **MongoDB** (Mongoose) to perform CRUD operations on notes.

## API Endpoints

- `GET /api/notes` - Get all notes
- `GET /api/notes/:id` - Get single note
- `POST /api/notes` - Create a note
- `PUT /api/notes/:id` - Update a note
- `DELETE /api/notes/:id` - Delete a note

## Setup & Run

1. Clone repo:
   ```bash
   git clone [https://github.com/umerrasheed739-ctrl/devsynt-notes-api-mongodb.git](https://github.com/umerrasheed739-ctrl/devsynt-notes-api-mongodb.git)

Install packages:

Bash
npm install
Add .env file:

Code snippet
PORT=3000
MONGO_URI=mongodb://localhost:27017/notes_db
Run server:

Bash
npm run dev