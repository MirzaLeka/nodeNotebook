const lodash = require("lodash");
const express = require('express');
const hbs = require("hbs");
const fs = require("fs");

var app = express();

var output = lodash.without([1,2,3],3);
console.log(output);


app.get("/", (req, res) => {

res.render("home.hbs");

});



app.listen(3000, () => {
console.log("Server is running on port 3000");
});
