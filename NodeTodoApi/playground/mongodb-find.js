// const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb"); // identical to the code up above

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, database) => {
    if (err) {
        return console.log("Unable to connect to MongoDB serber")
    } 
    console.log("Connected to MongoDB server");

    var db = database.db('TodoApp');

    // db.collection("Todos").find({
    //     _id: new ObjectID("5a5fd9096e206ea9cff766a8")
    // }).toArray().then((docs) => {
    //     console.log("Todos");
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log("Unable to fetch todos", err);
    // });

    // db.collection("Todos").find().count().then((count) => {
    //     console.log("Todos count:", count);
    // }, (err) => {
    //     console.log("Unable to fetch todos", err);
    // });

    db.collection("Users").find({name: "Markus"}).toArray().then((docs) => {
        console.log("Users");
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        if (err) {
            console.log("Unable to fetch users");
        }
    });


    //database.close();
});