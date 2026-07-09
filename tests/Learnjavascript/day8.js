//make an array of 3 objects each with name and age, 
// filter to keep only those with age >= 18, print. Run it (full node day8.js
let qualification = [
    {name:'Ammu', age: 20},
    {name:'Kumar', age: 15},
    {name:'Ravi', age: 25}
]
let correctage = qualification.filter(a => a.age >= 18);
console.log(correctage);

//ex1 
//function brew() {
    //return new Promise(resolve => {
        //setTimeout(() => resolve('coffee ready'), 2000);   // finishes after 2 seconds
    //});
//}

//async function order() {
    //console.log('1. ordering');
    //let result = await brew();
   // console.log('2. ' + result);
//}

//order();
//console.log('3. doing other things');

//ex2-see the bug forgetting await 
//function brew() {
    //return new Promise(resolve => {
        ////setTimeout(() => resolve('coffee ready'), 2000);
    //});
//}
//async function order() {
    //console.log('1. ordering');
    //let result = await brew();              // 
    //console.log('2. result is: ' + result);   // predict: what prints here?
//}
//order();

//ex 4
function fetchData() {
    return new Promise(resolve => {
        setTimeout(() => resolve('the data'), 1000);
    });
}

async function callData() {
    console.log('starting');
    let data = await fetchData();
    console.log('got: ' + data);
}
callData();