// const validator = require("validator");
const chalk = require("chalk");

const getNotes = require("./notes");

// console.log(getNotes());
console.log(chalk.blue.inverse("Success"));

// console.log(validator.isEmail("kumartest.com"));
// console.log(validator.isURL("kumartestcom"));

// console.log(process.argv);
console.log(process.argv[2]);
