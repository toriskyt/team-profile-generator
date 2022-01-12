const Employee = require(`../lib/Employee`)

test(`makes an object`, () => {
    const emp = new Employee ();
    expect(typeof(emp)).toBe(`object`);
})

test(`can set name`, () => {
    const name = `Tracy`
    const emp = new Employee (name);
    expect(emp.name).toBe(name);
})

test(`can get name`, () => {
    const name = `Agnes`
    const emp = new Employee (name);
    expect(emp.getName()).toBe(name);
})

test(`can set id`, () => {
    const id = 1234;
    const emp = new Employee (`Foo`, id);
    expect(emp.id).toBe(id);
})

test(`can get id`, () => {
    const id = 1234;
    const emp = new Employee (`Foo`, id);
    expect(emp.getId()).toBe(id);
})