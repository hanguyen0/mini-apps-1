const MongoClient = require('mongodb').MongoClient;

const connection = MongoClient.connect('mongodb://localhost:27017', (err, db) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Connected");
        // db.collection('user').find().toArray((err, result) => {
        //     if (err) {
        //         console.log(err);
        //     } else {
        //         console.log(result);
        //     }
        // });
    }
});

