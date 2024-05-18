const AchievementsRecordModel = require('../Models/AchievementsRecord');
class AchievementRecord {
    async addAchievement(req, res) {
        const { AchievementTitle, Domain, Date, Year, Description } = req.body;
        const Upload = req.file;
        
        try {
          const newAchievementRecord = new AchievementsRecordModel({
            AchievementTitle,
            Domain,
            Date,
            Year,
            Description,
            Upload: req.file.filename
          });
          await newAchievementRecord.save();
          res.status(201).json({ message: 'Record Added successfully' });
        } catch (error) {
          console.error("Error While Adding Record:", error);
          res.status(500).json({ error: 'Internal Server Error' });
        }
      }
    
      async getAllAchievements(req, res) {
        try {
          const achievementsRecords = await AchievementsRecordModel.find({});
          res.json(achievementsRecords);
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
      }
    
      async deleteAchievementRecord(req, res) {
        const id = req.params.id;
    
        try {
          const deletedAchievementRecord = await AchievementsRecordModel.findByIdAndDelete(id);
          if (!deletedAchievementRecord) {
            return res.status(404).json({ message: 'Record not found' });
          }
          res.json(deletedAchievementRecord);
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
      }
    
      async getAchievementById(req, res) {
        try {
          const id = req.params.id;
          const achievementRecord = await AchievementsRecordModel.findById(id);
          res.json(achievementRecord);
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
      }
    
      async updateAchievementRecord(req, res) {
        try {
          const id = req.params.id;
          const updatedAchievementRecord = await AchievementsRecordModel.findByIdAndUpdate({_id:id},{ AchievementTitle: req.body.AchievementTitle, Domain: req.body.Domain, Date: req.body.Date, Year: req.body.Year, Description: req.body.Description, Upload: req.body.Upload});
          res.json(updatedAchievementRecord);
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
      }
    
      async getFullAchievementRecord(req, res) {
        try {
          const id = req.params.id;
          const fullAchievementRecord = await AchievementsRecordModel.findById(id);
          res.json(fullAchievementRecord);
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
      }
}

module.exports = new AchievementRecord();
