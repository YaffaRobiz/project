const db = require('../util/database');

module.exports = class Memore {
    constructor(firstName, surname, dateOfBirth, dateOfDeath, city, memoreContent) {
        this.firstName = firstName;
        this.surname = surname;
        this.dateOfBirth = dateOfBirth;
        this.dateOfDeath = dateOfDeath;
        this.city = city;
        this.memoreContent = memoreContent;
    }
    save() {
        return db.execute('insert into memore.memore (`firstName`,`surname`,`dateOfBirth`,`dateOfDeath`,`city`,`memoreContent`) values (?,?,?,?,?,?)', [this.firstName, this.surname, this.dateOfBirth, this.dateOfDeath, this.city, this.memoreContent]);
    }
    static getAll() {
        return db.execute('select * from memore.memore');
    }
}
