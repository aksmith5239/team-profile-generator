const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateTemplate = require('./src/page-template');

const teamData = [];
const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the team Manager's name? (Required)",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                }
                else {
                    console.log("Please enter the team manager's name:");
                    return false;
                }
            }
    }, 
    {
        type: 'input',
        name: 'id',
        message: "Enter manager's employee ID: (Required)",
        validate: employeeID => {
            if(employeeID) {
                return true;
            } else {
                console.log("Please enter the team manager's id:");
                    return false;
            }
        }
    }, 
    {
        type: 'input',
        name: 'email',
        message: "Enter manager's email address: (Required)",
        validate: employeeEmail => {
            if(employeeEmail) {
                return true;
            } else {
                console.log("Please enter the team manager's email address:");
                    return false;
            }
        }
    },    

    {
        type: 'input',
        name: 'officeNumber',
        message: "Enter manager's office number: (Required)",
        validate: managerOffice => {
            if(managerOffice) {
                return true;
            } else {
                console.log("Please enter the team manager's office number:");
                    return false;
            }
        }
    }    
    ])
    .then(answers =>  {
        const managerInfo = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        teamData.push(managerInfo);
        promptEngineer();
    })
};

const promptEngineer = () => {
    console.log(`
        =====================
        Let's Add Our Engineers
        =====================
        `);
 
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the employee's name? (Required)",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                }
                else {
                    console.log("Please enter the employee's name:");
                    return false;
                }
            }
    }, 
    {
        type: 'input',
        name: 'id',
        message: "Enter employee's employee ID: (Required)",
        validate: employeeID => {
            if(employeeID) {
                return true;
            } else {
                console.log("Please enter the employee's id:");
                    return false;
            }
        }
    }, 
    {
        type: 'input',
        name: 'email',
        message: "Enter employee's email address: (Required)",
        validate: employeeEmail => {
            if(employeeEmail) {
                return true;
            } else {
                console.log("Please enter the employee's email address:");
                    return false;
            }
        }
    },  
   
        {
            type: 'input',
            name: 'gitHub',
            message: "Enter the Engineer's GitHub username",
       
        },
   
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to enter another Engineer?',
            default: false
        }
    ])
    .then(answers =>  {
        const engineerInfo = new Engineer(answers.name, answers.id, answers.email, answers.gitHub);
        teamData.push(engineerInfo);
        if(answers.confirmAddEmployee) {
            return promptEngineer();
        } else {
            return promptIntern();
        }
    });
}
 
const promptIntern = () => {
    console.log(`
        =====================
        Let's Add Our Interns
        =====================
        `);
 
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the employee's name? (Required)",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                }
                else {
                    console.log("Please enter the employee's name:");
                    return false;
                }
            }
    }, 
    {
        type: 'input',
        name: 'id',
        message: "Enter employee's employee ID: (Required)",
        validate: employeeID => {
            if(employeeID) {
                return true;
            } else {
                console.log("Please enter the employee's id:");
                    return false;
            }
        }
    }, 
    {
        type: 'input',
        name: 'email',
        message: "Enter employee's email address: (Required)",
        validate: employeeEmail => {
            if(employeeEmail) {
                return true;
            } else {
                console.log("Please enter the employee's email address:");
                    return false;
            }
        }
    },  
   
        {
            type: 'input',
            name: 'school',
            message: "Enter the Intern's School",
           
        },
       
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to enter another Intern?',
            default: false
        }
    ])
    .then(answers =>  {
        const internInfo = new Intern(answers.name, answers.id, answers.email, answers.school);
        teamData.push(internInfo);
       
        if(answers.confirmAddEmployee) {
            return promptIntern();
            
        } else {
           
            return createMyTeam(teamData);
           
        } 
    });
};

function createMyTeam() {
    fs.writeFileSync('./dist/index.html', generateTemplate(teamData), "utf-8");
}
promptManager()


