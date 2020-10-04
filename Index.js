const inquirer = require('inquirer');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

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
    },    
    ]);
};

const promptEmployee = (teamData)=> {
    console.log(`
    =====================
    Enter a New Employee
    =====================
    `);
    if(!teamData.employee) {
        teamData.employee = [];
    }
    

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
        type: 'confirm',
        name: 'defineEngineer',
        message: 'Is the Employee an Engineer?',
        default: false  
    }, 
        {
            type: 'input',
            name: 'roleEngineer',
            message: "Enter the Engineer's GitHub username",
            when: ({defineEngineer}) => {
                if(defineEngineer) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'defineIntern',
            message: 'Is the Employee an Intern?',
            default: false  
        }, 

        {
            type: 'input',
            name: 'roleIntern',
            message: "Enter the Intern's school",
            when: ({defineIntern}) => {
                if(defineIntern) {
                    return true;
                } else {
                    return false;
                }
            }
        }, 
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to enter another team member?',
            default: false
        }
    ])
    .then(employeeData => {
        teamData.employee.push(employeeData);
        if(employeeData.confirmAddEmployee) {
            return promptEmployee(teamData);
        } else {
            return teamData;
        }
    });
};
promptManager()
    .then(promptEmployee)
    .then(teamData => {
        console.log(teamData);
        // return generateTeam(teamData);
    });

