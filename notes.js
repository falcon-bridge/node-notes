const fs = require("fs");

const chalk = require("chalk");

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
  // const duplicateNotes = notes.filter((note) => note.title === title);
  const duplicateNote = notes.find((note) => note.title === title);

  // if (duplicateNotes.length === 0) {
  if (!duplicateNote) {
    notes.push({ title, body });
    saveNotes(notes);
    console.log(chalk.green.bold.inverse("New note added !"));
  } else {
    console.log(
      chalk.red.bold.inverse(
        "Note title is already taken, please add the note with other title !"
      )
    );
  }
};

const removeNote = (title) => {
  // console.log(title);
  const notes = loadNotes();
  const prevLength = notes.length;

  const notesToKeep = notes.filter((note) => note.title !== title);
  const newLength = notesToKeep.length;

  if (prevLength === newLength) {
    console.log(chalk.red.bold.inverse("No note found !"));
  } else {
    saveNotes(notesToKeep);
    console.log(chalk.green.bold.inverse("Note removed !"));
  }
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.blue.bold.underline.inverse("Your notes :"));
  console.log();

  notes.forEach((note) => {
    console.log(chalk.yellow.bold(note.title));
    console.log(chalk.cyan.bold(note.body));
    console.log();
  });
};

const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);
  if (note) {
    console.log(chalk.yellow.bold(note.title));
    console.log(chalk.cyan.bold(note.body));
  } else {
    console.log(chalk.red.bold.inverse("No note found !"));
  }
};

module.exports = {
  addNote,
  removeNote,
  listNotes,
  readNote,
};
