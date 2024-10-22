const db=require('../config/db');
const mongoose=require('mongoose');
const {Schema}=mongoose;


const todoSchema=new Schema({
    Userid: {
        type: String, // You can use String, Number, or any other type based on your requirement
        default: function () {
            return mongoose.Types.ObjectId(); // If not provided, generate a random ObjectId
        }
    },
    title:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    }
});

const ToDoModel=db.model('users',todoSchema);

module.exports=ToDoModel;
