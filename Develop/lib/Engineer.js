// Pulling in properties and methods from parent class Employee
const Employee = require(`./Employee`);

// Using properties and methods from parent class Employee and adding to it via `extension`
// The keyword `super` is used call the parent method's constructor
class Engineer extends Employee {/**
 * 
 * @param {String} name 
 * @param {Integers} id 
 * @param {String} email 
 * @param {String} github 
 */
    constructor(name, id, email, github) {
       super(name, id, email); {
            this.github = github;
       }
    }
    getRole() {
        return "Engineer";
    }
    getGithub() {
        return this.github;
    }
}

module.exports = Engineer