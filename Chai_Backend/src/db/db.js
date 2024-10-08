import mongoose from "mongoose";
//import {DB_NAME} from "../contents.js"
// import express from "express";

// const app=express()
//console.log(process.env);

const MongoDB = async () => {
  try {
    const DBconnection = await mongoose.connect(`mongodb+srv://ahsi:tUh6s9dEDHhBysTh@cluster0.8x5ji.mongodb.net/projectdb`);
    console.log("DataBase Connected at PORT: ",  DBconnection.connection.host);

// app.on("error",(error) => {
//     console.log("<Express error",error);
//     throw error
// })
// app.listen(process.env.PORT,()=>{
//     console.log("Running on Port:  ",process.env.PORT);
    
// })

  } catch (error) {
    console.log("Error Agaya: ", error);
    // process.exit(1);
  }
};


export default  MongoDB