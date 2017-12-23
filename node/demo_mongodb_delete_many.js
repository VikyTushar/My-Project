var url = "mongodb://localhost:27017/";
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbase = db.db("mydb"); //here
    var myquery ={address: /^O/};
    dbase.collection("customers").deleteMany(myquery,function(err, res) {
        if (err) throw err;
        console.log(res.result.n + "Document(s) deleted");
        db.close();
    });
}); 