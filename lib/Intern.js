module.exports = function() {

// Create array of questions for user input about the Intern

const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'Please enter the name of your Intern.'
    },
    {
        type: 'input',
        name: 'id',
        message: 'Please enter the employee ID of your Intern.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter the email of your Intern.'
    },
    {
        type: 'input',
        name: 'office',
        message: 'Please enter the office number of your Intern.'
    },
    {
        type: 'list',
        name: 'role',
        message: 'Which team member would you like to enter next?',
        choices: ['Engineer', 'Intern', 'None']
    },
]
};