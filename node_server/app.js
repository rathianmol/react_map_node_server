const express = require("express");
const mysql = require('mysql');
const app = express();
const cors = require('cors');

app.use(cors()); 

var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mysql',
    database: 'givepulse_test'
});

//Returns all data in users table
app.get('/users', (req, res) => {
	let sql = "select * from users"; 
	let query = db.query(sql,(err, result) => {
		if(err) throw err;
		res.send(result); 
	});
});

//Returns user's full name and lat-long 
app.get('/usersLocations', (req, res) => {
	let sql = "select first_name, last_name, latitude, longitude from users"; 
	let query = db.query(sql,(err, result) => {
		if(err) throw err;
		res.send(result); 
	});
});



app.get('/events', (req, res) => {
	let sql = "select * from events";
	let query = db.query(sql, (err, result) => {
		if(err) throw err;
		res.send(result); 
	});
}); 

app.get('/eventsLocations', (req, res) => {
	let sql = "select title, description, latitude, longitude from events";
	let query = db.query(sql, (err, result) => {
		if(err) throw err;
		res.send(result); 
	});
}); 

app.get('/groups', (req, res) => {
	let sql = "select * from groups";
	let query = db.query(sql, (err, result) => {
		if(err) throw err;
		res.send(result); 
	});
}); 

app.get('/groupsLocations', (req, res) => {
	let sql = "select title, description, latitude, longitude from groups";
	let query = db.query(sql, (err, result) => {
		if(err) throw err;
		res.send(result); 
	});
}); 

app.get("/", (req, res) => {
	res.json({
		success: 1,
		message: "Dummy API"
	});
});

app.listen(5000, ()=>{
	console.log("Server running on port 5000");	
});


