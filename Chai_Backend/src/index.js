import connectDB from "./db/db.js";
import dotenv from "dotenv";
import {app} from "./app.js"

//import express from "express";


//const app=express()
dotenv.config({
    path:"./.env"
})

app.get("/",(req,res)=>{
res.send("Hello")
})

app.listen(4000,()=>{
console.log("this app is running on port : 4000");

})





connectDB()





// import mongoose from "mongoose";
// import { DB_NAME } from "./contents";
// import express from "express";

// const app=express()

// const MongoDB = async () => {
//   try {
//     const DBconnection = await mongoose.connect(`${process.env.M_DB}/${DB_NAME}`);
//     console.log("DataBase Connected at PORT: ",  DBconnection.connection.host);

// app.on("error",(error) => {
//     console.log("<Express error",error);
//     throw error
// })
// app.listen(process.env.PORT,()=>{
//     console.log("Running on Port:  ",process.env.PORT);
    
// })

//   } catch (error) {
//     console.log("Error : ", error);
//     process.exit(1);
//   }
// };
