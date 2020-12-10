const fs = require('fs');

fs.readFile('main.js', () => {
  //console.log(process);
  setTimeout(() => {
    console.log('timeout');
  });
  setImmediate(() => {
    console.log('immediate');
  });
  process.nextTick(()=>{
    console.log('tick');
  })
});

setTimeout(() => {
  console.log('outside_timeout');
});
setImmediate(() => {
  console.log('outside_immediate');
});
process.nextTick(()=>{
  console.log('outside_tick');
})

for (let index = 0; index < 10000; index++) {
  
  console.log(index);
}