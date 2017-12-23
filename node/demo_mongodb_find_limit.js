var url = "mongodb://localhost:27017/";
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbase = db.db("mydb"); //here
    dbase.collection("customers").find({}).limit(5).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
}); 