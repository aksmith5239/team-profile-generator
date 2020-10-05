const Manager = require('../lib/Manager.js');
// const Employee = require('../lib/Employee');
//passes
test('creates manager as a new object', () => {
    const manager = new Manager('Bond','007','bond@email','300');
    
    expect(manager.name).toBe(manager.name);
    expect(manager.id).toBe(manager.id);
    expect(manager.email).toBe(manager.email);
    expect(manager.officeNumber).toBe(manager.officeNumber);
});

test('creates the getRole function for manager', () => {
    const manager = new Manager('M', 'MI6', 'm@email.com', '300');

    expect(manager.getRole()).toBe('Manager');
    
});