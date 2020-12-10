let cluster = require('cluster');


//const enviroment = require('../ENVIROMENTS/'+process.env.NODE_ENV);
const enviroment = require('../ENVIROMENTS/development');
console.log(enviroment);

if(cluster.isMaster){
    cluster.fork();
}
else{
    let  express = require('express');
    let app = express();

    // function doWork(duration){
    //     const start = Date.now();
    //     while(Date.now() - start < duration){
    //     }
    
    // }
    
    app.get('/', (req,res,next) => {
        //doWork(5000);
        res.send('welcome to your app');
    });

    app.get('/fast', (req,res,next) => {
        res.send('Fast Loaded');
    })
    
    app.listen(3000);
}

