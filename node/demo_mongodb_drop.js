var url = "mongodb://localhost:27017/";
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbase = db.db("mydb"); //here
    var myquery ={address: /^O/};
    dbase.collection("customers").drop(function(err, delOk) {
        if (err) throw err;
        if(delOk)console.log("Table dropped");
        db.close();
    });
}); 