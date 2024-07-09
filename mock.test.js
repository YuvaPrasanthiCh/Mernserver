jest.mock('./test/utils',()=>(
    {getData: jest.fn(),
        getRaw: jest.fn(),
    }
));
const {getData}=require('./test/utils');
const {processData}=require('./test/processData')
const {getRaw}=require('./test/utils');
const {processRaw}=require('./test/processData')
//mockReturnValue->we can return the value
test('Mocked the process data',()=>{
    //mock retun value of get data
    getData.mockReturnValue('Mocked Data');
    expect(processData()).toBe('Processed:Mocked Data')
});
test('Mocked raw data',()=>{
    getRaw.mockReturnValue(true);
    expect(processRaw()).toBe(true);
})