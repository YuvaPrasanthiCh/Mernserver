const mongoose=require('mongoose')
describe('MongoDB connection',()=>{
    beforeAll(async()=>{
        const url='mongodb+srv://madhuridhulipudi19:g8CFQaP521fhA65p@cluster0.3kpxupq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; 
        await mongoose.connect(url);
    })
    test('MongoDB connected to server',()=>{
        expect(mongoose.connection.readyState).toBe(1)
})
})