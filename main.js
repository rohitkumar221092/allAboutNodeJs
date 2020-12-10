console.log("main_"+process.pid);
const http = require('http');
const { fork } = require('child_process');

    const compute = fork('compute.js');
    compute.send('start');

    compute.on('message', result => {
      console.log(`Long computation result: ${result}`)
      process.kill(process.pid); 
    });

    compute.on('exit', code => {
        console.log(`Exit code is: ${code}`);
      });
      compute.on('disconnect', code => {
        console.log(`disconnect code is: ${code}`);
      });
      compute.on('error', code => {
        console.log(`error code is: ${code}`);
      });
      compute.on('close', code => {
        console.log(`close code is: ${code}`);
      });

    

// const server = http.createServer();

// server.on('request', (request, response) => {
//   if (request.url === '/compute') {
//     const compute = fork('compute.js');
//     compute.send('start');

//     compute.on('message', result => {
//       res.end(`Long computation result: ${result}`)
//     });
//   } else {
//     res.end('Route not found')
//   }
// });

// server.listen(3000);