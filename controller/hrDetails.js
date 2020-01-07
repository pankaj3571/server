const hrdetails=require('../models/signup.model')
const employeeDetails=require('../models/employee.model');
const hrListDetails=require('../models/hr.model')
module.exports={
   
    hrDetails:(req,res)=>{
        
        let data= hrdetails.find();
        // console.log(data,"data")
        data.then(data1=>{
           res.json({'success':true,result:data1})
            console.log(data1)
        }).catch(err=>{
               res.json({'success':false,result:err})
           })
       
        
           
       },
       employeeDetails:(req,res)=>{
        
        let data= employeeDetails.find();
        // console.log(data,"data")
        data.then(data1=>{
           res.json({'success':true,result:data1})
            console.log(data1)
        }).catch(err=>{
               res.json({'success':false,result:err})
           })
       
        
           
       },
       hrListDetails:(req,res)=>{
        
        let data= hrListDetails.find();
        // console.log(data,"data")
        data.then(data1=>{
           res.json({'success':true,result:data1})
            console.log(data1)
        }).catch(err=>{
               res.json({'success':false,result:err})
           })
       
        
           
       }
}