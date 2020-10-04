const Employee = require('../lib/Employee.js');

test('creates an employee object ', () => {
    const employee = new Employee('Bond', '007','bond@email');

    expect(employee.name).toBe(employee.name);
    expect(employee.id).toBe(employee.id);
    expect(employee.email).toBe(employee.email);
});

test('gets employee name' , () => {
    const employee = new Employee('Bond');

    expect(employee.getName()).toBe(employee.name);
    
});

test('gets employee id', () => {
    const employee = new Employee('Bond');

    expect(employee.getId()).toBe(employee.id);
}); 

test('gets employee email', () => {
    const employee = new Employee('Bond');

    expect(employee.getEmail()).toBe(employee.email);
});

test('creates the getRole function', () => {
    const employee = new Employee('Bond', '007','bond@email');

    expect(employee.getRole()).toHaveProperty('name');
    expect(employee.getRole()).toHaveProperty('id');
    expect(employee.getRole()).toHaveProperty('email');
});
