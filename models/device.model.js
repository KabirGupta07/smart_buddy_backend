const db = require('../mysql/mysqlConnection');
class Device{
    constructor(MAC, IP, geo_location, store, name,RAM){
        this.MAC = MAC;
        this.IP = IP;
        this.geo_location= geo_location;
        this.store = store;
        this.user_id = user_id;
        this.RAM = RAM;
    }

    save(){
        let date = new Date();
        let sql= `
        INSERT INTO device(
            MAC,
            IP,
            geo_location,
            store,
            user_id,
            RAM
        )
        values(
            '${this.MAC}',
            '${this.IP}',
            '${this.geo_location}',
            '${this.store}',
            '${this.user_id}',
            '${this.RAM}'
        )`;
        console.log(sql);
        const res = db.execute(sql);
        console.log(res);
        return res
    }

    static findByMACId(MAC){
        let sql = `SELECT * from ${registered_devices} where MAC= ${MAC}`;
        db.execute(sql);
    }
}

module.exports = Device;