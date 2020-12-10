function Developer(name){
    this.name = name;
    this.type = 'Developer';
}
function Tester(name){
    this.name = name;
    this.type = 'Tester';
}

// class EmployeeFactory{
//     constructor(name,type){
//         this.name = name;
//         this.type = type;
//     }
//     getName(){
//         return `Welcome ${this.type} ${this.name}`
//     }
// };


function EmployeeFactory(){
    this.create = (name, type) => {
        switch (type){
            case 1:
                return new Developer(name);
                break;
            case 2:
                return new Tester(name);
                break;

        }
    }   
}

module.exports = EmployeeFactory;

