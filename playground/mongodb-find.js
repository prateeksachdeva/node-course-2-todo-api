
const {MongoClient,ObjectID}=require('mongodb');//object  distructure

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,database)=>{
  if(err){
    return console.log('Unable to connect to the MongoDB server');
  }
  console.log('Connected to the MongoDB server');
  const db = database.db('prateek');
    // db.collection('Users').find().toArray().then((result)=>{
    //   console.log(JSON.stringify(result,undefined,2));
    // },(err)=>{
    //   console.log('Unable to do this');
    // });
    // db.collection('Users').find({name:"pra"}).toArray().then((result)=>{
    //   console.log(JSON.stringify(result,undefined,2));
    // },(err)=>{
    //   console.log('Unable to do this');
    // });
    // db.collection('Users').find({name:"pra"}).count().then((result)=>{
    //   console.log(JSON.stringify(result,undefined,2));
    // },(err)=>{
    //   console.log('Unable to do this');
    // });
    db.collection('Users').find({_id:new ObjectID('5aad54660abc2d36c8bbea51')}).toArray().then((result)=>{
      console.log(JSON.stringify(result,undefined,2));
    },(err)=>{
      console.log('Unable to do this');
    });

database.close();});
