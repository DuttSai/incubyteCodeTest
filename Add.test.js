const Add = require('./Add')

test('test for empty',()=>{
    expect(Add('')).toBe(0)
})
test('test for one number',()=>{
    expect(Add('1')).toBe(1)
})
test('test the 2 numbers',()=>{
    expect(Add('1,2')).toBe(3)
})