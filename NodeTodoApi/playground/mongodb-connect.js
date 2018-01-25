// const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb"); // identical to the code up above

// var obj = new ObjectID();
// console.log(obj);


// var user = {name: "Markus", age: 21};
// var {name} = user;
// console.log(name);

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, database) => {
    if (err) {
        return console.log("Unable to connect to MongoDB serber")
    } 
    console.log("Connected to MongoDB server");

    var db = database.db('TodoApp');

    // db.collection("Todos").insertOne({
    //     text: "Something to do",
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log("Unable to insert todo", err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection("Users").insertOne({
    //     name: "Markus",
    //     age: 21,
    //     location: "Graz"
    // }, (err, result) => {
    //     if (err) {
    //         return console.log("Unable to insert user", err);
    //     }

    //     console.log(result.ops[0]._id.getTimestamp());
    // });


    database.close();
});