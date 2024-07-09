//test cases for our unit fun sum
const sum=require('./test/sum')
//jest test cases
//test function takes 2 parameters 1.label of test ,2. function to be executed 
test('1+2 to 3',()=>{
    expect(sum(1,2)).toBe(3)
    //toBe()->exactly equal
    //expect()-> used to execute our unit
})
test('Object in array',()=>{
    const data={one:1}
    data['two']=2;
    expect(data).toEqual({one:1,two:2})
})
//toBeNull->recieved value is  null or not
test('Value is NULL',()=>{
    const n=null;
    expect(n).toBeNull();
})
//toBeDefined->checks the value is defined or not
test('Value is Defined',()=>{
    const a=1;
    expect(a).toBeDefined();
})
//toBeTruthy->received value should be truth
test('Value is truth',()=>{
    const bool=true;
    expect(bool).toBeTruthy();
})
//toBeFalsy->received value should be false
test('Value is truth',()=>{
    const bool=false;
    expect(bool).toBeFalsy();
})
