const makerHtml = require(`./lib/htmlmaker`)
// Call inquirer
const inquirer = require(`inquirer`);
// Call in file system
const fs = require(`fs`);
const path = require(`path`);
const targetFolder = path.resolve(__dirname, "dist");
const filePath = path.join(targetFolder, "team.html");
// Link to classes Engineer, Intern, and Manager
const Engineer = require(`./lib/Engineer`);
const Intern = require(`./lib/Intern`);
const Manager = require(`./lib/Manager`);
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
        } else if(answer.position === "Engineer"){
            addEngineer()
        } else if(answer.position === "Intern"){
            addIntern()
        }
        else if(answer.position === `Exit`) {
            if (!fs.existsSync(targetFolder)) {
                fs.mkdirSync(targetFolder)
            }
            fs.writeFileSync (filePath, makerHtml(team), "utf-8");
            console.log(team)
        }
    } ) 
}

const manInfo = 
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
];
const engInfo = 
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
        message: `Team member github name`,
        name: `github`,
    },
];
const intInfo = 
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
        message: `Team member school name`,
        name: `school`,
    },
]
function addManager() {
    inquirer.prompt(manInfo).then(answers => {
        console.log(`Member ${answers[`name`]}`);
        const m = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        team.push(m);
        console.log(team);
        mainMenu()
    })
}
function addEngineer() {
    inquirer.prompt(engInfo).then(answers => {
        console.log(`Member ${answers[`name`]}`);
        const e = new Engineer(answers.name, answers.id, answers.email, answers.github);
        team.push(e);
        console.log(team);
        mainMenu()
    })
}
function addIntern() {
    inquirer.prompt(intInfo).then(answers => {
        console.log(`Member ${answers[`name`]}`);
        const i = new Intern(answers.name, answers.id, answers.email, answers.school);
        team.push(i);
        console.log(team);
        mainMenu()
    })
}

mainMenu()




