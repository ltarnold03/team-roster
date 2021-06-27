const inquirer = require('inquirer');
const fs = require('fs');

const generatePage = (name, github) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content"width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My Team</title>
    </head>

    <body>
    <h1>${name}</h1>
    <h2><a href="https://github.com/${github}">Github</a></h2>
    </body>
    </html>
    `;
};

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