// function binarySearch(number, array){

//     let start= 0;
//     let end = array.length - 1;

//     while(start<end){
//         let middle = Math.floor((start + end) / 2);
//         if(number == array[middle]){
//             return middle
//         }
//         else if(number < array[middle]){
//             end = middle - 1;
//         }
//         else start = middle + 1;
//     }
//     return -1

// }

function binarySearch(number, arrayObj){

    //let start = 0;
    //let end = array.length - 1;
    
    let start  = 0;
    let end = arrayObj.length -1 ;
  
  while(start<end){
    let middle = Math.floor((start+end)/2);
    //console.log(middle);
    //  console.log(arrayObj[middle]);
    if(arrayObj[middle] == number) return middle;
    else if(arrayObj[middle] > number){
      end = middle -1 ;
       //console.log(middle);
    }
    else start = middle + 1;
    
  }
  
  return -1;

    // while(start<end){
    //     let middle = Math.floor((start+end)/2);
    //     if(array[middle] == number) return middle;
    //     else if(array[middle]<number){
    //         start = middle + 1;
    //     }
    //     else {
    //         end = middle - 1;
    //     }
    // }
    // return -1;

}

console.log(binarySearch(9, [1,2,3,4,5,6,7,8,9,10]));