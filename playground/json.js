

/*
// Converting object to String

var obj = {
name : "Mirza",
age : 23

};

var stringObj = JSON.stringify(obj);

console.log(typeof stringObj);
console.log(stringObj);

console.log("--------------------");
/// Converting String to Object
console.log("--------------------");

var personString = '{"name": "Mirza", "age": 23}';

var person = JSON.parse(personString); // converts to String or Array, depending on type

console.log(typeof person);
console.log(person);
*/

const fs = require("fs");

var originalNote = {
title : "some tItle",
body : "some body"
};

var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync("notes.json", originalNoteString);


console.log("File saved!");

var noteString = fs.readFileSync("notes.json");

var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note);