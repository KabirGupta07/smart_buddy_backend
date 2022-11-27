const db = require('../mysql/mysqlConnection');
const database = "descriptive_play";
class DescriptivePlay{
    constructor(device_id, descriptive_id, played_at, phrase){
        this.device_id = device_id;
        this.descriptive_id = descriptive_id;
        this.played_at = played_at;
        this.phrase = phrase;
    }

    save(){
        console.log("Hello");
        let sql =`
        INSERT INTO ${database}(
            device_id,
            descriptive_id,
            played_at,
            phrase  
        )
        values(
            "${this.device_id}",
            ${this.descriptive_id},
            "${this.played_at}",
            "${this.phrase}"
        )`;
        console.log(sql);
        return db.execute(sql);
    }

    findAll(){
        let sql =`SELECT * FROM ${database}`;
        return db.execute(sql);
    }
    findById(descriptive_id){
        let sql = `SELECT * FROM ${database} WHERE contextual_id = ${descriptive_id}`;
        return db.execute(sql);
    }
}
module.exports = DescriptivePlay;