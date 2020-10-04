const Engineer = require('../lib/Engineer.js');
// const Employee = require('../lib/Employee');
//passes
test('creates engineer as a new object', () => {
    const engineer = new Engineer('M', 'MI6', 'm@email.com', 'username');
    
    expect(engineer.name).toBe(engineer.name);
    expect(engineer.id).toBe(engineer.id);
    expect(engineer.email).toBe(engineer.email);
    expect(engineer.github).toBe(engineer.github);
});


test('gets engineer github username', () => {
    const engineer = new Engineer('M');

    expect(engineer.getGitHub()).toBe(engineer.github);
});


test('creates the getRole function', () => {
    const engineer = new Engineer('M', 'MI6', 'm@email.com', 'github');

    expect(engineer.getRole()).toHaveProperty('name');
    expect(engineer.getRole()).toHaveProperty('id');
    expect(engineer.getRole()).toHaveProperty('email');
    expect(engineer.getRole()).toHaveProperty('github');
});