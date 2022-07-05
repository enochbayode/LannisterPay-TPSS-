require("dotenv").config();
// const http = require("http");
const express = require("express");

app = express();
//setting up middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.raw());

require("./router")(app);

// connecting to mongodb
const mongoose = require('mongoose');
// useFindAndModify set to false
// mongoose.set('useFindAndModify', false);
// use create index set to true
// mongoose.set('useCreateIndex', true);

mongoose.connect(process.env.databaseURL, {
  useNewUrlParser:true,
  useUnifiedTopology:true
}).then(()=>{
console.log('we are already connected to the server database');
app.listen(process.env.PORT, () => {
  console.log("This application is already running on port " , process.env.PORT);
});
}).catch(err => {
console.log('could not connect to mongoDB', err)
})