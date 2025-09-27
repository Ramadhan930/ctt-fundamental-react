import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getActiveNotes } from "../utils/local-data";
import { showFormattedDate } from "../utils";

function NotesListPage() {
  const [keyword, setKeyword] = useState(""); // 🔍 state keyword pencarian
  const notes = getActiveNotes();

  // filter catatan sesuai keyword
  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(keyword.toLowerCase()) ||
      note.body.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <div className="app-container">
      <main>
        <h1>Daftar Catatan</h1>

        {/* 🔍 Input pencarian */}
        <input
          type="text"
          placeholder="Cari catatan..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="search-bar"
        />

        <div className="notes-list">
          {filteredNotes.length > 0 ? (
            filteredNotes.map((note) => (
              <div key={note.id} className="note-item">
                <Link to={`/notes/${note.id}`}>
                  <h2 className="note-item__title">{note.title}</h2>
                  <p className="note-item__createdAt">
                    {showFormattedDate(note.createdAt)}
                  </p>
                  <p className="note-item__body">{note.body}</p>
                </Link>
              </div>
            ))
          ) : (
            <div className="notes-list-empty">
              <p>Tidak ada catatan yang cocok</p>
            </div>
          )}
        </div>

        {/* Floating Add Button */}
        <div className="homepage__action">
          <Link to="/notes/new" className="action">＋</Link>
        </div>
      </main>
    </div>
  );
}

export default NotesListPage;
