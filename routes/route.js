
const express = require('express');
const routes = express.Router();
const login=require('../controller/login')
const signup=require('../controller/signup')
const gethr=require('../controller/hrDetails')
const update=require('../controller/update')
const deletedata=require('../controller/delete')

routes.post("/signup",signup.Signup);
routes.post("/AddHr",signup.Hrdetails);
routes.post("/update",update.updateData);
routes.post("/updateHr",update.updateHr);
routes.post("/updateEmp",update.updateEmp);
routes.post("/login",login.Login);
routes.post("/delete",deletedata.deleteData);
routes.post("/deleteEmp",deletedata.deleteEmp);
routes.post("/deleteHr",deletedata.deleteHr );
routes.post('/employeeDetails',signup.employeeDetails);
routes.get("/details",gethr.hrDetails);
routes.get("/EmpDetails",gethr.employeeDetails);
routes.get("/HrList",gethr.hrListDetails);

module.exports=routes;



