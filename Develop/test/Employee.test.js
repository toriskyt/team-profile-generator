const inquirer = require(`inquirer`);
const fs = require(`fs`);

const Manager = require(`../lib/Manager`);
const Intern = require(`../lib/Intern`);
const Engineer = require(`../lib/Engineer`);

inquirer
    .prompt([ 
        {
            type: `input`,
            message: `Please enter employee name`,
            name: `name`,
        },
        {
            type: 'list',
            message: `Please choose employee position`,
            choices: [
                "Manager",
                `Intern`,
                `Engineer`,
            ],
            name: `position`,
        },

        {
            type: `input`,
            message: `Please enter employee id`,
            name: `id`
        },
        {
            type: `input`,
            message: `Please enter employee email`,
            name: `e-mail`,
        },
    ])

    

