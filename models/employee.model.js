
 const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const bcrypt = require('bcryptjs')

const Signup=new Schema({

        Name :String,
        Email :String,
        Mobile :Number,
        Role :String,
        Username :String,
        Organization :String,
        Password :String ,
        createdAt :Date,
        updatedAt :Date
})
Signup.pre('save', async function (next) {
     //Hash the password before saving the user model
    const user = this
    if (this.isModified('Password')) {
        this.Password = await bcrypt.hash(this.Password, 8)
    }
    
    next()
})

const ukc_logins=mongoose.model('employeedetails',Signup)
module.exports=ukc_logins