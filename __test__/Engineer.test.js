 // Fail test successful
const Engineer = require('../lib/Engineer.js');

test('checks if Engineer infomation is returned', () => {
    const engineer = new Engineer();

    expect(engineer.github).toEqual(expect.any(String));
    expect(engineer.github.length).toBeGreaterThan(0);
 });
