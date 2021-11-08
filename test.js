// Call inquirer
const inquirer = require(`inquirer`);
// Call in file system
const fs = require(`fs`);

// Link to classes Engineer, Intern, and Manager
const Engineer = require(`./Develop/lib/Engineer`);
const Intern = require(`./Develop/lib/Intern`);
const Manager = require(`./Develop/lib/Manager`);

const memberInfo = 
[
    {
        type: `input`,
        message: `Team member name`,
        name: `name`,
    },
    {
        type: `list`,
        message: `Team member position`,
        choices: [
            `Engineer`,
            `Intern`,
            `Manager`,
        ],
        message: `position`,
    },
    {
        type: `input`,
        message: `Team member ID`,
        name: 'id',
    },
    {
        type: `input`,
        message: `Team member email`,
        name: `email`,
    },


    



]
    




