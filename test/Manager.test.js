const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

test(`makes an object`, () => {
    const mgr = new Manager ();
    expect(typeof(mgr)).toBe(`object`);
})

test(`can set office number`, () => {
    const testNumber = 300;
    const mgr = new Manager (`Foo`, 1, "duq@duq.edu", testNumber);
    expect(mgr.officeNumber).toBe(testNumber);
})

test(`can get office number`, () => {
    const testNumber = 300;
    const mgr = new Manager (`Foo`, 1, "duq@duq.edu", testNumber);
    expect(mgr.getOfficeNumber()).toBe(testNumber);
})