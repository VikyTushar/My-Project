var url = "mongodb://localhost:27017/";
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbase = db.db("mydb"); //here
    var myData =[
        {_id:1, name: 'TonyStark'},
        {_id:2, name: 'PeterIngland'}
        
      ];
    dbase.collection("customers").insertMany(myData, function(err, res) {
        if (err) throw err;
        console.log("Data inserted, Total No:",res.insertedCount);
        db.close();
    });
});