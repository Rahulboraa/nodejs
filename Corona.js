const request = require("request");
const cheerio = require("cheerio");

console.log("Before Start");
request("https://www.worldometers.info/coronavirus", cb);

function cb(error, response, body) {
  console.error("error:", error);
  console.log("statusCode:", response && response.statusCode);
  console.log("body:", body);
}
console.log("After");
