const db = require('./db');

module.exports= {
	validate: function(user, callback){
		var sql = "select * from user where UserName='"+user.username+"' and Password='"+user.password+"'";
		db.getResults(sql, function(results){
			if(results.length >0 ){
				callback(results[0].UserType);
			}else{
				callback(false);
			}
		});
	},
	getByUserName: function(user, callback){
		var sql = "select * from user where UserName='"+user.username+"'";
		db.getResults(sql, function(results){
			if(results.length >0 ){
				callback(results[0]);
			}else{
				callback(false);
			}
		});
	},
	getAll: function(user,callback){
		var sql = "select * from user where UserType='"+user+"' ";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	insert: function(user, callback){
		console.log(user.type);
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
	updateCustomer:function(user, callback){
		var sql = "update user set Name = '"+user.name+"',ContactNo = '"+user.contactno+"',Email = '"+user.email+"',Address = '"+user.address+"' where UserName = '"+user.username+"'";
		db.execute(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
	
		});
	}

	
}
