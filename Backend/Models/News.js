const mongoose= require('mongoose')

const NewsRecordSchema = new mongoose.Schema({
    newsTitle: String,
    newsdescription: String,
    newsType: String,
    newsDate: String

})

const  NewsRecordSchemaModel= mongoose.model("NewsRecord", NewsRecordSchema)
module.exports= NewsRecordSchemaModel