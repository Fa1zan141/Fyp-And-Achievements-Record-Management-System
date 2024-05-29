const mongoose = require('mongoose');

const NewsorJobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  type: { type: String, required: true },
  location: { type: String, required: true },
  date: { type: Date, required: true },
  Upload: String
});

const NewsorJobRecordModel = mongoose.model('NewsorJobRecord', NewsorJobSchema);

module.exports = { NewsorJobRecordModel };
