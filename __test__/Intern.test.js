// Fail test successful
const Intern = require('../lib/Intern.js');

test('check to see if Intern school is returned', () => {
    const intern = new Intern('Bambi Deer', '012', 'bambi@email.com', 'School of Here');

    expect(intern.school).toEqual(expect.stringContaining('School of Here'));
});

test('check to see if Intern school is returned', () => {
    const intern = new Intern('Bambi Deer', '012', 'bambi@email.com', 'School of Here');

    expect(intern.getSchool()).toEqual(expect.stringContaining('School of Here'));
});

test('checks if Intern role is returned', () => {
    const intern = new Intern('Bambi Deer', '012', 'bambi@email.com', 'School of Here');
 
    expect(intern.getRole()).toEqual('Intern');
 });