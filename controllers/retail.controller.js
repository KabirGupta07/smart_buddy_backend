const Retail = require("../models/retail.model");
exports.getData = async (req, res, next) =>{
    try{
        const[data, _] = await Retail.findAll();
        return res.status(200).json(data);
    }
    catch{
        (err) =>{
            console.log(err);
            return res.status(500);
        }
    }
}

exports.postData = async (req, res, next) =>{
    return res.status(201).json({res: "SAVED SUCCESSFULLY"});
}
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