const conn = require("../mysql/mysqlConnection").getConnection();
const jwt = require('jsonwebtoken');
const contextual = require('../models/contextual.model');


//  exports.patientInfo = (req, res, next) => { 
//     const token = req.query.token;
//     if(!token) return res.status(401).send("Unauthorized! Login first.")
//     const username = jwt.decode(token).username;
//     const q = `SELECT * FROM user_info WHERE USERNAME="${username}"`;
//     conn.query(q, (err, results, fields) => {
//         if(err) console.log(err);
//         if(!results) console.log("No results found!");
//         else{
//             res.status(200).send(results[0]);
//         }
//     })
//  };

// exports.postPatientOverview = (req, res, next) => {
//     const token = req.query.token;
//     if(!token) return res.status(401).send("Unauthorized! Login first.")
//     const username = jwt.decode(token).username;
//     const reqBody = req.body;
//     console.log(reqBody);
//     const keys = [], values = [];
//     for(const key in req.body){
//         keys.push(key);
//         values.push(`"${req.body[key]}"`);
//     }
//     keys.push("username");
//     values.push(`"${username}"`);
//     // conn.query(`SELECT * FROM user_info WHERE username = "${reqBody.username}")`)
//     // .then((res) => {
//     //     if(!results) console.log("No results found!");
//     // })
//     const q = `INSERT INTO user_info(${keys}) VALUES(${values})`;
//     conn.query(q, (error, results, fields) => {
//         console.log(error);
//         console.log(results);
//         console.log(q);
//         if(error) return res.status(400).json(error);
//         else return res.status(201).send(results);      
//     });
// };

// exports.postPatientHistory = (req, res, next) => {
//     const token = req.query.token;
//     if(!token) return res.status(401).send("Unauthorized! Login first.")
//     const username = jwt.decode(token).username;
//     console.log(req.body);
//     const keys = [], values = []; 
//     for(const key in req.body){
//         keys.push(key);
//         values.push(`"${req.body[key]}"`);
//     }
//     keys.push("username");
//     values.push(`"${username}"`);
//     const q = `INSERT INTO users_history(${keys}) VALUES(${values})`;
//     console.log(q);
//     conn.query(q, (error, results, fields) => {
//         console.log(error+"\n"); console.log(results); console.log(q);
//         if(error) return res.status(400).json(error);
//         else return res.status(201).send(results);      
//     });
// };

// exports.getPatientHistory = (req, res, next) => {
//     const token = req.query.token;
//     if(!token) return res.status(401).send("Unauthorized! Login first.")
//     const username = jwt.decode(token).username;
//     const q = `SELECT * FROM users_history WHERE username="${username}"`;
//     // console.log(q);
//     conn.query(q, (err, results, fields) => {
//         if(err) console.log(err);
//         if(!results) console.log("No results found!");
//         else{
//             res.status(200).send(results);
//         }
//     })
// };