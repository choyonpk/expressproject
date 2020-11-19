const db = require('./db');

module.exports= {
	validate: function(user, callback){
		var sql = "select * from user where UserName='"+user.username+"' and UserType='"+user.type+"'";
		db.getResults(sql, function(results){
			if(results.length >0 ){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	getById: function(id, callback){

	},
	getAll: function(user,callback){
		var sql = "select * from user where UserType='"+user+"' ";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	insert: function(user, callback){
		var sql = "Insert into user (Name,UserName,Email,ContactNo,NID,Gender,Address,UserType,Password) VALUES('"+user.name+"','"+user.username+"','"+user.email+"','"+user.contactno+"','"+user.nid+"','"+user.gender+"','"+user.address+"','"+user.type+"', '"+user.password+"')";
		db.execute(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	update:function(user, callback){
		var sql = "update employeer set ename = '"+user.ename+"',cname = '"+user.cname+"',contactno = '"+user.contactno+"',username = '"+user.username+"',pic = '"+user.file+"' where ID = '"+user.id+"'";
		db.execute(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
	
		});
	},
	delete: function(user, callback){
		var sql = "delete from user where ID = '"+user.id+"'";
		db.execute(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
	
		});

	},
	insert2: function(user, callback){
		var sql = "Insert into employeer (ename,age,contactno,username,email,password) VALUES('"+user.ename+"','"+user.age+"','"+user.contactno+"','"+user.username+"','"+user.email+"', '"+user.password+"')";
		db.execute(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	validate2: function(user, callback){
		var sql = "select * from employeer where username='"+user.username+"' and password='"+user.password+"'";
		db.getResults(sql, function(results){
			if(results.length >0 ){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	insert3: function(user, callback){
		var sql = "update employeer set newcompany = '"+user.enewcompany+"',jobtitle = '"+user.jtitle+"',joblocation = '"+user.jlocation+"' where username= '"+user.username+"'";
		db.execute(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	
} 