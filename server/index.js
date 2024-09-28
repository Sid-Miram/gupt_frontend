const express = require("express");
const mongoose  = require("mongoose");
const authRoutes = require("./routes/authRoutes.js");
const cors = require('cors');
require("dotenv").config();
const app = express();

//variables
const DB = process.env.dbURI;
const port = process.env.PORT || 4000;


//middleware 

app.use(express.json())
app.use(cors())





// database Connection 

async function dbConnect(URI){
  try{
    await mongoose.connect(URI);
    app.listen(port, () => console.log("Life is connected"));
  } catch (err) {
    console.log(`Life is not connected: ${err}`);
  }
}

dbConnect(DB);


// routes 
app.use(authRoutes);



