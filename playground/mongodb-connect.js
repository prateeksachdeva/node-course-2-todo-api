// const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');//object  distructure
// var ob=new ObjectID();
// console.log(ob);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,database)=>{
  if(err){
    return console.log('Unable to connect to the MongoDB server');
  }
  console.log('Connected to the MongoDB server');
  const db = database.db('prateek');
  // db.collection('Todo').insertOne({
  //   text:'something to do',
  //   completed:true
  // },(err,result)=>{
  //   if(err){
  //     return console.log('inable to insert',err);
  //   }
  //   console.log(JSON.stringify(result,undefined,2));
  // })
  db.collection('Users').insertOne({
    name:'prateek',
    age:24,
    location:'delhi'
  }).then((res)=>{
    console.log(res.ops);
  });

database.close();});
