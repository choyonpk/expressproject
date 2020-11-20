const express 	= require('express');
const userModel = require.main.require('./models/userModel');
const router 	= express.Router();


router.get('*',  (req, res, next)=>{
	// if(req.cookies['username'] == null)
	// {		
	// 	res.redirect('/adminlogin');			
	// }
	// else{		
		next();			
	// }		
});
router.get('/', (req, res)=>{
	var user = {
		Id: req.params.Id
	};	
	res.render('manager/managerhome/managerhome',user);	
})
router.get('/agentlist', (req, res)=>{
	var user="agent";
	userModel.getAll(user,function(results)
	{
	   res.render('manager/managerhome/agentlist', {users: results});
	});
})
router.get('/userlist', (req, res)=>{
	var user="user";
	userModel.getAll(user,function(results)
	{
	   res.render('manager/managerhome/userlist', {users: results});
	});
})
module.exports = router;