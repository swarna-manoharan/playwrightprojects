let frameworks = ['Selenium', 'Cypress', 'Playwright'];
console.log(frameworks[0]);
console.log(frameworks[frameworks.length - 1]);
console.log(frameworks.length);
console.log(frameworks.includes('Playwright'));

//for ...of loop
let scores = [80, 92, 45];

for (const score of scores) {
    console.log(score);
}
// prints: 80, then 92, then 45

let tests = ['login', 'logout'];
tests.push('checkout');
for (const test of tests) {
    console.log('Running: ' + test);
}

//
let results = [85, 40, 90, 30, 70];
let passed = results.filter(score => score >= 50);
console.log(passed);

//Ex 5 exit test: array of 5 numbers, 
// filter for evens (n => n % 2 === 0), 
// printed, from blank memory, plus peeked-or-didn't.

let a = [ 1, 2, 3, 4, 5];
let evens = a.filter(n => n % 2 === 0);
console.log(evens);