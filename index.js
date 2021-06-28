const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

// Create an array of questions that fits all team members

function team() {
const Questions = [
    {
        type: "input",
        name: 'name',
        message: 'Please enter the name of your team member.'
    },
    {
        type: "input",
        name: "id",
        message: "What is the employee ID of your team member?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the email of your team member?"
    },
    {
        type: "input",
        name: "office",
        message: "What is the office number of your team member?"
    },
    {
        type: "list",
        name: "role",
        message: "What is your team member's role?",
        choices: ['Engineer', 'Intern', 'Employee', 'Manager']
    },
]
}

// function index() {
    //this.name
    //this.email
    //this.id
    //this.office
//}


// const generatePage = (name, github) => {
//     return `
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content"width=device-width, initial-scale=1.0">
//     <meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
//     <title>My Team</title>
//     </head>

//     <body>
//     <h1>${name}</h1>
//     <h2><a href="https://github.com/${github}">Github</a></h2>
//     </body>
//     </html>
//     `;
// };

//generate a function to to run getEngineer questions if engineer is selects as the next team member.

//Create a function to generate the page
// function final() {
// inquirer
//     .prompt(questions)
//     .then((data) => {
//         writeToFile('index.html', '')
//         console.log('index.html was successful!')
//     })
//     .catch((err) =>) {
//       console.log(err)
//      });
// }