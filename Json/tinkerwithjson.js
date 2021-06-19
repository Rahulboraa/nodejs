const fs = require("fs");
const buffer = fs.readFileSync("./example.json");
const data = JSON.parse(buffer);
console.log(data);
 