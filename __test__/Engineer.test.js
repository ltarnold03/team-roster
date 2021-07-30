// Fail test successful
const Engineer = require('../lib/Engineer.js');

test('checks if Engineer GitHub username is returned', () => {
    const engineer = new Engineer('Bambi Deer', '012', 'bambi@email.com', 'engineer.github');

    expect(engineer.github).toEqual(expect.any(String));
});

test('checks if Engineer GitHub is returned', () => {
    const engineer = new Engineer('Bambi Deer', '012', 'bambi@email.com', 'engineer.github');
 
    expect(engineer.getGithub()).toEqual('engineer.github');
});

test('checks if Engineer role is returned', () => {
    const engineer = new Engineer('Bambi Deer', '012', 'bambi@email.com', 'engineer.github');
 
    expect(engineer.getRole()).toEqual('Engineer');
});