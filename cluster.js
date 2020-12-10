
console.log(process.env.NODE_ENV);

let cluster = require('cluster');
let http = require('http');
let os = require('os');

let numCPS = os.cpus().length;

if(cluster.isMaster){
    for(let i = 0;i< numCPS; i++){
        cluster.fork();
    }

    cluster.on('online', (worker) => {
        console.log('worker '+ worker.process.pid + ' is online')
    })
    cluster.on('exit', (worker, code, signal) => {
        console.log('worker '+ worker.process.pid + ' is end with code '+ code + ' and signal '+ signal);

    })

}
else{
    http.createServer(function(req, res){
        console.log('process '+process.pid);
        applyLoop = () =>{
            for (let index = 0; index < 2000; index++) {
                console.log(process.pid + ' ----- ' + index);
            }  
        };
        applyLoop();
        res.writeHead(200);
        res.end('process '+process.pid + ' end' );
    }).listen(3030);
}