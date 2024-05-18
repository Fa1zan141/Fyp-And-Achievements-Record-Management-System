const mongoose = require('mongoose');
const dotenv=require('dotenv');

dotenv.config({path: "./Config/.env"});

const dbConnection= async() =>{
    try{
        await mongoose.connect(process.env.URL), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
        console.log("Connected to MongoDB")
    }
    catch (error){
        console.log("Error: ", error.message)
    }

}

module.exports = dbConnection;