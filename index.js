const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('generatePage')
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