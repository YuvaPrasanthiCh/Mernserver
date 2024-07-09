//how we can perform async on unit testing
function fetchData(callback){
    setTimeout(()=>{
        callback('admin')
    },4000);
}
//calls admin after 4 seconds
/*function MyData(callback){
    setTimeout(()=>{
        callback(id)
    },4000);
}*/
module.exports={fetchData};