//previous lesson preview
let day = 'Monday';
let firstDay = 'Monday ';
//console.log (day === firstDay.trim()); 

//
function double(n) {
    return n * 2;
}
console.log(double(5));
console.log(double(10));
console.log(double(0));

//Ex1 
function loginCheck(user, pass = 'guest') {
    return user === 'admin' && pass === 'secret';
}
console.log(loginCheck('admin', 'secret'));
console.log(loginCheck('admin'));

//Ex 2 — return vs log, the proof. 
// Write two functions: addLog(a, b) that console.logs a + b, 
// and addReturn(a, b) that returns a + b. 
// Then run exactly this and predict each line first in a comment:
function addLog(a, b) {
    console.log(a + b);
}
function addReturn(a, b) {
    return a + b;
}
let r1 = addLog(2, 3);
let r2 = addReturn(2, 3);
console.log(r1);
console.log(r2);

//Ex 3 — a real helper. 
// Write isValidStatus(code) that returns true if code is 200, 
// else false. Remember yesterday's lesson: === already produces a boolean, so the body is one line — no if/else needed. 
// Think about what code === 200 gives you. Call it with 200 and 404, print both. 
// Predict first.
function isValidStatus(code) {
    return code === 200;
}
let verifycode = isValidStatus(200);
console.log(verifycode);
let verifycode2 = isValidStatus(404);
console.log(verifycode2);

//Ex 4 — default parameter. 
// Write greet(name, greeting = 'Hello') that returns `${greeting}, ${name}`. 
// Call greet('Ammu') and greet('Ammu', 'Welcome'). 
// Predict both outputs.
function greet(name, greeting = 'Hello') {
    return (`${greeting}, ${name}`);
}
console.log(greet('Ammu'));
console.log(greet('Ammu', 'Welcome'));

//Ex 5 — exit test, blank file,
//  from memory: isEven(n) returning true/false for whether n is even 
// (use the one-line boolean trick you just nailed: n % 2 === 0), called with 4 and 7,
//  both printed.
//  Plus the peeked-or-didn't declaration.
function isEven(n) {
    return n % 2 === 0;
}
console.log(isEven(4));
console.log(isEven(7));