const express 	= require('express');
const userModel		= require.main.require('./models/userModel');
const router 	= express.Router();

router.get('*',  (req, res, next)=>{
	if(req.cookies['username'] == null){
		res.redirect('/login');
	}else{
		next();
	}
});

router.get('/createmanager', (req, res)=>{
	res.render('user/createmanager');
});
router.post('/createmanager', (req, res)=>{

    var user=
    {
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        contactno: req.body.contactno,
        nid: req.body.nid,
        gender: req.body.gender,
        address: req.body.address,
        type: req.body.type,
        password: req.body.password
      

    };
    userModel.insert(user, function(status){

        if(status){
    
            console.log("Created");
            res.redirect('/adminhome/managerlist');
          
        }
        else{
              console.log("Error");  
        }
    });
});
router.get('/editmanager/:id', (req, res)=>{
    var user = {
		id: req.params.id
	};
    
	res.render('user/edit',user);
});

router.post('/editmanager/:id', (req, res)=>{
    var user = {
        id: req.params.id,
        ename: req.body.ename,
        cname: req.body.cname,
        contactno: req.body.contactno,
        username: req.body.username,
        file:     req.files.file
	};
    userModel.update(user, function(status){

        if(status){
    
            console.log("Updated");
            res.redirect('/home/userlist');
          
        }
        else{
              console.log("Error");  
        }
});
})
router.get('/deletemanager/:id', (req, res)=>{
    var user = {
		id: req.params.id
	};
    
	res.render('user/deletemanager',user);
});

router.post('/deletemanager/:id', (req, res)=>{
    var inputValue = req.body.vote;
    if (inputValue == "Delete"){
    var user = {
        id: req.params.id
      
	};
    userModel.delete(user, function(status){

        if(status){
    
            console.log("deleted");
            res.redirect('/adminhome/managerlist');
          
        }
        else{
              console.log("Error");  
        }
});}
else{
    res.redirect('/adminhome/managerlist');
}
})
router.get('/addadmin', (req, res)=>{
	res.render('user/addadmin');
});
router.post('/addadmin', (req, res)=>{

    var user=
    {
        
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        contactno: req.body.contactno,
        nid: req.body.nid,
        gender: req.body.gender,
        address: req.body.address,
        type: req.body.type,
        password: req.body.password
      

    };
    userModel.insert(user, function(status){

        if(status){
    
            console.log("added");
         
           
            res.redirect('/adminhome');
          
        }
        else{
              console.log("Error");  
        }
    });
});
router.get('/deleteuser/:id', (req, res)=>{
    var user = {
		id: req.params.id
	};
    
	res.render('user/deleteuser',user);
});

router.post('/deleteuser/:id', (req, res)=>{
    var inputValue = req.body.vote;
    if (inputValue == "Delete"){
    var user = {
        id: req.params.id
      
	};
    userModel.delete(user, function(status){

        if(status){
    
            console.log("deleted");
            res.redirect('/adminhome/userlist');
          
        }
        else{
              console.log("Error");  
        }
});}
else{
    res.redirect('/adminhome/userlist');
}
})


module.exports = router;