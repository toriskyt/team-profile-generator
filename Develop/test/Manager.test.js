const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

test(`makes an object`, () => {
    const mgr = new Manager ();
    expect(typeof(mgr)).toBe(`object`);
})

test(`can set office number`, () => {
    const number = 300;
    const mgr = new Manager (`Foo`, id, "duq@duq.edu", 300);
    expect(mgr.number).toBe(number);
})

test(`can get office number`, () => {
    const number = ""
    const mgr = new Manager (`Foo`, id, "duq@duq.edu", 300);
    expect(mgr.getOfficeNumber()).toBe(number);
})