// For-loop functions

function positiveIntSum(limit){
let sum = 0;
let n = 100;
for(let i = 1; i <= n; i++){
    sum = sum + i;
    return sum
}


}


function additionPatternSum(start, diff, limit){
    let sum = start
    for(let k=0; k<limit; i++)
        sum = sum + diff*k;
}




// While-loop function

function multiplicationPatternSum(start, factor, max){
    let sum = start;
    let k=1;
    while(k<=max){
        sum = sum+ factor*k;
        k = factor*k;
    }


}





//Later copy paste the checking code below here.
//Declarion of checking code
function check(){
    let smallLimit = 208;
    let mediumLimit = 1024;
    let largeLimit = 600000;//six hundred thousand

    let test1 = 21736 === positiveIntSum(smallLimit);
    let test2 = 180000300000 === positiveIntSum(mediumLimit);
    let test3 = 1770 === additionPatternSum(60,3,20);
    let test4 = 8375 === additionPatternSum(-200, 15, 50);
    let test5 = 12345678 === multiplicationPatternSum(1,3,largeLimit);
    let test6 = 12345678 === multiplicationPatternSum(5,2,largeLimit);
    let test7 = 12345678 === multiplicationPatternSum(2,-7,largeLimit);

    console.log(`The function positiveIntSum works properly: ${test1 && test2}`);
    console.log(`The function additionPatternSum works properly: ${test3 && test4}`);
    console.log(`The function positiveIntSum works properly: ${test5 && test6 && test7}`);
    console.log(`-------------------------------------------------------------`);
    console.log(`
    Common mistakes to check
    1. Did you spell everything correctly?
    2. Does it actually return an answer?
    3. Were your original notes correct?
    `);
}
//Actually running the checking code.
check();