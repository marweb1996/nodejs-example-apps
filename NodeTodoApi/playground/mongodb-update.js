// const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb"); // identical to the code up above

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, database) => {
    if (err) {
        return console.log("Unable to connect to MongoDB serber")
    } 
    console.log("Connected to MongoDB server");

    var db = database.db('TodoApp');

    // db.collection("Todos").findOneAndUpdate({
    //     _id: ObjectID("5a6a377fe1fafc98caa8483e")
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection("Users").findOneAndUpdate({
        _id: ObjectID("5a5fd59b96af9f760c2ce56a")
    }, {
        $set: {
            name: "John"
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });


    //database.close();
});