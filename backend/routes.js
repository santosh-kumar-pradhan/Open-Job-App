const express  = require("express")

const router = express.Router()
const JobModel = require("./JobsModel")
const ContactModel = require("./contactModel")
// POST 201 {Created} /api/v1/create
router.post("/create",async(req,res)=>{
    await JobModel.create(req.body)
    res.send({msg:"Job Create Successfully"})
})

router.get("/jobs",async function(req,res){
    const jobs = await JobModel.find({})
    res.send(jobs)
})

router.post("/contact",async(req,res)=>{
await ContactModel.create(req.body)
    res.send({msg:"Contact Information sent Successfully"})
})

module.exports =  router