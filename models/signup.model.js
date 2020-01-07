const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const bcrypt = require('bcryptjs')

const Signup=new Schema({

     Organization : String,
     Website :String,
     Address: String,
     Phone : Number,
     createdAt:Date,
     updatedAt:Date
})
// Signup.pre('save', async function (next) {
//      Hash the password before saving the user model
//     const user = this
//     if (this.isModified('password')) {
//         this.password = await bcrypt.hash(this.password, 8)
//     }
    
//     next()
// })

const ukc_logins=mongoose.model('signUpDetails',Signup)
module.exports=ukc_logins