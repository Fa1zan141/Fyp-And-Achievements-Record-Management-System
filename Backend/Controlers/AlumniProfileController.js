const AlumniProfile = require('../Models/AlumniProfile');

class AlumniProfileController {
  
  async addProfile(req, res) {
    try {
      const {
        Alumniname,
        alumniemail,
        alumnidob,
        alumnicity,
        alumnipostalcode,
        alumniposition,
        PositionDescription,
        SuccessStory
      } = req.body;

      const profilePicture = req.files['Uploadpic'] ? req.files['Uploadpic'][0].filename : '';
      const successStoryVideo = req.files['UploadVideo'] ? req.files['UploadVideo'][0].filename : '';

      const alumniProfile = await AlumniProfile.create({
        Alumniname,
        alumniemail,
        alumnidob,
        alumnicity,
        alumnipostalcode,
        alumniposition,
        PositionDescription,
        SuccessStory,
        UploadVideo: successStoryVideo,
        Uploadpic: profilePicture
      });

      res.json({ status: 'success', message: 'Alumni profile created successfully', data: alumniProfile });
    } catch (error) {
      console.error('Error adding alumni profile:', error);
      res.status(500).json({ status: 'fail', message: 'Failed to create alumni profile', error: error.message });
    }
  }

  async getAllProfiles(req, res) {
    try {
      const alumniProfiles = await AlumniProfile.find();
      res.json({ status: 'success', data: alumniProfiles });
    } catch (error) {
      console.error('Error getting all alumni profiles:', error);
      res.status(500).json({ status: 'fail', message: 'Failed to get all alumni profiles', error: error.message });
    }
  }

  async getProfileById(req, res) {
    try {
      const id = req.params.id;
      const alumniProfile = await AlumniProfile.findById(id);
      if (!alumniProfile) {
        return res.status(404).json({ status: 'fail', message: 'Alumni profile not found' });
      }
      res.json(alumniProfile);
    } catch (error) {
      console.error('Error getting alumni profile by ID:', error);
      res.status(500).json({ status: 'fail', message: 'Failed to get alumni profile', error: error.message });
    }
  }

  async editProfile(req, res) {
    try {
      const id = req.params.id;
      const updateFields = req.body;
      const updatedProfile = await AlumniProfile.findByIdAndUpdate(id, updateFields, { new: true });
      if (!updatedProfile) {
        return res.status(404).json({ status: 'fail', message: 'Alumni profile not found' });
      }
      res.json({ status: 'success', message: 'Alumni profile updated successfully', data: updatedProfile });
    } catch (error) {
      console.error('Error editing alumni profile:', error);
      res.status(500).json({ status: 'fail', message: 'Failed to update alumni profile', error: error.message });
    }
  }
  async deleteAlumniProfile(req, res) {
    const id = req.params.id;

    try {
      const deletedAlumniProfile = await AlumniProfile.findByIdAndDelete(id);
      if (!deletedAlumniProfile) {
        return res.status(404).json({ message: 'Record not found' });
      }
      res.json(deletedAlumniProfile);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new AlumniProfileController();
