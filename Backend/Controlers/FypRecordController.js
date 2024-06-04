const FypRecordModel = require('../Models/FypRecord');

class FypRecord {

  async addFyp(req, res) {

    const { Fyptitle, Supervisor, Domain, Year, Shortsummary } = req.body;
    const Upload = req.files['Upload'] ? req.files['Upload'][0].filename : '';
    const Logo = req.files['Logo'] ? req.files['Logo'][0].filename : '';
    
    try {
      const newFypRecord = new FypRecordModel({
        Fyptitle,
        Supervisor,
        Domain,
        Year,
        Shortsummary,
        Upload: Upload,
        Logo: Logo
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
      if (!fypRecord) {
        return res.status(404).json({ message: 'Record not found' });
      }
      res.json(fypRecord);
    } catch (error) {
      console.error("Error While Fetching Record:", error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async updateFyp(req, res) {
    try {
      const id = req.params.id;
      const updatedFields = {
        Fyptitle: req.body.Fyptitle,
        Supervisor: req.body.Supervisor,
        Domain: req.body.Domain,
        Year: req.body.Year,
        Shortsummary: req.body.Shortsummary,
      };

      if (req.file) {
        updatedFields.Upload = req.file.filename;
        updatedFields.Logo = req.file.filename;
      }

      const updatedFypRecord = await FypRecordModel.findByIdAndUpdate(
        id,
        { $set: updatedFields },
        { new: true }
      );

      if (!updatedFypRecord) {
        return res.status(404).json({ message: 'Record not found' });
      }

      res.json(updatedFypRecord);
    } catch (error) {
      console.error("Error While Updating Record:", error);
      res.status(500).json({ message: 'Internal Server Error' });
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

  async viewFullRecord(req, res) {
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
