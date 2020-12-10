var employeeFactory = require('./design_pattern/factoryPattern');
const EmployeeFactory = require('./design_pattern/factoryPattern');

var doctor = new EmployeeFactory('ROhit','Doctor');
var physio = new EmployeeFactory('ROhit','physio');

console.log(doctor.getName());
console.log(physio.getName());

let x="es";

try {
    if(x == "") throw "is Empty";
    if(isNaN(x)) throw "not a number";
    if(x > 10) throw "too high";
    if(x < 5) throw "too low";
  }
  catch(err) {
    console.log(err);
  }
  finally{
    console.log('System Error');
  }