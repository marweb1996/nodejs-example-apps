const {ObjectId} = require("mongodb");
const {mongoose} = require("./../server/db/mongoose");
const {Todo} = require("./../server/models/todo");

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove();

// Todo.findOneAndRemove({ _id: "5a8d0a907979cd22fdbc65cc"}).then((result) => {
//     console.log(result);
// });

Todo.findByIdAndRemove("5a8d0a907979cd22fdbc65cc").then((result) => {
    console.log(result);
});