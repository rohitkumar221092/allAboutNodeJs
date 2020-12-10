var async = require('async');

async.waterfall([
    function(callback) {
        callback(null, 'Task 1', 'Task 2');
      },
      function(arg1, arg2, callback) {
        // arg1 now equals 'Task 1' and arg2 now equals 'Task 2'
        // let arg3 = arg1 + ' and ' + arg2;
        callback(null, arg1, arg2);
      },
      function(arg1,arg2, callback) {
        // arg1 now equals 'Task1 and Task2'
        arg1 += ' completed';
        callback(null, arg1, arg2);
      }
],function(err,results,result2){
    console.log(err);
    console.log(results);
})