const Add = require('./Add')

test('test for empty',()=>{
    expect(Add('')).toBe(0)
})
test('test for one number',()=>{
    expect(Add('1')).toBe(1)
})
test('test the numbers with comma separator ',()=>{
    expect(Add('1,2')).toBe(3)
})
test('test the numbers with new line separator  ',()=>{
    expect(Add('1\n2\n3')).toBe(6)
    expect(Add('1\n2\n3\n4')).toBe(10)
})
test('test with negative numbers, it should throw error if input has any negative numbers',()=>{
    expect(Add('1,2,-3')).toBe("negatives not allowed -3");
    expect(Add('-1,-2,-3')).toBe("negatives not allowed -1,-2,-3");
})
