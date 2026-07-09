const name = 'Ammu';
let interview = 7;
interview = interview + 1;
console.log(name);
console.log(interview);

//status code excercise
let statuscode = 300;
if (statuscode === 200)
{
    console.log('PASS');
}
else if (statuscode === 404)
{
    console.log('Fail');
}
else console.log('Unknown status code: ' + statuscode);

console.log('Status:', statuscode);    // comma version this works only in console.log and it adds a space after the comma
console.log('Status: ' + statuscode);  // glue version can be used in any string and it does not add a space after the plus sign

//Ex 2 — Login gate. Make const username = "arun"; 
// and const password = "test123";.
//  ONE if/else using &&: both correct → "Login success", otherwise → "Login denied". 
// Then break the password and confirm it denies.
const username = 'arun';
const password = 'test123';
let inputUsername = 'oops';
let inputPassword = 'test123';
if (inputUsername === username && inputPassword === password){
    console.log("Login Success", inputUsername);
}else{
    console.log("Login Denied");
}

//ex 3 Block 4 — Boundary test (15 min). let age = 18;
//  → 18 or older prints "Can register", under prints "Cannot register".
//  Run with 17, 18, and 19. Answer in a comment: did you need > or >=, 
// and what goes wrong at exactly 18 if you pick the wrong one?
let age = 19;
if(age >= 18){
    console.log("Can register");
} else{
    console.log("Cannot register");
}

//ex 4 Ex 4 — Predict first. Before running, write your prediction as a // comment:
let x = 10;
if (x = 5) {
    console.log("A");
} else {
    console.log("B");
}
console.log(x);
let y = 10;
if (y == 5) {
    console.log("A");
} else {
    console.log("B");
}
console.log(y);

//ex 5 From memory: a score variable; High prints above 80, Medium from 50 to 80, Low below 50
//Three runs — 90, 65, 30 — three pasted outputs
let score = 90 ;
if(score>80){
    console.log('High');
} else if (score >= 50 &&  score<=80){
    console.log('Medium');
}else if (score < 50){
    console.log('Low');
}