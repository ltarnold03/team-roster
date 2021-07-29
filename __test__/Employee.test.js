// Fail test successful
const Employee = require('../lib/Employee.js');

test('checks if employee name is returned', () => {
   const employee = new Employee('Bambi Deer', '012', 'bambi@email.com');
     
   expect(employee.name).toEqual(expect.any(String));
   expect(employee.id).toEqual(expect.stringContaining('012'));
   expect(employee.email).toEqual(expect.any(String));
});

test('checks if employee name is returned', () => {
   const employee = new Employee('Bambi Deer', '012', 'bambi@email.com');
   
   expect(employee.getName()).toEqual(expect.any(String));
});
  
test('checks if employee id is returned', () => {
   const employee = new Employee('Bambi Deer', '012', 'bambi@email.com');

   expect(employee.getId()).toEqual(expect.stringContaining('012'));
});

test('checks if employee email is returned', () => {
   const employee = new Employee('Bambi Deer', '012', 'bambi@email.com');

   expect(employee.getEmail()).toEqual(expect.any(String));
});

test('checks if employee role is returned', () => {
   const employee = new Employee('Bambi Deer', '012', 'bambi@email.com');

   expect(employee.getRole()).toEqual('Employee');
});
