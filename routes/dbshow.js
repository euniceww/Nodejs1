var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

/* GET db listing. */
router.get('/', function(req, res, next) {
	// Connection db URL
	const url = 'mongodb://localhost:27017';

	// Database Name
	const dbName = 'myproject';
	
	//var articles = ['One', 'Two', 'Three'];

	// Use connect method to connect to the server
	MongoClient.connect(url,{useNewUrlParser: true}, function(err, client) {
		assert.equal(null, err);
		console.log("Connected successfully to server");

		const db = client.db(dbName);

		findDocuments(db, function(docs){
			//articles = docs;
			//console.log(articles);
			res.render('pages/dbshow', {docs:docs}); //用jade渲染页面
			});
          
		client.close();
	});
	
	const findDocuments = function(db, callback) {
		// Get the documents collection
		const collection = db.collection('documents');
		// Find some documents
		collection.find({}).toArray(function(err, docs) {
		assert.equal(err, null);
		console.log("Found the following records");
		console.log(docs);
		callback(docs);
  });
}
    //res.render('pages/dbshow', articles);
	//res.end();
});

module.exports = router;