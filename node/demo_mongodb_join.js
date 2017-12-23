var url = "mongodb://127.0.0.1:27017";
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("connected to the mongoDB !");
    var dbase = db.db("mydb"); //here
    dbase.collection('orders').aggregate([
        { $lookup:
           {
             from: 'products',
             localField: 'product_id',
             foreignField: '_id',
             as: 'orderdetails'
           }
         }],
         function(err, res) {
          if(err){
             throw err;
          }
          else{
            console.log('res:   +++');
            console.log(res);
            db.close();
        }
      });
    }); 