const noteInput = document.getElementById("noteInput");
const notesDiv = document.getElementById("notes");

let notes = JSON.parse(localStorage.getItem("notes")) || [];

function saveNotes() {
  localStorage.setItem("notes", JSON.stringify(notes));
}

function renderNotes() {
  notesDiv.innerHTML = "";
  notes.forEach((note, index) => {
    const div = document.createElement("div");
    div.className = "note";

    div.innerHTML = `
      <p>${note}</p>
      <button onclick="deleteNote(${index})">Delete</button>
    `;

    notesDiv.appendChild(div);
  });
}

function addNote() {
  const text = noteInput.value.trim();
  if (!text) return;

  notes.push(text);
  noteInput.value = "";
  saveNotes();
  renderNotes();
}

function deleteNote(index) {
  notes.splice(index, 1);
  saveNotes();
  renderNotes();
}

renderNotes();
