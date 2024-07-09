const express = require('express');
const mongoose = require('mongoose')
const {ApolloServer,gql } = require('apollo-server-express');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const cors = require('cors')//import cors
const userApiFromRouter = 
require('./routes/userRoutes') //import
const app = express() 
const port = 3001;
const url= 'mongodb+srv://madhuridhulipudi19:g8CFQaP521fhA65p@cluster0.3kpxupq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

app.use(express.json())
app.use(cors()) //using cors
mongoose.connect(url,{useNewUrlParser:true,
useUnifiedTopology:true})
.then(()=>{})
.catch((err)=>{})

const server = new ApolloServer({typeDefs,resolvers});
app.use('/users',userApiFromRouter);//add router

async function StartServer(){
   await server.start();
   server.applyMiddleware({app});
   const httpServer= app.listen(port,()=>{
    console.log('Server Live 3001');
   })
   return httpServer;
}


module.exports={app,StartServer};


/*function add(a,b){
   return a+b;
}
module.exports=add;*/
StartServer();

/*module.exports=add;
beforeAll(async()=>{
   await StartServer();
})
//test my graphql server
//well run our test cases before server starts
Test('GraphQL server started and running',async()=>{
   const res=await request(app)
   .post('/graphql').send({
      query:`
      query{
         _schema{
           queryType{
               name{
               }
            }
         }    
      }`
   });
   expect(res.statusCode).toBe(200)
   expect(res.body.data._shema.queryType.name).toBe('Query')
})*/