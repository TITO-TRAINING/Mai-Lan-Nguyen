/* Regexp Golf
Code golf is a term used for the game of trying to express a particular program in as few characters as possible. Similarly, regexp golf is the practice of
writing as tiny a regular expression as possible to match a given pattern, and
only that pattern.
For each of the following items, write a regular expression to test
whether any of the given substrings occur in a string. The regular expression should match only strings containing one of the substrings described.
Do not worry about word boundaries unless explicitly mentioned. When
your expression works, see whether you can make it any smaller.
1. car and cat
2. pop and prop
3. ferret, ferry, and ferrari
4. Any word ending in ious
5. A whitespace character followed by a period, comma, colon, or
semicolon
6. A word longer than six letters
7. A word without the letter e (or E)
Refer to the table in the chapter summary for help. Test each solution
with a few test strings */

// 1.
// /c[ar]/
console.log(/c[ar]/.test("cat")); //true
console.log(/c[ar]/.test("car")); //true
console.log(/c[ar]/.test("hi")); //false
// 2.
// /pr?op/
console.log(/pr?op/.test("pop")); //true
console.log(/pr?op/.test("prop")); //true
console.log(/pr?op/.test("hi")); //false

// 3.
// /ferr(et|y|ari)/
console.log(/ferr(et|y|ari)/.test("ferret")); //true
console.log(/ferr(et|y|ari)/.test("ferry")); //true
console.log(/ferr(et|y|ari)/.test("ferrari")); //true
console.log(/ferr(et|y|ari)/.test("lannn")); //false

// 4.
// /\b\w*ious\b/
console.log(/\b\w*ious\b/.test("lious")); //true
console.log(/\b\w*ious\b/.test("ferry")); //false
// 5.
// /\s[.,:;]/
// 6.
// /\b\w{7,}\b/
console.log(/\b\w{7,}\b/.test("testdodailonhon6")); //true
console.log(/\b\w{7,}\b/.test("ferry")); //false
// 7.
// /\b(?!\w*e\w*)\w+\b/
console.log(/\b(?!\w*e\w*)\w+\b/.test("hi")); //true
console.log(/\b(?!\w*e\w*)\w+\b/.test("hello")); //false
