const patient=require("../models/patient")

const getHome= async (req,res)=>{
    const data=await patient.find(req.query)
    // console.log("asdjkasnd",req.query)
    res.status(200).json({data})
}
const getTesting= async (req,res)=>{
    res.status(200).json({msg:"I am getTesting"})
}

module.exports = {getHome,getTesting}