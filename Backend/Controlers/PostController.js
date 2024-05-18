const { NewsorJobRecordModel } = require('../Models/NewsorJob');

class PostRecord {
  async addPost(req, res) {
    try {
      const newsDetails = await NewsorJobRecordModel.create({
        title: req.body.title,
        description: req.body.description,
        type: req.body.type,
        location: req.body.location,
        date: req.body.date
      });
      res.json({ status: 'success', message: 'Record added successfully', data: newsDetails });
    } catch (err) {
      console.error('Error adding post:', err);
      res.status(500).json({ status: 'fail', message: 'Failed to add record', error: err.message });
    }
  }

  async getPosts(req, res) {
    try {
      const newspostRecords = await NewsorJobRecordModel.find({});
      res.json(newspostRecords);
    } catch (error) {
      console.error('Error getting news records:', error);
      res.status(500).json({ message: error.message });
    }
  }

  async deletePost(req, res) {
    try {
      const id = req.params.id;
      const deletedRecord = await NewsorJobRecordModel.findByIdAndDelete(id);
      if (!deletedRecord) {
        return res.status(404).json({ status: 'fail', message: 'Record not found' });
      }
      res.json({ status: 'success', message: 'Record deleted successfully', data: deletedRecord });
    } catch (error) {
      console.error('Error deleting post:', error);
      res.status(500).json({ message: error.message });
    }
  }

  async getRecord(req, res) {
    try {
      const id = req.params.id;
      const viewNewsRecord = await NewsorJobRecordModel.findById(id);
      if (!viewNewsRecord) {
        return res.status(404).json({ status: 'fail', message: 'Record not found' });
      }
      res.json(viewNewsRecord);
    } catch (error) {
      console.error('Error getting record:', error);
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new PostRecord();
