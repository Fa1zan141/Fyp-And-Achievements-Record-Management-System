const mongoose = require('mongoose');

const alumniProfileSchema = new mongoose.Schema({
  Alumniname: {
    type: String,
    required: true
  },
  alumniemail: {
    type: String,
    required: true
  },
  alumnidob: {
    type: Date,
    required: true
  },
  alumnicity: {
    type: String,
    required: true
  },
  alumnipostalcode: {
    type: String,
    required: true
  },
  alumniposition: {
    type: String
  },
  PositionDescription: {
    type: String
  },
  SuccessStory: {
    type: String
  },
  UploadVideo: {
    type: String
  },
  Uploadpic: {
    type: String
  }
});

const AlumniProfile = mongoose.model('AlumniProfile', alumniProfileSchema);

module.exports = AlumniProfile;
