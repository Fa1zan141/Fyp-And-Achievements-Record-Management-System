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
const AlumniProfileController = require('../Controlers/AlumniProfileController');
const conservationController= require('../Controlers/conservationController');
const messageController= require('../Controlers/messageController');

// Routes
router.post('/register', userController.register);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/userprofiles', userController.getAllUsers);
router.get('/userprofile/:id', userController.getuserProfileById);
router.delete('/deleteuser/:id', userController.deleteUser);
router.put('/changepassword', userController.changePassword);
router.get('/count/all-users', userController.getAllUserCount);
router.get('/count/alumni-users', userController.getAllAlumniCount);

router.get('/api/users/:userId',userController.getUsers );

router.post('/addfyp', upload.fields([{ name: 'Upload', maxCount: 1 }, { name: 'Logo', maxCount: 1 }]), FypController.addFyp);
router.get('/', FypController.getAllFyp);
router.get('/updaterecord/:id', FypController.getFypById);
router.put('/updatedrecord/:id', upload.single("Upload"), FypController.updateFyp);
router.delete('/deletefpyrecord/:id', FypController.deleteFyp);
router.get('/fullrecord/:id', FypController.getFullRecord);

router.post('/addachievement', upload.single("Upload"), AchievementController.addAchievement);
router.get('/doneachievement', AchievementController.getAllAchievements);
router.get('/updateachievement/:id', AchievementController.getAchievementById);
router.put('/updateachievement/:id', upload.single("Upload"), AchievementController.updateAchievementRecord);
router.delete('/deleteachievementrecord/:id', AchievementController.deleteAchievementRecord);
router.get('/achievementfullrecord/:id', AchievementController.getFullAchievementRecord);

router.post('/addnews',upload.single("Upload"), PostController.addPost);
router.get('/newspostrecord', PostController.getPosts);
router.delete('/deletenewspostrecord/:id', PostController.deletePost);
router.get('/newsrecord/:id', PostController.getRecord);

router.post('/addprofile', upload.fields([{ name: 'Uploadpic', maxCount: 1 }, { name: 'UploadVideo', maxCount: 1 }]), AlumniProfileController.addProfile);
router.get('/profile/:id', AlumniProfileController.getProfileById);
router.get('/profiles', AlumniProfileController.getAllProfiles);
router.put('/user/update', upload.single('profilePicture'), userController.updateprofile);
router.delete('/deletealumni/:id', AlumniProfileController.deleteAlumniProfile);

router.post('/api/conversation',conservationController.createConversation );
router.get('/api/conversations/:userId',conservationController.getUserConversations );

router.post('/api/message', messageController.sendMessage);
router.get('/api/message/:conversationId', messageController.getMessages );

module.exports = router; 
