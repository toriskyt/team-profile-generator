const Employee = require("../lib/Employee");
const Engineer = require(`../lib/Engineer`);

test(`makes an object`, () => {
    const eng = new Engineer ();
    expect(typeof(eng)).toBe(`object`);
})

test(`can set github`, () => {
    const github = `GitHub`
    const eng = new Engineer ("Foo", id, "duq@duq.edu", github);
    expect(eng.github).toBe(github);
})

test(`can get get github`, () => {
    const github = `GitHub`
    const eng = new Engineer (github);
    expect(eng.getgithub()).toBe(github);
})
