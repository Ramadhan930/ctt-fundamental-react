let notes = [];

// Muat notes dari localStorage (sekali saat file di-load)
function loadNotes() {
  const stored = localStorage.getItem("notes");
  notes = stored ? JSON.parse(stored) : getDefaultNotes();
}

// Simpan notes ke localStorage
function saveNotes() {
  localStorage.setItem("notes", JSON.stringify(notes));
}

// Data default (dipakai kalau belum ada data di localStorage)
function getDefaultNotes() {
  return [
    {
      id: 'notes-1',
      title: 'Babel',
      body: 'Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.',
      createdAt: '2022-04-14T04:27:34.572Z',
      archived: false,
    },
    {
      id: 'notes-2',
      title: 'Functional Component',
      body: 'Functional component merupakan React component yang dibuat menggunakan fungsi JavaScript. Agar fungsi JavaScript dapat disebut component ia harus mengembalikan React element dan dipanggil layaknya React component.',
      createdAt: '2022-04-14T04:27:34.572Z',
      archived: false,
    },
    {
      id: 'notes-3',
      title: 'Modularization',
      body: 'Dalam konteks pemrograman JavaScript, modularization merupakan teknik dalam memecah atau menggunakan kode dalam berkas JavaScript secara terpisah berdasarkan tanggung jawabnya masing-masing.',
      createdAt: '2022-04-14T04:27:34.572Z',
      archived: false,
    },
  ];
}

// ==== Fungsi Akses Data ====
function getInitialData() {
  return notes;
}

function getNote(id) {
  return notes.find((note) => note.id === id);
}

function getActiveNotes() {
  return notes.filter((note) => !note.archived);
}

function getArchivedNotes() {
  return notes.filter((note) => note.archived);
}

// ==== Fungsi Manipulasi Data ====
function addNote({ title, body }) {
  notes = [
    ...notes,
    {
      id: `notes-${+new Date()}-${Math.floor(Math.random() * 1000)}`,
      title: title?.trim() || "(untitled)",
      body: body?.trim() || "(no content)",
      createdAt: new Date().toISOString(),
      archived: false,
    },
  ];
  saveNotes();
}

function deleteNote(id) {
  notes = notes.filter((note) => note.id !== id);
  saveNotes();
}

function archiveNote(id) {
  notes = notes.map((note) =>
    note.id === id ? { ...note, archived: true } : note
  );
  saveNotes();
}

function unarchiveNote(id) {
  notes = notes.map((note) =>
    note.id === id ? { ...note, archived: false } : note
  );
  saveNotes();
}

function editNote({ id, title, body }) {
  notes = notes.map((note) =>
    note.id === id ? { ...note, title, body } : note
  );
  saveNotes();
}

// Jalankan loadNotes saat pertama kali
loadNotes();

export {
  getInitialData,
  getActiveNotes,
  getArchivedNotes,
  getNote,
  addNote,
  deleteNote,
  archiveNote,
  unarchiveNote,
  editNote,
};
