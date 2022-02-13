const yargs = require("yargs");

const notes = require("./notes");

//customize yargs version
yargs.version("1.1.0");

//add, remove, read, list

// Create an add command

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

// Create a remove command

yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    // console.log("Removing the note !");
    notes.removeNote(argv.title);
  },
});

// Create a read command

yargs.command({
  command: "read",
  describe: "Read a note",
  handler() {
    console.log("Reading a note !");
  },
});

// Create a list command

yargs.command({
  command: "list",
  describe: "List your notes",
  handler() {
    // console.log("Listing out all the notes !");
    notes.listNotes();
  },
});

// console.log(yargs.argv);
yargs.parse();
