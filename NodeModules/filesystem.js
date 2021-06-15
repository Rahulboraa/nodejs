// todo: File system ==> Create, read ,update ,delete.
const fs = require("fs");
const path = require("path");
// *Read
// let buffer = fs.readFileSync("abc.js");
// console.log(""+buffer);
// *Create
// fs.openSync("abc.txt", "w"); => w is for writing.

// *Write/create
// !No file => create and if file exists it replaces the content.
// fs.writeFileSync("abc.txt", "We are happy Today. ");

// *Update
// fs.appendFileSync("abc.txt", "Nice Weather.");

// *Folder
// fs.mkdirSync("MyDirectory");
// fs.writeFileSync("MyDirectory/my.txt", "Here goes my content");

// *Create 10 folders with 10 files and write text in it

// !Path Module
// const path = require("path");
// for (let i = 1; i <= 10; i++) {
//   let dirPathToMake = `Tutorial ${i}`;
//   fs.mkdirSync(dirPathToMake);
//   fs.writeFileSync(
//     path.join(
//       dirPathToMake + "readme.md",              //?Forward slashes in linux for path system.
//       `#readme for ${dirPathToMake}`
//     )
//   );
// }

// !Extension
const ext = path.extname(path.join(__dirname, "abc.js"));
console.log("ext", ext);
let name = path.basename(__dirname);
console.log(name);
name = path.basename(path.join(__dirname, "abc.js"));
console.log(name);
