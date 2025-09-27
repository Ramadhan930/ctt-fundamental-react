import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

function AddNotePage({ onAdd }) { 
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const bodyRef = useRef(null);
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      alert("Judul catatan tidak boleh kosong");
      return;
    }
    if (!body.trim()) {
      alert("Isi catatan tidak boleh kosong");
      return;
    }

    onAdd({ title, body });
    navigate("/");
  };

  return (
    <div className="add-new-page">
      <form onSubmit={onSubmit} className="add-new-page__input">
        <input
          className="add-new-page__input__title"
          type="text"
          placeholder="Judul catatan..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <div
          ref={bodyRef}
          className="add-new-page__input__body"
          data-placeholder="Tulis isi catatan..."
          contentEditable
          onInput={(e) => setBody(e.currentTarget.innerHTML)}
        />
        
        <div className="add-new-page__action">
          <button className="action" type="submit" title="Simpan">
            ✔
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddNotePage;