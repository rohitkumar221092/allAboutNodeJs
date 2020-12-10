// let count = 0;
// function quickSort(data){
//     if(data.length<1){
//         return [];        
//     }

//     let left = []; // store values that are lesser than pivot 
//     let right = []; // store values that are greater than pivot 
//     let pivot = data[0];

//     for (let index = 1; index < data.length; index++) {
//         count = count + 1;
//         if(data[index]<pivot) left.push(data[index])
//         else right.push(data[index])
        
//     }

//     return [].concat(quickSort(left),pivot,quickSort(right));
//     // return [].concat(quickSort(right),pivot,quickSort(left));


// }



function quickSort(array){
    if(array.length == 0){
        return [];
    }
    let pivot = array[0];
    let left = [];
    let right = [];

    for (let index = 1; index < array.length; index++) {
        const element = array[index];
        if(element<pivot) left.push(element);
        else right.push(element);
    }
    return [].concat(quickSort(left),pivot,quickSort(right));

}

console.log(quickSort([2,4,5,2,7,8,4,5,1,3]));
console.log(count);