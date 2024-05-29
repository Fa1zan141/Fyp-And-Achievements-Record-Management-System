const mongoose= require('mongoose')

const AchievementsRecordSchema = new mongoose.Schema({
    AchievementTitle: String,
    Name: String,
    Date: Date,
    Catagory: String,
    Description: String,
    Upload: String
})

const  AchievementsRecordSchemaModel= mongoose.model("AchievementsRecord", AchievementsRecordSchema)
module.exports= AchievementsRecordSchemaModel