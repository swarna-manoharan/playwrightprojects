//make an array of three names, 
// use .filter() to keep only names longer than 4 characters (name.length > 4),
//  print the result. 
// This checks yesterday's filter + the string .length from Day 4. 
// Run it, don't post unless you stall.

let flyingNames = ['one' , 'twotwo' , 'three'];
let filteredNames = flyingNames.filter(n => n.length >= 4);
console.log(filteredNames);

//EX1 Ex 1 — Build and read. Make an object user with three properties: name (your name), 
// role ('QA Engineer'), 
// experience (7). 
// Print each property using dot notation. 
// Three lines.

let user = {
    name : 'Ammu',
    role : 'QA Engineer',
    experience : 7

}
console.log(user.name);
console.log(user.role);
console.log(user.experience);

//Ex 2 — Change and add. Take your user object. Change role to 'Senior QA Engineer'. 
// Add a new property location ('Canada').
//  Then print the whole object 
user.role = 'Senior QA Engineer';
user.location = 'Canada';
console.log(user);

//Array of objects. Make this arra
let tests = [
    { name: 'login', status: 'pass' },
    { name: 'logout', status: 'fail' },
    { name: 'payment', status: 'pass' }
];
console.log(tests[1].name);
console.log(tests[2].status);

//Ex 4 — filter on objects (the real-world task). Using the tests array from Ex 3, 
// use .filter() to get only the tests where status === 'pass'.
//  Print the result. 
// One-sentence prose rep: what does this give you, and why is it exactly what you'd do with a real test report?
//  (This is the interview-classic task — and the prose is the rep that matters.)
let finalOutput = tests.filter(f => f.status === 'pass');
console.log(finalOutput);

//ex5 - Ex 5 — exit test, blank file, from memory: make an array of 3 objects, 
// each with a product and a price. 
// Use .filter() to keep only products under a price you choose.
//  Print the result. Plus peeked-or-didn't.
let product = [
    {dress:'shirt', price: 20},
    {dress:'pants', price: 30},
    {dress:'shoes', price: 50}

];
    let finaleProduct = product.filter(p => p.price < 40);
    console.log(finaleProduct);