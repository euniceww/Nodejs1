function nextPage()
{
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
			document.getElementById("myTable").innerHTML=docs;
			});
          
		client.close();
	});
	
	const findDocuments = function(db, callback) {
		// Get the documents collection
		const collection = db.collection('documents');
		// Find some documents
		collection.find({}).limit(2).skip(2).toArray(function(err, docs) {
		assert.equal(err, null);
		console.log("Found the following records");
		console.log(docs);
		callback(docs);
  });
	
	
}
