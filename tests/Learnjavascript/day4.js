//previous lesson check
for (let i = 1; i <= 5; i++) {
    if (i === 2) { continue; }
    if (i === 4) { break; }
    console.log(i);
}

//Ex 1 — Template literal basics. Make let tester = 'Ammu' and let bugs = 3.
//  Print one sentence using a template literal (backticks): "Ammu found 3 bugs today.""
//Then add a second line that prints "Tomorrow's target: 4" using ${bugs + 1} — math inside the braces.
let tester = 'Ammu';
let bugs = 3;
console.log(`${tester} found ${bugs} bugs today.`);
console.log(`Tomorrow's target: ${bugs + 1}`);

//Ex 2 — The immutability proof. Make let messy = '  PASS  '. 
// First print messy.trim() directly. 
// Then on the next line print messy itself. 
// Before running, predict in a comment: will the second print show trimmed or still-spaced? Run it, see if your prediction held.
//  This is the rep that teaches immutability — predict first.
let messy = '  PASS  ';
// PREDICTION (write as a comment): after the next two lines, will line 2 show trimmed or still-spaced?
console.log(messy.trim());
let cleaned = messy.trim();
console.log(cleaned);
console.log(messy);

//Ex 3 — String inspection. Make let pageTitle = 'Login - MyApp'.
//  Print: its length, whether it includes the word 'Login' (true/false), 
// and the whole thing in uppercase. Three lines.
let pageTitle = 'Login - MyApp';
console.log(pageTitle.length);
if(pageTitle.includes('Login')){
    console.log(true);
} else {    console.log(false);
}
console.log(pageTitle.toUpperCase());


//Ex 4 — The whitespace trap (your QA instinct applies). 
// Make let actual = 'Submit ' (trailing space) and let expected = 'Submit'. 
// Print whether actual === expected (it'll be false — the bug). 
// Then print whether actual.trim() === expected (true — the fix). 
// One-sentence comment: why does the first comparison fail, 
// and why would this bug be hard to spot in a real test?
let actual = 'Submit ';
let expected = 'Submit';
if (actual === expected){
    console.log ('There is a bug');
}else if (actual.trim() === expected){
    console.log ('The bug is fixed');
}

//same in boolean values
let Actual = 'Submit ';
let Expected = 'Submit';
console.log(Actual === Expected); //false
console.log(Actual.trim() === Expected); //true

//Ex 5 — Exit test (after 1–4 evidenced): blank file,
//  from memory — make a variable holding your full name with extra spaces like '  Ammu Kumar  ', 
// then print it trimmed, in uppercase, 
// and print its length before trimming. Plus the declaration
let fullName = ' Ammu Kumar ';
console.log(fullName.length);
let revisedFullName = fullName.trim();
//console.log(revisedFullName = fullName.trim()); //this is called chaining where we can use the output 
// of one method as the input of another method but it is not recommended 
// to do it in one line because it is not readable and it is not 
// easy to debug if there is an error in the code. It is better to do it in 
// two lines where we can see the output of the first method and then use it 
// as the input of the second method.
console.log(revisedFullName.toUpperCase());
console.log(revisedFullName.length);


