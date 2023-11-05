const mongoose= require("mongoose")

const patient_details =new mongoose.Schema({
        id:
        {
            type: String,
            require: true
        },
        name: 
        {
            type: String,
            require: true
        },
        mail_id: 
        {
            type: String,
            require: true
        },
        affected: {
            type: String,
            require: true
        },
        condition: {
            type: String,
            require: true
        },
        speciality: {
            type: String,
            require: true
        },
})

module.exports= mongoose.model("Patient",patient_details)
