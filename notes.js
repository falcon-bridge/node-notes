const fs = require("fs");

const getNotes = (e) => {
  return "Your Notes...";
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    const data = JSON.parse(dataJSON);
    return data;
  } catch (e) {
    //if notes.json isn't created yet, i.e. we're adding a note for the first time
    return [];
  }
};

const saveNotes = (notes) => {
  const notesJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", notesJSON);
};

const addNote = (title, body) => {
  const notes = loadNotes();

  // if the note title already exiss, don't add it.
  const duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push({ title, body });
    saveNotes(notes);
    console.log("New note added");
  } else {
    console.log(
      "Note title is already taken, please add the note with other title !"
    );
  }
};

module.exports = {
  getNotes,
  addNote,
};
