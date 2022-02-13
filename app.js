const chalk = require("chalk");
const yargs = require("yargs");

const notes = require("./notes");

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
  handler: function (argv) {
    // console.log("Title : " + argv.title);
    // console.log("Body : " + argv.body);
    notes.addNote(argv.title, argv.body);
  },
});

// Create a remove command

yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: function () {
    console.log("Removing the note !");
  },
});

// Create a read command

yargs.command({
  command: "read",
  describe: "Read a note",
  handler: function () {
    console.log("Reading a note !");
  },
});

// Create a list command

yargs.command({
  command: "list",
  describe: "List your notes",
  handler: function () {
    console.log("Listing out all the notes !");
  },
});

// console.log(yargs.argv);
yargs.parse();
