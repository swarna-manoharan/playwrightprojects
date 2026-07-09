//write an async function that awaits a Promise and prints the result. 
// You can reuse the fetchData helper pattern (the new Promise + setTimeout plumbing). 
//function fetchData() {
    //return new Promise(resolve => {
        //setTimeout(() => resolve('the data'), 1000);
    //});
//}
//async function recallData() {
    //console.log('starting');
    //let data = await fetchData();
    //console.log('got: ' + data);
//}
//recallData();

//Ex 1 — Object destructuring. Make let test = { name: 'login', status: 'pass', duration: 250 }. 
// Use destructuring to pull name and status into their own variables in one line. 
// Print both. Predict the output first.
let test = { name: 'login', status: 'pass', duration: 250 };
 let {name , status } = test;
console.log(name);
console.log(status);

//
function runTest({ page }) {
    console.log('running on: ' + page);
}
runTest({ page: 'chrome', browser: 'firefox' });   // predict what prints
runTest({ browser: 'firefox', page: 'chrome' });

//Ex 3 — Array destructuring. Make let scores = [90, 85, 70].
//  Destructure the first two into top and second. Print both.
let scores = [90, 85, 70];
let [top, second] = scores;
console.log(top);
console.log(second);

//Ex 4 — try/catch. Write a try/catch where the try block deliberately calls something that doesn't exist (like undefinedFunction()), 
// and the catch prints 'Caught: ' + error.message. Then add a console.log('still running')
//  after the whole thing. Predict: does 'still running' print even though the try block errored?
try {
    let dresCode = undefinedFunction();
        console.log('this line will not run');
    }
    catch (error) {
    console.log('Caught: ' + error.message);
    }
    console.log('still running');

//Ex 5 — exit test, blank file, from memory: make an object with three properties,
//  destructure two of them in one line, print both. 
// Plus peeked-or-didn't.
let marriage = { style: 'traditional', guest: 250, food: 'veg' };
let {style, guest} = marriage;
console.log(style);
console.log(guest);