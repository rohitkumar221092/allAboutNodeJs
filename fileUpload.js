var express = require('express');
var app = express();
var router  = express.Router();
var { fork } = require('child_process');
var { spawn } = require('child_process');



app.get('/', (req,res) => {
    res.send('Welcom to api at 4444')
})

router.get('/api', (req,res)=> {
    var forkprocess = fork('compute.js');
    //var spawnprocess = spawn('TIME');

    forkprocess.send('start');
    forkprocess.on('message', (message)=> {
        res.send(message);
    })
    forkprocess.on('error', (error)=> {
        console.log(error)
    })
})

app.use('/user',router);

app.listen(4444,function(){
    console.log('Live on 4444');
});