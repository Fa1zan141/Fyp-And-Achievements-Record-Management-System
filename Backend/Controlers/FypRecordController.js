const FypRecordModel = require('../Models/FypRecord');
class FypRecord {
  async addFyp(req, res) {
    const { Fyptitle, Supervisor, Domain, Year, Shortsummary } = req.body;
    const Upload = req.file;

    try {
      const newFypRecord = new FypRecordModel({
        Fyptitle,
        Supervisor,
        Domain,
        Year,
        Shortsummary,
        Upload: req.file.filename
      });
      await newFypRecord.save();
      res.status(201).json({ message: 'Record Added successfully' });
    } catch (error) {
      console.error("Error While Adding Record:", error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async getAllFyp(req, res) {
    try {
      const fypRecords = await FypRecordModel.find({});
      res.json(fypRecords);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getFypById(req, res) {
    try {
      const id = req.params.id;
      const fypRecord = await FypRecordModel.findById(id);
      res.json(fypRecord);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async updateFyp(req, res) {
    try {
      const id = req.params.id;
      const updatedFypRecord = awaitFypRecordModel.findByIdAndUpdate({_id:id},{ Fyptitle: req.body.Fyptitle, Supervisor: req.body.Supervisor, Domain: req.body.Domain, Year: req.body.Year, Shortsummary: req.body.Shortsummary, Upload: req.file.Upload});
      res.json(updatedFypRecord);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async deleteFyp(req, res) {
    try {
      const id = req.params.id;
      const deletedFypRecord = await FypRecordModel.findByIdAndDelete(id);
      if (!deletedFypRecord) {
        return res.status(404).json({ message: 'Record not found' });
      }
      res.json(deletedFypRecord);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getFullRecord(req, res) {
    try {
      const id = req.params.id;
      const fullRecord = await FypRecordModel.findById(id);
      res.json(fullRecord);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new FypRecord();