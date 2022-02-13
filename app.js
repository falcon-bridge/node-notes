const chalk = require("chalk");
const yargs = require("yargs");

const getNotes = require("./notes");

// const command = process.argv[2];

// if (command === "add") {
//   console.log("adding note");
// } else if (command === "remove") {
//   console.log("removing note");
// }
// console.log(process.argv);

yargs.version("1.1.0");

//add, remove, read, list

// Create an add command

yargs.command({
  command: "add",
  describe: "Add a new note",
  handler: function () {
    console.log("Adding a new note !");
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

console.log(yargs.argv);
