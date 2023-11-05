const express = require("express")

const router= express.Router()

const {getHome,getTesting}= require("../controlllers/patient_details")

router.route("/").get(getHome)
router.route("/testing").get(getTesting)

module.exports= router