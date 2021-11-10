const Employee = require("../lib/Employee");
const Intern = require(`../lib/Intern`);

test(`makes an object`, () => {
    const int = new Intern ();
    expect(typeof(int)).toBe(`object`);
})

test(`can set school`, () => {
    const school = "DU"
    const int = new Intern (`Foo`, id, "duq@duq.edu", "DU");
    expect(int.school).toBe(school);
})

test(`can get school`, () => {
    const school = "DU"
    const int = new Intern (`Foo`, id, "duq@duq.edu", school);
    expect(int.getSchool()).toBe(school);
})