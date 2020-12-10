function swap(str, i ,j){
    let temparray = str.split('');
    let temp = temparray[i];
    temparray[i] = temparray[j];
    temparray[j] = temp;
    return temparray.join('');
}

let funGetCalled = 0;

function findAllCombination(str,x,y){
    
    if(x==y){
        console.log(str);
    }
    for (let index = x; index <= y; index++) {
        str = swap(str,x,index);
        //console.log(str);
        funGetCalled = funGetCalled+1;
        findAllCombination(str, x+1, y);
        //str = swap(str,x, index);
        //console.log(str);
    }

}

findAllCombination('abc',0,2);
console.log(funGetCalled);