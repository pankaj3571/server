
 const mongoose=require('mongoose');
 const Schema=mongoose.Schema;
 const bcrypt = require('bcryptjs')
 
 const HrDetails=new Schema({
 
         Name :String,
         Email :String,
         Mobile :Number,
         Role :String,
         Username :String,
         Organization :String,
         Password :String ,
         createdAt :String,
         updatedAt :String
 })
 HrDetails.pre('save', async function (next) {
      //Hash the password before saving the user model
     const user = this
     if (this.isModified('Password')) {
         this.Password = await bcrypt.hash(this.Password, 8)
     }
     
     next()
 })
 
 const hrdetails=mongoose.model('hrdetails',HrDetails)
 module.exports=hrdetails