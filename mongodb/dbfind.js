let MongoClient = require('mongodb').MongoClient;

let dbUrl = 'mongodb://127.0.0.1:27017/local';

MongoClient.connect(dbUrl, (err, db)=>{
if(err){
    console.log('db err');
}
else{
    console.log('db conn');
    db.collection('users').find().toArray((err, res)=>{
        console.log(res);
    });
    db.close();
}

})