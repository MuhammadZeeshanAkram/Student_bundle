const Todo = require('../model/todo_model');

exports.createToDo = async (req, res) => {
    try {
        const { userId, title, desc } = req.body;
        const todo = new Todo({ userId, title, desc });
        await todo.save();
        res.status(201).json({ status: true, success: todo });
    } catch (error) {
        res.status(500).json({ status: false, message: error.message });
    }
};

exports.getToDoList = async (req, res) => {
    try {
        const { userId } = req.body;
        const todos = await Todo.find({ userId });
        res.json({ status: true, success: todos });
    } catch (error) {
        res.status(500).json({ status: false, message: error.message });
    }
};

exports.deleteToDo = async (req, res) => {
    try {
        const { id } = req.body;
        const deletedTodo = await Todo.findByIdAndDelete(id);
        res.json({ status: true, success: deletedTodo });
    } catch (error) {
        res.status(500).json({ status: false, message: error.message });
    }
};
