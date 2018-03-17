
const {MongoClient,ObjectID}=require('mongodb');//object  distructure

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,database)=>{
  if(err){
    return console.log('Unable to connect to the MongoDB server');
  }
  console.log('Connected to the MongoDB server');
  const db = database.db('prateek');
// db.collection('Users').deleteOne({name:'prateek'}).then((res)=>{
//   console.log(JSON.stringify(res,undefined,2));
// },(err)=>{
//   console.log(err);
// });
// db.collection('Users').deleteMany({name:'prateek'}).then((res)=>{
//   console.log(JSON.stringify(res,undefined,2));
// },(err)=>{
//   console.log(err);
// });
db.collection('Users').findOneAndDelete({name:'pra'}).then((res)=>{
  console.log(JSON.stringify(res,undefined,2));
},(err)=>{
  console.log(err);
});
database.close();});
