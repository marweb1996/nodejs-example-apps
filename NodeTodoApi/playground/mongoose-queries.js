const {ObjectId} = require("mongodb");
const {mongoose} = require("./../server/db/mongoose");
const {Todo} = require("./../server/models/todo");

var id = "5a8d0017ccd7dc20843ad374";

if(!ObjectId.isValid(id)) {
    console.log("Id not valid");
} else {
    Todo.find({
        _id: id
    }).then((todos) => {
        console.log("Todos", todos);
    });

    Todo.findOne({
        _id: id
    }).then((todo) => {
        console.log("Todo", todo);
    });

    Todo.findById(id).then((todo) => {
        if(!todo) {
            return console.log("Id not found");
        }
        console.log("Todo by Id", todo);
    }).catch((err) => console.log(err));
}