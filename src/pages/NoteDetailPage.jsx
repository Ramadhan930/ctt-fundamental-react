import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  getNote,
  deleteNote,
  archiveNote,
  unarchiveNote,
} from "../utils/local-data";
import { showFormattedDate } from "../utils";
import parser from "html-react-parser";

function NoteDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const note = getNote(id);

  if (!note) {
    return (
      <div className="detail-page">
        <p>Catatan tidak ditemukan.</p>
      </div>
    );
  }

  const onDelete = () => {
    deleteNote(id);
    navigate("/");
  };

  const onArchiveToggle = () => {
    if (note.archived) {
      unarchiveNote(id);
    } else {
      archiveNote(id);
    }
    navigate("/");
  };

  return (
    <div className="detail-page">
      <h2 className="detail-page__title">{note.title}</h2>
      <p className="detail-page__createdAt">
        {showFormattedDate(note.createdAt)}
      </p>
      <div className="detail-page__body">{parser(note.body)}</div>

      <div className="detail-page__action">
        <button className="action" onClick={onDelete}>🗑</button>
        <button className="action" onClick={onArchiveToggle}>
          {note.archived ? "📂" : "📦"}
        </button>
      </div>
    </div>
  );
}

export default NoteDetailPage;
