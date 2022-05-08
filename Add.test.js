const Add = require('./Add')

test('test for empty',()=>{
    expect(Add('')).toBe(0)
})
test('test for one number',()=>{
    expect(Add('1')).toBe(1)
})
test('test the numbers with comma separator ',()=>{
    expect(Add('1,2')).toBe(3)
    expect(Add('1,2,3,4,5,6')).toBe(21)
})
test('test the numbers with new line separator  ',()=>{
    expect(Add('1\n2\n3')).toBe(6)
    expect(Add('1\n2\n3\n4')).toBe(10)
})
test('test with negative numbers, it should throw error if input has any negative numbers',()=>{
    expect(()=>Add('1,2,-3')).toThrowError("negatives not allowed, the passed negative numbers are : -3");
    expect(()=>Add('-1,-2,-3')).toThrowError("negatives not allowed, the passed negative numbers are : -1,-2,-3");
})
test('test with custom delimeter',()=>{
    expect(Add('//:\n1:2:3:4:5')).toBe(15)
})
