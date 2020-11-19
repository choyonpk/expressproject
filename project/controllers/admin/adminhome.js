const express 	= require('express');
const userModel = require.main.require('./models/userModel');
const router 	= express.Router();


router.get('*',  (req, res, next)=>{
	if(req.cookies['username'] == null)
	{		
		res.redirect('/adminlogin');			
	}
	else{		
		next();			
	}		
});
router.get('/', (req, res)=>{
	var user = {
		id: req.params.id
	};	
	res.render('adminhome/adminhome',user);	
})
router.get('/managerlist', (req, res)=>{
	var user="manager";
	userModel.getAll(user,function(results)
	{
	   res.render('adminhome/managerlist', {users: results});
	});
})
router.get('/userlist', (req, res)=>{
	var user="user";
	userModel.getAll(user,function(results)
	{
	   res.render('adminhome/userlist', {users: results});
	});
})
router.get('/adminlist', (req, res)=>{
	var user="admin";
	userModel.getAll(user,function(results)
	{
	   res.render('adminhome/adminlist', {users: results});
	});
})
router.get('/searchuser', (req, res) => {
    res.render('adminhome/searchuser');
});

router.post('/searchuser', (req, res) => {
    userModel.search(req.body.search, (result) => {
        res.json({
            results: result
        });
    });
});
module.exports = router; 