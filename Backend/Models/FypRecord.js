const mongoose= require('mongoose')

const FypRecordSchema = new mongoose.Schema({
    Fyptitle: String,
    Supervisor: String,
    Domain: String,
    Year: Number,
    Shortsummary: String,
    Upload: String
})

const  FypRecordModel= mongoose.model("FypRecord", FypRecordSchema)
module.exports= FypRecordModel