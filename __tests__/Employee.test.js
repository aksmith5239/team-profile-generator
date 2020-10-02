const Employee = require('../lib/Employee.js');

test('creates an employee object ', () => {
    const employee = new Employee('Allison');

    expect(employee.name).toBe('Allison');
    expect(employee.id).toBe('ID');
    expect(employee.email).toBe('email');
});