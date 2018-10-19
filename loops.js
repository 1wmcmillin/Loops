// For-loop functions

function positiveIntSum(limit){
    let sum = 0;
    for(let i = 1; i <= limit; i++){
        sum = sum + i;
    }
    return sum;

}


function additionPatternSum(start, diff, limit){
    let sum = start
    for(let k=0; k<limit; i++){
        sum = sum + diff*k;
    }
        return sum;
}




// While-loop function

function multiplicationPatternSum(start, factor, max){
    let sum = start;
    let k=1;
    while(k<=max){
        sum = sum+ factor*k;
        k = factor*k;
    }
    return sum;

}





//Later copy paste the checking code below here.
console.log(multiplicationPatternSum(4,3,50000));