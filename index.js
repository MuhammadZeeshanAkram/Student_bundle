const app=require('./app');
const db=require('./config/db');
const ToDoModel=require('./model/todo_model');

const port=process.env.PORT || 3000;
app.listen(port,()=>{
    
    console.log(`server is running on port ${port}`);
})