const Manager = require('../lib/Manager.js');
//passes
test('creates manager as a new object', () => {
    const manager = new Manager('M', 'MI6', 'm@email.com', '300');
    
    expect(manager.name).toBe(manager.name);
    expect(manager.id).toBe(manager.id);
    expect(manager.email).toBe(manager.email);
    expect(manager.officeNumber).toBe(manager.officeNumber);
});

test('creates the getRole function for manager', () => {
    const manager = new Manager('M', 'MI6', 'm@email.com', '300');

    expect(manager.getRole()).toHaveProperty('name');
    expect(manager.getRole()).toHaveProperty('id');
    expect(manager.getRole()).toHaveProperty('email');
    expect(manager.getRole()).toHaveProperty('officeNumber');
});