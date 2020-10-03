const Intern = require('../lib/Intern.js');
//passes
test('creates intern as a new object', () => {
    const intern = new Intern('M', 'MI6', 'm@email.com', 'Harvard');
    
    expect(intern.name).toBe(intern.name);
    expect(intern.id).toBe(intern.id);
    expect(intern.email).toBe(intern.email);
    expect(intern.school).toBe(intern.school);
});

test('gets intern school', () => {
    const intern = new Intern('M');

    expect(intern.getSchool()).toBe(intern.school);
});

test('creates the getRole function for intern', () => {
    const intern = new Intern('M', 'MI6', 'm@email.com', '300');

    expect(intern.getRole()).toHaveProperty('name');
    expect(intern.getRole()).toHaveProperty('id');
    expect(intern.getRole()).toHaveProperty('email');
    expect(intern.getRole()).toHaveProperty('school');
});