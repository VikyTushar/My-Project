var url = "mongodb://localhost:27017/";
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbase = db.db("mydb"); //here
    var myData = {name: "Tushar ", address: "Mangalwedha"};
    dbase.collection("customers").insertOne(myData, function(err, res) {
        if (err) throw err;
        console.log("Data inserted");
        db.close();
    });
});