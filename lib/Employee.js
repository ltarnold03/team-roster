// Pass Test Successful
// module.exports = function(val1, val2) {
//     if (val1 === val2) {
//         return true;
//     } else {
//         return false;
//     }
// };

module.exports = function() {
    // Create array of questions for user input about you Employee
const empQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'Please enter the name of your Employee.'
    },
    {
        type: 'input',
        name: 'id',
        message: 'Please enter the employee ID of your Employee.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter the email of your Employee.'
    },
    {
        type: 'input',
        name: 'office',
        message: 'Please enter the office number of your Employee.'
    },
    {
        type: 'list',
        name: 'role',
        message: 'Which team member would you like to enter next?',
        choices: ['Engineer', 'Intern', 'None']
    },
]
};