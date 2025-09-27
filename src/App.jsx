import React, { useState } from "react"; // Hapus useEffect jika tidak digunakan
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Import semua fungsi data yang dibutuhkan
import { getInitialData, deleteNote, archiveNote, unarchiveNote, addNote } from "./utils/local-data"; 
import NotesListPage from "./pages/NotesListPage";
import NoteDetailPage from "./pages/NoteDetailPage";
import AddNotePage from "./pages/AddNotePage";
import ArchivedNotesPage from "./pages/ArchivedNotesPage";
import NotFoundPage from "./pages/NotFoundPage";
import Navigation from "./components/Navigation";

function App() {
  const [notes, setNotes] = useState(getInitialData());
  // Handler untuk menghapus catatan
  const onDeleteHandler = (id) => {
    deleteNote(id);
    setNotes(getInitialData()); 
  };
  
  // Handler untuk mengarsipkan/batal mengarsipkan
  const onToggleArchiveHandler = (id, isArchived) => {
    if (isArchived) {
      unarchiveNote(id);
    } else {
      archiveNote(id);
    }
    setNotes(getInitialData());
  };
  
  // Handler BARU untuk menambahkan catatan
  const onAddNoteHandler = (newNoteData) => {
    addNote(newNoteData);
    setNotes(getInitialData()); 
  };

  // PENGELOMPOKAN DATA
  const activeNotes = notes.filter(note => note.archived === false);
  const archivedNotes = notes.filter(note => note.archived === true);

  return (
    <BrowserRouter>
      <Navigation />
      <div className="app-container">
        <Routes>
          <Route 
            path="/" 
            element={
              <NotesListPage 
                notes={activeNotes} 
                onDelete={onDeleteHandler} 
                onArchive={onToggleArchiveHandler} 
              />
            } 
          />
          
          <Route 
            path="/notes/new" 
            element={
              <AddNotePage 
                onAdd={onAddNoteHandler} 
              />
            } 
          />
          
          <Route 
            path="/notes/:id" 
            element={
              <NoteDetailPage 
                notes={notes} 
                onDelete={onDeleteHandler} 
                onArchive={onToggleArchiveHandler} 
              />
            } 
          />
          
          <Route 
            path="/archives" 
            element={
              <ArchivedNotesPage 
                notes={archivedNotes} 
                onDelete={onDeleteHandler} 
                onArchive={onToggleArchiveHandler} 
              />
            } 
          />
          
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;