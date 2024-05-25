const express = require('express');
const router = express.Router();

const app = express();
// Multer configuration for file upload
app.use("/uploads", express.static(__dirname + "/public/uploads"));
const upload = require('../Config/upload');
const { verifyUser, checkUserRole } = require('../middlewares/auth');

const userController = require('../Controlers/userController');
const FypController = require('../Controlers/FypRecordController');
const AchievementController = require('../Controlers/AchievementRecordController');
const PostController = require('../Controlers/PostController');
const AlumniProfileController = require('../Controlers/AlumniProfileController')


// Routes
router.post('/register', userController.register);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.post('/addfyp',verifyUser, checkUserRole(['Student']), upload.single("Upload"), FypController.addFyp); 
router.get('/', FypController.getAllFyp);
router.get('/updaterecord/:id', FypController.getFypById);
router.put('/updatedrecord/:id',verifyUser, checkUserRole(['Student']), upload.single("Upload"), FypController.updateFyp); 
router.delete('/deletefpyrecord/:id',verifyUser, checkUserRole(['Admin']), FypController.deleteFyp);
router.get('/fullrecord/:id', FypController.getFullRecord);
router.post('/addachievement',verifyUser, checkUserRole(['Student']), upload.single("Upload"), AchievementController.addAchievement); 
router.get('/doneachievement', AchievementController.getAllAchievements);
router.get('/updateachievement/:id', AchievementController.getAchievementById);
router.put('/updateachievement/:id',verifyUser, checkUserRole(['Student']), upload.single("Upload"), AchievementController.updateAchievementRecord); 
router.delete('/deleteachievementrecord/:id',verifyUser, checkUserRole(['Admin']), AchievementController.deleteAchievementRecord);
router.get('/achievementfullrecord/:id', AchievementController.getFullAchievementRecord);
router.post('/addnews',verifyUser, checkUserRole(['Alumni']), PostController.addPost);
router.get('/newspostrecord', PostController.getPosts);
router.delete('/deletenewspostrecord/:id',verifyUser, checkUserRole(['Admin']), PostController.deletePost);
router.get('/newsrecord/:id', PostController.getRecord);
router.post('/addprofile',verifyUser, checkUserRole(['Alumni']), upload.fields([{ name: 'Uploadpic', maxCount: 1 }, { name: 'UploadVideo', maxCount: 1 }]), AlumniProfileController.addProfile);
router.get('/profile/:id', AlumniProfileController.getProfileById);
router.get('/profiles', AlumniProfileController.getAllProfiles);




module.exports = router; 
