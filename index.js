//server Instantiate
const express = require("express")
const app = express();


//used to parse req.body in express ->in POSt and PUT
const bodyParser =require("body-parser")

//specifically parse JSON data & add it to the request.Body object
app.use(bodyParser.json())

//Routes
app.get("/",(req,res)=>{
    res.send("it working fine")
})


app.post("/about",(req,res)=>{
    const {name,brand} =req.body;
        console.log(name,brand)
    res.send("card submitted successfully")
})

const mongoose = require("mongoose")
//below all are promises
mongoose.connect("mongodb://localhost:27017/myDatabase",{
    useNewUrlParser :true,
    useUnifiedTopology:true
})
.then(()=>{console.log("Connection SuccessFully")})
.catch((error)=>console.log(error))
//activate the server on port 3000
app.listen(8000,()=>{
    console.log("Server is Running 3000 ")
})