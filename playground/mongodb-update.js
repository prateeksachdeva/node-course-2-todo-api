
const {MongoClient,ObjectID}=require('mongodb');//object  distructure

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,database)=>{
  if(err){
    return console.log('Unable to connect to the MongoDB server');
  }
  console.log('Connected to the MongoDB server');
  const db = database.db('prateek');
db.collection('Users').findOneAndUpdate({
  _id:new ObjectID('5aad54ff0c2b2536103b37ce')
},{
  $set:{
    name:'pro'
  },
  $inc:{
    age:10
  }
},
{
  returnOriginal:false
}).then((result)=>{
  console.log(result);
})
database.close();});
