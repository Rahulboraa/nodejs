//! child process is used to open files and applications through terminal.

const child_process = require("child_process");
console.log("Trying to open Google");
child_process.execSync("google-chrome https:\\github.com");
console.log("Opened Google");

let output = child_process.execSync("node abc.js");
console.log("output 🔥 " + output);
