// Fail test successful
const Manager = require('../lib/Manager.js');

    test('checks if the Manager information is returned', () => {
        const manager = new Manager();

        expect(manager.officeNumber).toEqual(expect.any(Number));
        expect(manager.officeNumber.length).toBeGreaterThan(0);
    });
    