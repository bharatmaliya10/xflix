const mongoose = require("mongoose");
const app = require("./app");
const config = require("./config/config");

let server; 

mongoose
  .connect(config.mongoose.url, config.mongoose.options)
  .then(() =>{ 
    server= app.listen(config.port, () => {
      console.log('server started on ' + config.port)
    })
    console.log("Connected to DB at", config.mongoose.url)})
  .catch((e) => console.log("Failed to connect to DB", e));

  
