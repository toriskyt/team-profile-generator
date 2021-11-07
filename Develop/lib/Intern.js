// Call parent class Employee to have access to functions
const Employee = require(`./Employee`)

// Class Intern extends the parent class Employee properties and adds `school` via `super`
class Intern extends Employee {
    constructor(name, id, email, school) {
        super (name, id, email);
        this.school = school;
    }
    getRole() {
        return "Intern";
    }
    getSchool() {
        return this.school;
    }
}


module.exports = Intern