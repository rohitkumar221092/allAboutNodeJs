const { json } = require("body-parser");

let count = 0;
// function bubbleSort(array){
//     if(array.length<1){
//         return [];        
//     }
//     else{
//         for (let i = 0; i < array.length; i++) {
//             for (let j = i+1; j < array.length; j++) {
//                 count = count + 1;
//                 if(array[i]>array[j]){
//                     let temp = array[i];
//                     array[i] = array [j];
//                     array[j] = temp;
//                 }
                
//             }
            
//         }
//     }
//     return array;

// }

function bubbleSort(arr){
    var len = arr.length;
    for (var i = len-1; i>=0; i--){
      for(var j = 1; j<=i; j++){
        count = count + 1;
        if(arr[j-1]>arr[j]){
            var temp = arr[j-1];
            arr[j-1] = arr[j];
            arr[j] = temp;
         }
      }
    }
    return arr;
 }

//console.log(bubbleSort([9,8,7,6,5,4,3,2,1,0]));
console.log(bubbleSort([2,4,5,2,7,8,4,5,1,3]));
console.log(count);