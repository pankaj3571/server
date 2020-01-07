const UpdateRoomDetail=require('../models/signup.model');
const updateHr=require("../models/hr.model");
const updateEmployee=require('../models/employee.model')
module.exports={
    updateData:async(req,res)=>{
        try{
console.log(req.body.CheckIn,"hjvcghsdcgdshcdsc")
            var update_data={$set:
                {
                    Organization : req.body.Organization,
                    Website :req.body.Website,
                    Address: req.body.Address,
                    Phone : req.body.Phone,

                }}
        console.log("body",req.body._id)
        await UpdateRoomDetail.updateOne({_id:req.body._id},update_data,{new:true,upsert: true, setDefaultsOnInsert: true}).then(result=>{
            
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
   
    updateHr:async(req,res)=>{
        try{
console.log(req.body.CheckIn,"hjvcghsdcgdshcdsc")
            var update_data={$set:
                {
                    Name :req.body.Name,
                    Email :req.body.Email,
                    Mobile :req.body.Mobile,
                    Role :req.body.Role,
                    Username :req.body.Username,
                    Organization :req.body.Organization,
                    

                }}
        console.log("body",req.body._id)
        await updateHr.updateOne({_id:req.body._id},update_data,{new:true,upsert: true, setDefaultsOnInsert: true}).then(result=>{
            
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
    updateEmp:async(req,res)=>{
        try{
console.log(req.body.CheckIn,"hjvcghsdcgdshcdsc")
            var update_data={$set:
                {
                    Name :req.body.Name,
                    Email :req.body.Email,
                    Mobile :req.body.Mobile,
                    Role :req.body.Role,
                    Username :req.body.Username,
                    Organization :req.body.Organization,

                }}
        console.log("body",req.body._id)
        await updateEmployee.updateOne({_id:req.body._id},update_data,{new:true,upsert: true, setDefaultsOnInsert: true}).then(result=>{
            
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
