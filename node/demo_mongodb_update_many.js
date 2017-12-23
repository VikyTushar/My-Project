var url = "mongodb://localhost:27017/";
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbase = db.db("mydb"); //here
    var myquery ={address: /^S/};
    var newvalues = {$set: {name: "Minnie"}};
    dbase.collection("customers").updateMany(myquery,newvalues, function(err, res) {
        if (err) throw err;
        console.log(res.result.nModified+ "Reacord(s) updated");
        db.close();
    });
}); 