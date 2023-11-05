require("dotenv").config()
const connectDB = require("./db/connect")

const patient = require("./models/patient")
const patientjson= require("./patient.json")

const start=async()=>{
    try{
        await connectDB(process.env.MONGODB_URL)
        await patient.create(patientjson)
        console.log("success")
    }
    catch(error){
        console.log(error)
    }
}

start()