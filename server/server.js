const mongoose=require('mongoose');
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');
var todo=mongoose.model('todo',{
  text:{
    type:String,
    required:true,
    min:1,
    trim:true
  },
  complete:{
    type:Boolean,
    default:false
  },
  completedAt:{
    type:Number,
    min:1,
    default:10
  }
});
var otherTodo=new todo({
  text:' broooo ',
  complete:true,
  completedAt:100
});
otherTodo.save().then((res)=>{
  console.log(JSON.stringify(res,undefined,2));
},(err)=>{
  console.log(err);
})
