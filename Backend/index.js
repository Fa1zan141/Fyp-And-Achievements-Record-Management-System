const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const jwt= require('jsonwebtoken');
const multer = require('multer');
//Mongo Db Models
const EmployeeModel = require('./Models/Employee');
const FypRecordModel = require('./Models/FypRecord');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cors({
  origin:"*"
}));

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
   app.get('/', async (req, res) => {
    try {
        const fypRecords = await FypRecordModel.find({});
        res.json(fypRecords);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
app.get('/updaterecord/:id', async (req, res) => {
  try {
      const id = req.params.id;
      const fypRecordsid = await FypRecordModel.findById({_id:id});
      res.json(fypRecordsid);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});

app.put('/updatedrecord/:id', async (req, res) => {
  try {
      const id = req.params.id;
      const updatefypRecordsid = await FypRecordModel.findByIdAndUpdate({_id:id},{ Fyptitle: req.body.Fyptitle, Supervisor: req.body.Supervisor, Domain: req.body.Domain, Year: req.body.Year, Shortsummary: req.body.Shortsummary, Upload: req.file.Upload});
      res.json(updatefypRecordsid);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});

app.delete('/deletefpyrecord/:id', async (req, res) => {
  try {
      const id = req.params.id;
      const updatefypRecordsid = await FypRecordModel.findByIdAndDelete({_id:id},{ Fyptitle: req.body.Fyptitle, Supervisor: req.body.Supervisor, Domain: req.body.Domain, Year: req.body.Year, Shortsummary: req.body.Shortsummary, Upload: req.body.Upload});
      res.json(updatefypRecordsid);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});

app.get('/fullrecord/:id', async (req, res) => {
  try {
      const id = req.params.id;
      const viewfypRecordsid = await FypRecordModel.findById({_id:id});
      res.json(viewfypRecordsid);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});



// Start the server
app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});



