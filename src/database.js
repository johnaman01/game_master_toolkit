"use strict";

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/mean-todo", function (err) {
  if(err) {
    console.log("failed to connect to mongodb!");
  } else {
    console.log("connected to mongodb.");
  }
});


