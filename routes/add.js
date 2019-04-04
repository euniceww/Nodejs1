var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

var message;
router.post('/',function(req, res, next){
    //var _html = "[Post]" +
    //           "<p><strong>receive message</strong></p>" ;
    message = req.body;            
    console.log(message);            
    res.send(JSON.stringify({ status:"success" }));//给客户端返回一个json格式的数据
	
	
	// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'myproject';

// Use connect method to connect to the server
MongoClient.connect(url,{useNewUrlParser: true}, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  insertDocuments(db, function() {});

  //findDocuments(db, function(){});
          
client.close();
});

const insertDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('documents');
  // Insert some documents
  collection.insertOne( 
    message
  , function(err, result) {
    //assert.equal(err, null);
    //assert.equal(3, result.result.n);
    //assert.equal(1, result.ops.length);
    console.log("Inserted  documents into the collection");
    callback(result);
  });
}

});





module.exports = router;