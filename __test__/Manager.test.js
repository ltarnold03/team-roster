// Fail test successful
const Manager = require('../lib/Manager.js');

    test('checks if the Manager information is returned', () => {
        const manager = new Manager('Bambi Deer', '012', 'bambi@email.com', '1234');

        expect(manager.officeNumber).toEqual(expect.stringContaining('1234'));
    });
    
    test('checks if Manager role is returned', () => {
        const manager = new Manager('Bambi Deer', '012', 'bambi@email.com');
     
        expect(manager.getRole()).toEqual('Manager');
     });