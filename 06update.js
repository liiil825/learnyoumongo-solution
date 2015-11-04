var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(url, function(err, db) {
  if (err) throw err;
  var collection = db.collection('users');
  collection.update({
    name: 'Tina'
  }, {
    $set: {
      age: 40
    }
  },
  function(err, data) {
    if (err) throw err;
    db.close();
  });
});


