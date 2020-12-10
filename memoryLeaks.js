const numeral = require('numeral');

const arr = [];

let interval = setTimeout(() => {
    const {rss, heapTotal, heapUsed} = process.memoryUsage();
    console.log('rss', numeral(rss).format('0.0 ib'), 'heapTotal', numeral(heapTotal).format('0.0 ib'),'heapUsed',numeral(heapUsed).format('0.0 ib'));
}, 5000);

// for (let index = 0; index >= 0; index++) {
//     const {rss, heapTotal, heapUsed} = process.memoryUsage();
//     arr.push(index);
//     console.log('rss', numeral(rss).format('0.0 ib'), 'heapTotal', numeral(heapTotal).format('0.0 ib'),'heapUsed',numeral(heapUsed).format('0.0 ib'));    
// }

console.log(interval);
console.log('============================');


