const Employee = require('/Employee');

function Manager(Employee, office) {
    this.office = office;
}

module.exports = Manager;