let age = 18;
if ( age >=18) {
    console.log('Adult');
} else {
    console.log('Minor');
}

// Ex 1 — Counter. A for loop printing Test case 1 through Test case 10. 
// Exactly ten lines, starting at 1, ending at 10 — both boundaries yours to get right.
//  One run, output pasted.
for (let i = 1; i<=10; i++){
    console.log('Test case ' , i);

}

//Ex 2 — Even numbers. Loop 1 to 20, print only even numbers. 
// You have two tools that can do this — % from Day 1 (x % 2 === 0 means even) combined 
// with either an if inside the loop or continue. 
// Pick one, and write a one-line comment saying why you picked it.

for (let i = 1; i<=20; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}

//Ex 3 — Retry simulator. A while loop: start attempts at 0,
//  loop while attempts is under 3, each run print Retrying... attempt N, 
// after the loop ends print Test failed after 3 attempts. 
// This is a real automation pattern — you'll write its grown-up version in Playwright.
let attempt = 0;
while (attempt<3)
{
    console.log('Retrying... attempt ' + attempt);
    attempt++;
}
console.log('Test failed after 3 attempts');


//Ex 4 — FizzBuzz. The famous one. Loop 1 to 15 (full version is 100; we verify on 15 where output is checkable by eye): 
// multiples of 3 print Fizz, multiples of 5 print Buzz, multiples of both print FizzBuzz, everything else prints the number. 
// One hint, and it's the entire puzzle: the order of your conditions matters. Think about which check must come first and why — 15 is divisible by both. 
// Expected output for self-verification: 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz.
for (let i = 1; i<=15 ; i++){
    if ( i % 3 === 0 && i % 5 === 0){
        console.log('FizzBuzz');
    } else if ( i % 3 === 0){
        console.log('Fizz');
    } else if ( i % 5 === 0){
        console.log('Buzz');
    } else {
        console.log(i);
    }


}


//Ex 5 — Exit test (after 1–4 are evidenced): 
// new file, from memory — loop 1 to 50, print only numbers divisible by 7. 
// Plus the declaration.
   for (let i = 1 ; i<=50 ; i ++){
    if(i % 7 === 0)
    {
        console.log(i);
    }
   }