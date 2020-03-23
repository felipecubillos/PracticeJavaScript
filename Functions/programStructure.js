console.log("storage a value in a variable")
let sum = 50 + 30;
console.log(sum)
console.log("you can change the value of that variable")
sum = 60;
console.log(sum);
console.log("you also can create with var for variable and const for constant");
var name = "felipe";
const age = 20;
console.log("my name is: " + name + " and i'm " + age + " years old");

console.log("let`s talk about loop... first one is while");
let number = 0;
while (number <= 12) {
    console.log(number);
    number += 2;
}

console.log("the second one is do while... that repear until the condition works");

let yourName;
do {
    yourName = "andres"//prompt("Who are you?"); 
} while (!yourName);
console.log(yourName);

console.log("the last one is for loop");
for (let number = 0; number <= 12; number = number + 2) {
    console.log(number);
}

console.log("beak the loop");
for (let current = 20; ; current = current + 1) {
    if (current % 7 == 0) {
        console.log(current);
        break;
    }
}