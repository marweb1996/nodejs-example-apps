// const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb"); // identical to the code up above

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, database) => {
    if (err) {
        return console.log("Unable to connect to MongoDB serber")
    } 
    console.log("Connected to MongoDB server");

    var db = database.db('TodoApp');

    // db.collection("Todos").deleteMany({text: "Eat lunch"}).then((result) => {
    //     console.log(result);
    // });

    // db.collection("Todos").deleteOne({text: "Eat lunch"}).then((result) => {
    //     console.log(result);
    // });

    db.collection("Todos").findOneAndDelete({completed: false}).then((result) => {
        console.log(result);
    });


    //database.close();
});