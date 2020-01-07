const mongoose=require('mongoose');
const Schema=mongoose.Schema;


const Signup=new Schema({
    
     Email:String,
     Password:String,
     Type:String

})


const loginType=mongoose.model('logins',Signup)
module.exports=loginType