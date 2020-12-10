// var designPattern = require('./singleton');

// const s = new designPattern();
// const s1 = new designPattern();

// console.log(s.get('version'));
// console.log(s1.get('version'));


/////////////////////////////////////////////////////

var empFact = require('./factoryPattern');
var empployeeFactory = new empFact();
var empployeeFactory1 = empFact();
const employess= [] ;

employess.push(empployeeFactory.create('rohit',1));
employess.push(empployeeFactory.create('kumar',2));
employess.push(empployeeFactory1.create('kumar',2));

function print(){
    console.log(`i am ${this.name} and i am a ${this.type}`)
}

employess.forEach((say) => {
    print.call(say);
})