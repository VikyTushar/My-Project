var url = "mongodb://localhost:27017/";
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbase = db.db("mydb"); //here
    var myquery ={address :'Mountain 21'};
    dbase.collection("customers").deleteOne(myquery,function(err, res) {
        if (err) throw err;
        console.log("Document deleted");
        db.close();
    });
}); 