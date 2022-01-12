const Engineer = require(`../lib/Engineer`);
//passed

test(`makes an object`, () => {
    const eng = new Engineer ();
    expect(typeof(eng)).toBe(`object`);
})

test(`can set github`, () => {
    const github = `GitHub`
    const eng = new Engineer ("Foo", 1, "duq@duq.edu", github);
    expect(eng.github).toBe(github);
})

test(`can get github`, () => {
    const github = `GitHub`
    const eng = new Engineer ("Foo", 1, "duq@duq.edu", github);
    expect(eng.getGithub()).toBe(github);
})
