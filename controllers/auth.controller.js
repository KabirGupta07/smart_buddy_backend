const conn = require('../mysql/mysqlConnection');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const Device = require('../models/device.model');
const User = require('../models/user.model');
// const {User} = require("./models");

exports.verifyDevice = async(req, res, next) => {
    let MAC = req.body.MAC;
    if(!MAC) return res.status(401);    
    // try{
    //     const [data, extra] = await Device.findByMACId(MAC);
    //     console.log(extra);
    //     if(!data) return res.status(401).send("No such Registered Device!");
    //     console.log(data);
    // }
    // catch{(err) =>{
    //         console.log(err);
    //     }
    // }
    return res.json({message:"DEVICE VERIFIED!"}).status(200);
};

exports.user = async(req, res, next) => {
    let id = req.body.id;
    // if(!MAC) return res.status(401);    
    // try{
    //     const [data, extra] = await Device.findByMACId(MAC);
    //     console.log(extra);
    //     if(!data) return res.status(401).send("No such Registered Device!");
    //     console.log(data);
    // }
    // catch{(err) =>{
    //         console.log(err);
    //     }
    // }

    try{
        const user = await User.findById(id)
        return user;
    }
    catch{(err) => {

    }}
    return res.json({message:"DEVICE VERIFIED!"}).status(200);
};

exports.googleLogin = async (req, res, next) => {
    const token = req.body.token;
    if(!token) return res.status(400);
    const jwtToken = jwt.decode(token);
    console.log(jwtToken);
    const name = jwtToken.name;
    const email = jwtToken.email;
    const picture = jwtToken.picture;
    const user = new User(name, email, picture);
    console.log(user);
    try{
        const [data, extra] = await user.save();
        console.log(data.insertId);
        const [userData, _] = await User.findById(data.insertId);
        return res.status(200).json(userData[0]);
    }
    catch{
        (err) =>{
            console.log(err);
            return res.status(500);
        }
    }
    
    // try{
    //     const user = new User(name, email);

    // }
}

exports.getRefreshToken = (req, res, next) => {};
exports.verifyAccessToken = (req, res, next) => {};
exports.verifyRefreshToken = (req, res, next) => {}; 
exports.deleteToken = (req, res, next) => {};


// exports.userLogin = async (req, res, next) => {
//     try {
//         const { username, password } = req.body;
//         if (!username || !password) return res.status(401).send("Invalid Username or Password");

//         const q = `SELECT * FROM users WHERE USERNAME = "${username}"`;
//         conn.query(q, async (err, result, fields) => {
//             if (err) console.log(err);
//             if (!result[0]) return res.status(401).json("Invalid Username or Password")
//             else {
//                 const user = result[0];
//                 // console.log(user);
//                 const match = await bcrypt.compare(password, user.PASSWORD);
//                 if(match === true){
//                     const token = jwt.sign(
//                         {
//                             username: username
//                         },
//                         process.env.JWT_SECRET);
//                     console.log("Passwords Matched!");
//                     return res.status(200).json({token: token});
//                 }
//                 else {
//                     res.status(401).send("Invalid Username or Password");
//                 }
//             }    
//         });
//     }   
//     catch{(err) => {
//             res.status(500).send(err);
//         }
//     };

// }

// exports.userRegister = async (req, res, next) => {

//     const { username, password } = req.body;
//     console.log(username);
//     try {
//         const hashedPassword = await bcrypt.hash(password, 10);
//         console.log(hashedPassword);
//         const q = `INSERT INTO users (username, password) VALUES ("${username}", "${hashedPassword}")`;
//         console.log(q);
//         conn.query(q, (err, result, fields) => {
//             if (err) {
//                 console.log(err);
//                 res.status(500).send("Could not register successfully, please try again!");
//             }
//             else if (result.affectedRows === 1) {
//                 res.status(200).send('Succesfully Registered, Please Login!')
//             }
//         });
//     }

//     catch {
//         (err) => {
//             console.log(err);
//         }
//     };

// };