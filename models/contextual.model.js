const db = require('../mysql/mysqlConnection');
const database = "contextual";
class Contextual{
    constructor(contextual_id, playtime, device_id, video){
        this.contextual_id = contextual_id;
        this.playtime = playtime;
        this.device_id = device_id;
        this.video = video;
    }

    save(){
        let sql = `
        INSERT INTO ${database}(
            playtime,
            device_id,
            video
        )

        values(
            '${this.playtime}',
            '${this.device_id}',
            '${this.video}'
        );`
        return db.execute(sql);
    }

    static findAll(){
        let sql = `SELECT * FROM ${database}`;
        return db.execute(sql);
    }

    static findById(id){
        let sql = `SELECT * FROM ${database} WHERE contextual_id=${id}`;
        return db.execute(sql);
    }
}

module.exports = Contextual;