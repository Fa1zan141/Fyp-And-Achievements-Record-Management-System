const mongoose= require('mongoose')

const AchievementsRecordSchema = new mongoose.Schema({
    AchievementTitle: String,
    Domain: String,
    Date: String,
    Year: Number,
    Description: String,
    Upload: String
})

const  AchievementsRecordSchemaModel= mongoose.model("AchievementsRecord", AchievementsRecordSchema)
module.exports= AchievementsRecordSchemaModel