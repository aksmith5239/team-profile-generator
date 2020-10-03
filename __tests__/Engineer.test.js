const Engineer = require('../lib/Employee.js');
//passes
test('creates engineer as a new object', () => {
    const engineer = new Engineer('M', 'MI6', 'm@email.com', 'username');
    
    expect(engineer.name).toBe(engineer.name);
    expect(engineer.id).toBe(engineer.id);
    expect(engineer.email).toBe(engineer.email);
    expect(engineer.github).toBe(engineer.github);
});

//fails
test('gets engineer github username', () => {
    const engineer = new Engineer('M');

    expect(engineer.getGitHub()).toBe(engineer.github);
});

//fails
test('creates the getRole function', () => {
    const engineer = new Engineer('M', 'MI6', 'm@email.com', 'username');

    expect(engineer.getRole()).toHaveProperty('name');
    expect(engineer.getRole()).toHaveProperty('id');
    expect(engineer.getRole()).toHaveProperty('email');
    expect(engineer.getRole()).toHaveProperty('github');
});