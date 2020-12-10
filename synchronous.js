let n = 1;
let async = require('async');

 applyLoop = () =>{
     return new Promise(function(resolve,reject){
        while (n<5000){
            //console.log(n);
            n=n+1;
        };
        if(n==5000) resolve();

     })
    
};

applyLoop().then(function(){}).catch(function(){});
console.log('okayxzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz');