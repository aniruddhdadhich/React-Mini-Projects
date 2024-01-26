// av8Wj6A8GlKvkrTy
//

const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://aniddh17:av8Wj6A8GlKvkrTy@cluster0.teckqcp.mongodb.net/todos"
);
const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);

module.exports = { todo };
