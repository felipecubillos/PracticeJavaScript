let countLimit = 7;
let theSymbol = "#";
let printSymbol = theSymbol 
for (let index = 0; index < countLimit; index++) {

    console.log(printSymbol)
    printSymbol += theSymbol ;
}

// book solution

for (let line = "$"; line.length < 8; line += "$")
  console.log(line);

/*FizzBuzz
Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. 
For numbers divisible by 3, print "Fizz" instead of the number, 
and for numbers divisible by 5 (and not 3), print "Buzz" instead.
When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5
 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
*/

for (let flag=1; flag <=100; flag ++){
    
    if (flag%5==0 && flag%3==0){
        console.log("FizzBuzz "+flag)
    }
    else if (flag%3==0){
        console.log("Fizz "+flag);
    }else if (flag%5==0 ) {
        console.log("Buzz "+flag)  
    } else
    console.log(flag) 
        ion
}




