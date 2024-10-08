import express from "express";
import cors from "cors";
//import cookieParser from "cookieParser";

const app = express();
console.log("APPPPP");

app.use(
  cors({
     origin:process.env.CORS_Origin,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" })); //extra key words not compulsory

app.use(
  express.urlencoded({
    //extra key words not compulsory
    extended: true,
    limit: "16kb",
  })
);

app.use(express.static("public")); //as we created public folder for public assets to store files

//app.use(cookieParser());

//routes  
import userRouter from "./routes/user.routes.js";
import { registerUser } from "./controllers/user.controller.js";



//router declaration
console.log("hello")
app.use("/api/v1/users",userRouter)
app.get("/api/v1/users",(req,res)=>{
  res.send("asd")
})
//http://localhost:8000/api/v1/users/register

export  {app};
























// app.get("/",(req,res)=>{
// res.send("Hello")
// })

// app.listen(4000,()=>{
// console.log("this app is running on port : 4000");

// })


