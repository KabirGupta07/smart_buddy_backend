const ContextualPlay = require('../models/contextualplay.model');
exports.postPlayData = async (req, res, next) =>{
    let contextual_id = req.params.contextual_id;
    let played_at = req.body.played_at;
    let device_id = req.body.device_id;

    let contextualPlay = new ContextualPlay(device_id, contextual_id, played_at);
    console.log(contextualPlay);
    try{
        const [data, _] = await contextualPlay.save();
        return res.status(200).json(data);
    }
    catch{
        (err) =>{
            console.log(err);
            return res.status(500);
        }
    }
    
}