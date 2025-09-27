import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotesListPage from "./pages/NotesListPage";
import NoteDetailPage from "./pages/NoteDetailPage";
import AddNotePage from "./pages/AddNotePage";
import ArchivedNotesPage from "./pages/ArchivedNotesPage";
import NotFoundPage from "./pages/NotFoundPage";
import Navigation from "./components/Navigation";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<NotesListPage />} />
        <Route path="/notes/new" element={<AddNotePage />} />
        <Route path="/notes/:id" element={<NoteDetailPage />} />
        <Route path="/archives" element={<ArchivedNotesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
