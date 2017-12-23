var url = "mongodb://localhost:27017/";
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbase = db.db("mydb"); //here
    dbase.collection("customers").find({}, { _id: 0, name: 1 }).toArray(function(err, result) {
        if (err) throw err;
        console.log(result[3]);
        db.close();
    });
}); 