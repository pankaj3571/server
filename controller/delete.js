
  
const registrationModel=require('../models/signup.model')
const empModel=require('../models/employee.model');
const hrModel=require("../models/hr.model")
module.exports={
    deleteData:async(req,res)=>{
        try{
console.log(req.body._id,"hjvcghsdcgdshcdsc")
           
        console.log("body",req.body)
        await registrationModel.deleteOne({id:req.body._id}).then(result=>{
            
            if(!result){
                res.json({status:"false",data:result})
            }
            else{
                console.log(result,"result")
                res.json({status:"success",data:result})
            }
        })
           
      
    }catch(err){
console.log(err,"error")
    }
     
    },
    deleteHr:async(req,res)=>{
        try{
console.log(req.body._id,"hjvcghsdcgdshcdsc")
           
        console.log("body",req.body)
        await hrModel.deleteOne({id:req.body._id}).then(result=>{
            
            if(!result){
                res.json({status:"false",data:result})
            }
            else{
                console.log(result,"result")
                res.json({status:"success",data:result})
            }
        })
           
      
    }catch(err){
console.log(err,"error")
    }
     
    },
    deleteEmp:async(req,res)=>{
        try{
console.log(req.body._id,"hjvcghsdcgdshcdsc")
           
        console.log("body",req.body)
        await empModel.deleteOne({id:req.body._id}).then(result=>{
            
            if(!result){
                res.json({status:"false",data:result})
            }
            else{
                console.log(result,"result")
                res.json({status:"success",data:result})
            }
        })
           
      
    }catch(err){
console.log(err,"error")
    }
     
    },
}

