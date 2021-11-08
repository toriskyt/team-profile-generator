// Call inquirer
const inquirer = require(`inquirer`);
// Call in file system
const fs = require(`fs`);

// Link to classes Engineer, Intern, and Manager
const Engineer = require(`./Develop/lib/Engineer`);
const Intern = require(`./Develop/lib/Intern`);
const Manager = require(`./Develop/lib/Manager`);
const team = [];

function mainMenu() {
    inquirer.prompt(
            {
                type: `list`,
                message: `Team member position`,
                choices: [
                    `Engineer`,
                    `Intern`,
                    `Manager`,
                    `Exit`,
                ],
                name: `position`,
            }
    ).then(answer => {
        console.log(answer);
        if(answer.position === "Manager") {
            addManager()
        }
        else if(answer.position === `Exit`) {
            fs.writeFile(`index.html`, `Hi`);
        }
    } ) 
}

const memberInfo = 
[
    {
        type: `input`,
        message: `Team member name`,
        name: `name`,
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
    {
        type: `input`,
        message: `Team member office number`,
        name: `officeNumber`,
    },
]
function addManager() {
    inquirer.prompt(memberInfo).then(answers => {
        console.log(`Member ${answers[`name`]}`);
        const m = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        team.push(m);
        console.log(team);
        mainMenu()
    })
}


mainMenu()




