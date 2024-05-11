const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const jwt= require('jsonwebtoken');
const multer = require('multer');
//Mongo Db Models
const EmployeeModel = require('./Models/Employee');
const FypRecordModel = require('./Models/FypRecord');
const AchievementsRecordModel = require ('./Models/AchievementsRecord')
const JobRecordModel= require('./Models/Job')
const NewsRecordModel= require('./Models/News')
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cors())

app.use("/uploads", express.static(__dirname + "/public/uploads"));



const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});

require("./Models/FypRecord");
const FypRecordSchema = mongoose.model("FypRecord");
const upload = multer({ storage: storage });


/*
EmployeeModel.create({
  
  FirstName :"Reema",
  LastName: "Choudhary",
  email: "Admin@gmail.com",
  role: "Admin",
  password: "admin123"
  })
  */

// Connect to MongoDB
mongoose.connect("mongodb+srv://muhammadfaizan:124@cluster0.gm5sg1g.mongodb.net/FYP")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// Registration Route
app.post('/register', async (req, res) => {

 try {

    const newEmployee = new EmployeeModel(req.body);
    await newEmployee.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})
//for login
app.post('/login', async (req, res) => {

    const{email, password,role}=req.body;
    try {
      const user = await EmployeeModel.findOne({ email,role });
      if (user) {
        if (user.password === password && user.email===email && user.role===role) {
          res.json({ status: 'success', message: 'Login Successfully' });
        } else {
          res.json({ status: 'error', message: 'Credentials Incorrect' });
        }
      } else {
        res.json({ status: 'error', message: 'User Not Registered' });
      }
    } catch (error) {
      console.error("Error during login:", error);
      res.status(500).json({ status: 'error', message: 'Internal Server Error' });
    }
    let token = jwt.sign({email}, 'Faizan');
    res.cookie("Token",token);
  });
  //For Logout
  app.get("/logout", function(req, res){
    res.cookie("Token","");
    res.redirect("/splash");
  });

  //For FypRecord

/*
  app.post('/addfyp', async (req, res) => {
    try {
   
       const newfyprecord = new FypRecordModel(req.body);
       await newfyprecord.save();
       res.status(201).json({ message: 'Record Added successfully' });
     } catch (error) {
       console.error("Error Whipe Adding Record:", error);
       res.status(500).json({ error: 'Internal Server Error' });
     }
   })
*/
// Adding Fyp Record 
   app.post('/addfyp', upload.single("Upload"), async (req, res) => {
    console.log(req.Upload);
    const Fyptitle = req.body.Fyptitle;
    const Supervisor = req.body.Supervisor;
    const Domain = req.body.Domain;
    const Year = req.body.Year;
    const Shortsummary = req.body.Shortsummary;
    const Upload = req.file;
    try {
      const newfyprecord = new FypRecordModel({
        Fyptitle,
        Supervisor,
        Domain,
        Year,
        Shortsummary,
        Upload: req.file.filename
      } );
      await newfyprecord.save();
      res.status(201).json({ message: 'Record Added successfully' });
    } catch (error) {
      console.error("Error Whipe Adding Record:", error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  //Getting Record

   app.get('/', async (req, res) => {
    try {
        const fypRecords = await FypRecordModel.find({});
        res.json(fypRecords);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//Getting Updated Record
app.get('/updaterecord/:id', async (req, res) => {
  try {
      const id = req.params.id;
      const fypRecordsid = await FypRecordModel.findById({_id:id});
      res.json(fypRecordsid);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});
// Updating Record
 app.put('/updatedrecord/:id', upload.single("Upload"), async (req, res) => {
  try {
      const id = req.params.id;
      const updatefypRecordsid = await FypRecordModel.findByIdAndUpdate({_id:id},{ Fyptitle: req.body.Fyptitle, Supervisor: req.body.Supervisor, Domain: req.body.Domain, Year: req.body.Year, Shortsummary: req.body.Shortsummary, Upload: req.file.Upload});
      res.json(updatefypRecordsid);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});

//Deleting Record
app.delete('/deletefpyrecord/:id', async (req, res) => {
  try {
      const id = req.params.id;
      const updatefypRecordsid = await FypRecordModel.findByIdAndDelete({_id:id},{ Fyptitle: req.body.Fyptitle, Supervisor: req.body.Supervisor, Domain: req.body.Domain, Year: req.body.Year, Shortsummary: req.body.Shortsummary, Upload: req.body.Upload});
      res.json(updatefypRecordsid);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});
// Getting All Record On New Page
app.get('/fullrecord/:id', async (req, res) => {
  try {
      const id = req.params.id;
      const viewfypRecordsid = await FypRecordModel.findById({_id:id});
      res.json(viewfypRecordsid);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});

// For Achievements Record
//Adding Achievement Record
app.post('/addachievement', upload.single("Upload"), async (req, res) => {
  console.log(req.Upload);
  const AchievementTitle = req.body.AchievementTitle;
  const Domain = req.body.Domain;
  const Date = req.body.Date;
  const Year = req.body.Year;
  const Description = req.body.Description;
  const Upload = req.file;
  try {
    const newachievementrecord = new AchievementsRecordModel({
      AchievementTitle,
      Domain,
      Date,
      Year,
      Description,
      Upload: req.file.filename
    } );
    await newachievementrecord.save();
    res.status(201).json({ message: 'Record Added successfully' });
  } catch (error) {
    console.error("Error Whipe Adding Record:", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
//Getting Record
app.get('/doneachievement', async (req, res) => {
  try {
      const achievementsRecords = await AchievementsRecordModel.find({});
      res.json(achievementsRecords);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});

//Deleting Record
app.delete('/deleteachievementrecord/:id', async (req, res) => {
  try {
      const id = req.params.id;
      const updateachievementRecordsid = await AchievementsRecordModel.findByIdAndDelete({_id:id},{ AchievementTitle: req.body.AchievementTitle, Domain: req.body.Domain, Date: req.body.Date, Year: req.body.Year, Description: req.body.Description, Upload: req.body.Upload});
      res.json(updateachievementRecordsid);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});

//Getting Updated Record
app.get('/updateachievement/:id', async (req, res) => {
  try {
      const id = req.params.id;
      const updateachievementsRecordsid = await AchievementsRecordModel.findById({_id:id});
      res.json(updateachievementsRecordsid);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});

// Updating Record
 app.put('/updateachievement/:id', upload.single("Upload"), async (req, res) => {
  try {
      const id = req.params.id;
      const updateachievementsRecordsid = await  AchievementsRecordModel.findByIdAndUpdate({_id:id},{ AchievementTitle: req.body.AchievementTitle, Domain: req.body.Domain, Date: req.body.Date, Year: req.body.Year, Description: req.body.Description, Upload: req.body.Upload});
      res.json(updateachievementsRecordsid);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});
// Getting All Record On New Page
app.get('/achievementfullrecord/:id', async (req, res) => {
  try {
      const id = req.params.id;
      const viewachievementRecordsid = await AchievementsRecordModel.findById({_id:id});
      res.json(viewachievementRecordsid);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});

// For JobsPost 
// Adding JobsPost Record 

app.post('/jobpost', async (req, res) => {
  try {
    const jobDetails = await JobRecordModel.create(req.body);
    res.json({ status: "success", message: "Record added successfully", data: jobDetails });
  } catch (err) {
    res.status(500).json({ status: "fail", message: "Failed to add record", error: err.message });
  }
});

 //Getting Record

 app.get('/jobpostrecord', async (req, res) => {
  try {
      const jobpostRecords = await JobRecordModel.find({});
      res.json(jobpostRecords);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});
//Deleting Record
app.delete('/deletejobpostrecord/:id', async (req, res) => {
  try {
      const id = req.params.id;
      const updatejobpostRecordsid = await  JobRecordModel.findByIdAndDelete({_id:id},{ jobTitle: req.body.jobTitle, joblocation: req.body.joblocation, joblink: req.body.joblink, skill: req.body.skill, experience: req.body.experience});
      res.json(updatejobpostRecordsid);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});
/*
app.post('/addjobpost', async (req, res) => {
  const jobTitle = req.body.jobTitle;
  const joblocation = req.body.joblocation;
  const joblink = req.body.joblink;
  const skill = req.body.skill;
  const experience = req.body.experience;
  try {
    const newJobsrecord = new JobRecordModel({
      jobTitle,
      joblocation,
      joblink,
      skill,
      experience
    });
    await newJobsrecord.save();
    res.status(201).json({ message: 'Record Added successfully' });
  } catch (error) {
    console.error("Error While Adding Record:", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
*/

// For News Post 
// Adding News Post Record 

app.post('/addnews', async (req, res) => {
  try {
    const newsDetails = await NewsRecordModel.create(req.body);
    res.json({ status: "success", message: "Record added successfully", data: newsDetails });
  } catch (err) {
    res.status(500).json({ status: "fail", message: "Failed to add record", error: err.message });
  }
});

 //Getting Record

 app.get('/newspostrecord', async (req, res) => {
  try {
      const newspostRecords = await NewsRecordModel.find({});
      res.json(newspostRecords);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});
//Deleting Record
app.delete('/deletenewspostrecord/:id', async (req, res) => {
  try {
      const id = req.params.id;
      const updatenewspostRecordsid = await  NewsRecordModel.findByIdAndDelete({_id:id},{ newsTitle: req.body.newsTitle, newsdescription: req.body.newsdescription, newsType: req.body.newsType, newsDate: req.body.newsDate});
      res.json(updatenewspostRecordsid);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});

// Start the server
app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});



