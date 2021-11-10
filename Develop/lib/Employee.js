// Create parent class named Employee with properties and methods
// Class and properties
class Employee {/**
 * 
 * @param {String} name 
 * @param {Integers} id 
 * @param {String} email 
 */
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    // methods
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return "Employee";
    }
}

// Exports the parent class to be used in the child
module.exports = Employee;