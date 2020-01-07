const signUpDetails=require('../models/signup.model')
const empdetails=require('../models/employee.model')
const hrDetails=require('../models/hr.model')
module.exports={
    Signup:(req,res)=>{
        console.log(req.body,"body===")
        
        let login=new signUpDetails({
            Organization : req.body.Organization,
            Website :req.body.Website,
            Address: req.body.Address,
            Phone : req.body.Phone,
          
        });
        login.save().then(result=>{
            console.log(result,"result")
            res.json({'success':true,result:result})
        }).catch(err=>{
            console.log(err,"result")

            res.json({'success':false,result:err})
        })
       
    },
    employeeDetails:(req,res)=>{
  
        let emp=new empdetails({
             Name :req.body.Name,
             Email :req.body.Email,
             Mobile :req.body.Mobile,
             Role :req.body.Role,
             Username :req.body.Username,
             Organization :req.body.Organization,
             Password :req.body.Password ,
          
        });
        emp.save().then(result=>{
            console.log(result,"result")
            res.json({'success':true,result:result})
        }).catch(err=>{
            console.log(err,"result")

            res.json({'success':false,result:err})
        })
    },
    Hrdetails:(req,res)=>{
  
        let hr=new hrDetails({
             Name :req.body.Name,
             Email :req.body.Email,
             Mobile :req.body.Mobile,
             Role :req.body.Role,
             Username :req.body.Username,
             Organization :req.body.Organization,
             Password :req.body.Password ,
          
        });
        hr.save().then(result=>{
            console.log(result,"result")
            res.json({'success':true,result:result})
        }).catch(err=>{
            console.log(err,"result")

            res.json({'success':false,result:err})
        })
    }
}