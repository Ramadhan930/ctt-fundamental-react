import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { showFormattedDate } from "../utils";
import parser from "html-react-parser";

function NoteDetailPage({ notes, onDelete, onArchive }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const note = notes.find((n) => n.id === id);

  if (!note) {
    return (
      <div className="detail-page">
        <p>Catatan tidak ditemukan.</p>
      </div>
    );
  }

  const onDeleteHandler = () => {
    onDelete(id); 
    navigate("/");
  };

  const onArchiveToggleHandler = () => {
    onArchive(id, note.archived);
    navigate(note.archived ? "/" : "/archives"); 
  };

  return (
    <div className="detail-page">
      <h2 className="detail-page__title">{note.title}</h2>
      <p className="detail-page__createdAt">
        {showFormattedDate(note.createdAt)}
      </p>
      <div className="detail-page__body">{parser(note.body)}</div>

      <div className="detail-page__action">
        <button className="action" onClick={onDeleteHandler} title="Hapus Catatan">
          🗑
        </button>
        <button className="action" onClick={onArchiveToggleHandler} title={note.archived ? "Batal Arsip" : "Arsipkan"}>
          {note.archived ? "📂" : "📦"}
        </button>
      </div>
    </div>
  );
}

export default NoteDetailPage;