let dataSets=[];
//execute my env before all
beforeAll(()=>{
    dataSets=['raju','ram']
})
beforeEach(()=>{
    console.log('Before Each Setup is called')
})
afterEach(()=>{
    console.log('After Each Setup is called')
})
afterAll(()=>{
    dataSets=[];
})
test('Test Case',()=>{
    expect(dataSets.length).toBe(2);
})
test('Data set contains',()=>{
    expect(dataSets).toContain('ram');
})
test('Data set contains',()=>{
    expect(dataSets).toContain('raju');
})