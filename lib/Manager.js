// Pull in parent class Employee to access properties and methods
const Employee = require(`./Employee`);

class Manager extends Employee {/**
 * 
 * @param {String} name 
 * @param {Integers} id 
 * @param {String} email 
 * @param {Integers} officeNumber 
 */
    constructor (name, id, email, officeNumber) {
        super (name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole() {
        return "Manager";
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
}


module.exports = Manager;