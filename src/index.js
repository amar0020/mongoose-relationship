const express = require("express");
const mongoose = require("mongoose");
const app = express();

const sectioncontroller= require("./controller/section.controller");

const bookcontroller = require("./controller/book.controller");

const authorcontroller = require("./controller/author.controller");



app.use(express.json())

app.use("/section", sectioncontroller);

app.use("/book", bookcontroller);

app.use("/author",authorcontroller);


module.exports=app



























