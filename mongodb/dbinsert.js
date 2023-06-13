let MongoClient = require('mongodb').MongoClient;

let dbUrl = 'mongodb://127.0.0.1:27017/local';

MongoClient.connect(dbUrl, (err, db)=>{
if(err){
    console.log('db err');
}
else{
    
    let user01 ={id:'user01', name:'사용자01', password:'1234'}
    db.collection('users').insertOne(user01);
    console.log('입완');
    db.close();
}

})