// Pulling in properties and methods from parent class Employee
const Employee = require(`./Employee`);

// Using properties and methods from parent class Employee and adding to it via `extension`
// `super` is used to access properties from parent class and add github
class Engineer extends Employee {
    constructor(name, id, email, github) {
       super(name, id, email) {
            this.github = github;
       }
    }
    getRole() {
        return "Engineer";
    }
    gitGithub() {
        return this.github;
    }
}

module.exports = Engineer