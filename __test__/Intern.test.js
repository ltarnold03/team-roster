// Fail test successful
const Intern = require('../lib/Intern.js');

test('check to see if Intern information is returned', () => {
    const intern = new Intern();

    expect(employee.school).toEqual(expect.any(String));
    expect(employee.school.length).toBeGreaterThan(0);
});

test('checks if Manager role is returned', () => {
    const manager = new Manager('Bambi Deer', '012', 'bambi@email.com');
 
    expect(manager.getRole()).toEqual('Manager');
 });