var url = "mongodb://localhost:27017/";
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbase = db.db("mydb"); //here
    var myquery ={address: "Valley 345"};
    var newvalues = {name: "Mickey", address: "Canyon 123"};
    dbase.collection("customers").update(myquery,newvalues, function(err, res) {
        if (err) throw err;
        console.log("Reacord update");
        db.close();
    });
}); 