console.log(process.pid);
var cp= require('child_process');

var progs = {
    list:'ls',
    copy:'cp',
    folder:'mkdir'
};

var child = cp.spawn(progs.list);
