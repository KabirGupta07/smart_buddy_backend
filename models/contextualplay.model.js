const db = require('../mysql/mysqlConnection');
const database = "contextual_play";
class ContextualPlay{
    constructor(device_id, contextual_id, played_at){
        this.device_id = device_id;
        this.contextual_id = contextual_id;
        this.played_at = played_at;
    }

    save(){
        console.log("Hello");
        let sql =`
        INSERT INTO ${database}(
            device_id,
            contextual_id,
            played_at
        )
        values(
            ${this.device_id},
            ${this.contextual_id},
            "${this.played_at}"
        )`;
        console.log(sql);
        return db.execute(sql);
    }

    findAll(){
        let sql =`SELECT * FROM ${database}`;
        return db.execute(sql);
    }
    findById(contextual_id){
        let sql = `SELECT * FROM ${database} WHERE contextual_id = ${contextual_id}`;
        return db.execute(sql);
    }
}

module.exports = ContextualPlay;