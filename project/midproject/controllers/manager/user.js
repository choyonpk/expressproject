const express 	= require('express');
const userModel		= require.main.require('./models/userModel');
const router 	= express.Router();

router.get('*',  (req, res, next)=>{
	// if(req.cookies['username'] == null){
		// res.redirect('/login');
	// }else{
		next();
	// }
}
);

router.get('/createagent', (req, res)=>{
	res.render('manager/user1/createagent');
});
router.post('/createagent', (req, res)=>{

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
            res.redirect('/managerhome/agentlist');
          
        }
        else{
              console.log("Error");  
        }
    });
});
router.get('/editagent/:Id', (req, res)=>{
    var user = {
		Id: req.params.Id
	};
    
	res.render('manager/user/edit',user);
});

router.post('/editagent/:Id', (req, res)=>{
    var user = {
        Id: req.params.Id,
        ename: req.body.ename,
        cname: req.body.cname,
        contactno: req.body.contactno,
        username: req.body.username,
        
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
/*router.get('/deleteagent/:Id', (req, res)=>{
    var user = {
		Id: req.params.Id
	};
    
	res.render('manager/user/deleteagent',user);
});

router.post('/deleteagent/:Id', (req, res)=>{
    var inputValue = req.body.vote;
    if (inputValue == "Delete"){
    var user = {
        Id: req.params.Id
      
	};
    userModel.delete(user, function(status){

        if(status){
    
            console.log("deleted");
            res.redirect('/managerhome/agentlist');
          
        }
        else{
              console.log("Error");  
        }
});}
else{
    res.redirect('/managerhome/agentlist');
}
})
router.get('/addagent', (req, res)=>{
	res.render('manager/user/addagent');
});
router.post('/addagent', (req, res)=>{

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
         
           
            res.redirect('/managerhome');
          
        }
        else{
              console.log("Error");  
        }
    });
});*/
router.get('/deleteagent/:Id', (req, res)=>{
    var user = {
		Id: req.params.Id
	};
    
	res.render('manager/user1/deleteagent',user);
});

router.post('/deleteagent/:Id', (req, res)=>{
    var inputValue = req.body.vote;
    if (inputValue == "Delete"){
    var user = {
        Id: req.params.Id
      
	};
    userModel.delete(user, function(status){

        if(status){
    
            console.log("deleted");
            res.redirect('/managerhome/userlist');
          
        }
        else{
              console.log("Error");  
        }
});}
else{
    res.redirect('/managerhome/userlist');
}
})


module.exports = router;