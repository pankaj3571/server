const userModel=require('../models/hr.model')
const adminModel=require('../models/login.model');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const JWT_KEY='UKC@123&*$KOTKAPURA@STAPAL0001'
module.exports={
    Login:async (req, res)=>{
    

                //const { email, password } = req.body;
                if(req.body.type=="hr"){
                    const user= await userModel.findOne({Email:req.body.email})
                    console.log(user,"user====")
                     if(!user)
                         res.send('email not found')
                     
                     const pwd=await  bcrypt.compare(req.body.password,user.Password,)
                     if(!pwd)
                         res.send("invalid password")
                     const token=jwt.sign({_id:user._id},JWT_KEY,{ expiresIn: '1h' })
                    // res.header('auth-token',token).send(token)
                    res.json([{status:"success", message: "user found!!!", data:{details: user, token:token,type:req.body.type}}]);
                }
                else if(req.body.type=="admin"){
                    console.log(req.body.email,"email")
                    const adminEmail=req.body.email;
                    const adminPassword=req.body.password
                   const user=  await adminModel.find();
                     console.log(user[0].Email,"user====")
                     if(user[0].Email !=req.body.email){
                    console.log('email not matched')
                     }
                     else if( user[0].Password !=req.body.password){
                        console.log("password not matched")
                     }
                     else{
                        const token=jwt.sign({_id:user[0]._id},JWT_KEY,{ expiresIn: '1h' })
                        // res.header('auth-token',token).send(token)
                        res.json([{status:"success", message: "user found!!!", data:{details: user[0], token:token}}]);
                          console.log("matched")
                     }
                        
                     
                    //  const pwd=await  bcrypt.compare(req.body.password,user.Password,)
                    //  if(!pwd)
                    //      res.send("invalid password")
                    
                   
                }

    }
}



