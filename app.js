require("dotenv").config()

const express = require("express");

const app= express()
const cors=require("cors")
app.use(cors({
    origin:"*",
    method:["GET","POST"]
}))
const connectDB= require("./db/connect")

const PORT= process.env.PORT || 5000;

const patient= require("./routes/patient_details")

app.get("/",(req,res)=>{
    res.send("server is up")
});

app.use("/api/patient", patient)

const start= async()=>{
    try{
        await connectDB(process.env.MONGODB_URL)
        app.listen(PORT,()=>{
            console.log(`${PORT} Yes it is connected`);
        });
    }
    catch(error)
    {
        console.log(error)
    }
}

start()