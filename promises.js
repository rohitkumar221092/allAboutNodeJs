global.newvar = "example";

var Promise1 = new Promise((resolve, reject)=> {
    setTimeout(() => {
        resolve({data:['a','b']})
    },2000)
})

var Promise2 = new Promise((resolve, reject)=> {
    setTimeout(() => {
        reject(1)
    },3000)
})

var Promise3 = new Promise((resolve, reject)=> {
    setTimeout(() => {
        resolve('resolve')
    },4000)
})


Promise.all([Promise1,Promise2.catch((e)=> { console.log(e) }),Promise3])
.then((result) => {

    console.log(result)
})
.catch((err) => {
    console.log(err)
});

console.log(newvar);
console.log(global.newvar);
console.log(global);

