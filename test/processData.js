const {getData,getRaw}=require('./utils');
function processData(){
    return `Processed:${getData()}`;//process real data
}
function processRaw(){
    return getRaw();
}
module.exports={processData,processRaw};