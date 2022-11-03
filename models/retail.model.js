const db = require('../mysql/mysqlConnection');
class Retail{
    constructor(){ 
        this.productSKU = productSKU;
        this.brand = brand;
        this.quantity = quantity;
        this.price = price;
    }

    save(){
        let sql= `
        INSERT INTO retail( 
            productSKU,
            brand,
            quantity,
            price
        )
        values(
            '${this.productSKU}',
            '${this.brand}',
            '${this.quantity}',
            '${this.price}',
        )`;

        const res = db.execute(sql);
        console.log(res);
        return res

    }

    static findAll(){
        let sql = `SELECT * FROM retail`;
        return db.execute(sql);
    }

    static findById(id){
        
    }
}

module.exports = Retail;