const Employee = require('/Employee');

function Engineer(Employee, github) {
    this.github = github
}

module.exports = Engineer;