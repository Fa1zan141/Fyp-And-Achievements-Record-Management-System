const mongoose= require('mongoose')

const AchievementsRecordSchema = new mongoose.Schema({
    AchievementTitle: String,
    Name: { type: String, required: true },
    Date: { type: Date, required: true },
    Catagory: { type: String, required: true },
    Description:{ type: String, required: true },
    Upload: { type: String, required: true }
})

const  AchievementsRecordSchemaModel= mongoose.model("AchievementsRecord", AchievementsRecordSchema)
module.exports= AchievementsRecordSchemaModel