const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

// Create an array of questions that fits all team members

function team() {
inquirer
    .prompt([
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
])
}

const generatePage = () => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content"width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <title>My Team</title>
    </head>

    <body>
        <header>
            <div class="p-3 mb-2 bg-danger text-white" style="text-align: center">
                <h1>My Team</h1>
            </div>

            <section class="card p-3 mb-2 bg-primary text-white" style="text-align: center">
                <div class="container">
                    <h4>
                        <ul>
                            <li>ID: </li>
                            <li>Email: </li>
                            <li>Office number: </li>
                        </ul>
                    </h4>
                </div>

                <div class="container">
                    <h4>
                        <ul>
                            <li>ID: </li>
                            <li>Email: </li>
                            <li>Office number: </li>
                        </ul>
                    </h4>
                </div>

                <div class="container">
                    <h4>
                        <ul>
                            <li>ID: </li>
                            <li>Email: </li>
                            <li>Office number: </li>
                        </ul>
                    </h4>
                </div>
            </section>
        </header>

<h2><a href="https://github.com/${github}">Github</a></h2>
    </body>
    </html>
    `;
}; generatePage();