const mongoose= require('mongoose')

const JobsRecordSchema = new mongoose.Schema({
    jobTitle: String,
    joblocation: String,
    joblink: String,
    skill: String,
    experience: String
})

const  JobsRecordSchemaModel= mongoose.model("JobsRecord", JobsRecordSchema)
module.exports= JobsRecordSchemaModel