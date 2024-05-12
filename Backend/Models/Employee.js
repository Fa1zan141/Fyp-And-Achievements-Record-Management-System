const mongoose= require('mongoose')

const EmployeeSchema = new mongoose.Schema({
    FirstName: String,
    LastName: String,
    email: String,
    role: {
        type: String,
        default: "Student"
    },
    password: String
})

const  EmployeeModel= mongoose.model("employees", EmployeeSchema)
module.exports= EmployeeModel