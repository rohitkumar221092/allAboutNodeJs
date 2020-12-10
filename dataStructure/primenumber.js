let i = 2;
let primeNumbers = [];

while(primeNumbers.length<100){
    while(i){
        if(i==2) primeNumbers.push(i);
        else{
          for (let index = 2; index < i; index++) {
            if( i % index == 0){
                // console.log('Not a Prime');
                break;
            }
            else if(index == i - 1){
                primeNumbers.push(i);
            }
    
            };  
        }

        if(primeNumbers.length == 100) i = false;
        else i = i+1;
    }
}

console.log(primeNumbers.join(","))

// for (let index = 2; index < numberToCheck; index++) {
//     if( numberToCheck % index == 0){
//         console.log('Not a Prime');
//         break;
//     }
//     else if(index == numberToCheck - 1){
//         console.log('Prime Number')
//     }
    
// };

