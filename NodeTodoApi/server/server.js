var express = require("express");
var bodyParser = require("body-parser");
const {ObjectId} = require("mongodb");

var {mongoose} = require("./db/mongoose")
var {Todo} = require("./models/todo");
var {User} = require("./models/user");

var app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post("/todos", (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (error) => {
        //console.log("Unable to save todo", error);
        res.status(400).send(error);
    });
});

app.get("/todos", (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (err) => {
        res.status(400).send(err);
    });
});

app.get("/todos/:id", (req, res) => {
    var id = req.params.id;
    
    if(!ObjectId.isValid(id)) {
        return res.status(404).send();
    }

    Todo.findById(id).then((todo) => {
        if(!todo) {
            return res.status(404).send();
        }
        res.status(200).send({todo});
    }).catch((err) => {
        res.status(400).send();
    });
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})

module.exports = {app};