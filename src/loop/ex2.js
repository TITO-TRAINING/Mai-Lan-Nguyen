/* FizzBuzz
Write a program that uses console.log to print all the numbers from 1 to 100,
with two exceptions. For numbers divisible by 3, print "Fizz" instead of the
number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
When you have that working, modify your program to print "FizzBuzz"
for numbers that are divisible by both 3 and 5 (and still print "Fizz" or
"Buzz" for numbers divisible by only one of those).
(This is actually an interview question that has been claimed to weed out
a significant percentage of programmer candidates. So if you solved it, your
labor market value just went up. */

// make a loop that goes from 1 to 100
for ( var num = 1; num < 101; num ++ ) {
  
    // check if the number is divisible by 3 or 5
    var checkForThree = num % 3;
    var checkForFive = num % 5;
    
    // if the number is divisible by both 3 and 5, then print FizzBuzz
    if ( (checkForThree == 0) && (checkForFive == 0) ) 
        console.log( "FizzBuzz");
    
    // if the number is divisible by 3, then print Fizz
    else if (checkForThree == 0)
      console.log( "Fizz");
    
    // if the number is divisible by 5, then print Buzz
    else if (checkForFive == 0)
      console.log( "Buzz");
    
    // otherwise just print the number
    else
      console.log( num );
  } 