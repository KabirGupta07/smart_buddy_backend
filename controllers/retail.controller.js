const retail = require("../models/retail.model");

// exports.postSiteOptions = (req, res, next) =>{
//     const option = req.body.value;
//     const label = option.toUpperCase();
//     console.log(option + " " + label);
//     const q = `INSERT into site_options(value,label) values("${option}", "${label}")`;
//     conn.query(q,(err, results, fields) => {
//         if(err) return res.status(500).send(`ERROR: ${err}`)
//         if(!results) console.log("No results found!");
//         else{
//             return res.status(200).send(results);
//         }
//     })
// }

// exports.getSiteOptions = (req, res, next) => {
//     const q = `SELECT * FROM site_options`
//     conn.query(q, (err, results, fields) => {
//         if(err) return res.status(500).send(`ERROR: ${err}`);
//         if(!results) console.log("No results found!");
//         else{
//             return res.status(200).send(results);
//         }
//     })
// }