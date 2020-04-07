console.log("The future says:", future());
function future() {
    return "You'll never have flying cars";
}

console.log("Function with single parameter");

const name = function (name) {
    return "Hello " + name + " !!!";
}

console.log(name("Felipe"));

console.log("***********************************");
console.log("Function withouth  parameter");

const makeNoise = function () {
    console.log("Ding Dong!!!!!!!");
}
makeNoise();

console.log("***********************************");
console.log("Function with multiple parameters");
const power = function (base, exponent) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
};

console.log(power(2, 10));

console.log("***********************************");
console.log("Declaring and calling functions");

function sayMyName(name) {
    return name;
}

console.log("Hello " + sayMyName("felipe"));

console.log("***********************************");
console.log("Other way to declare functions =>  arrow function");

const nameFunc = () => console.log("=> no parameters")

const twoNumbers = (numX, numY) => {
    return numX + numY;
}

console.log("=> " + twoNumbers(2, 6));

the

function optionalParameters(name, age = 29) {
    return "my name is: " + name + " and i'm " + age + " Years old";
}

console.log(optionalParameters("andres"));
console.log(optionalParameters("andres", 20));

console.log("***********************************");
console.log("Closure");

function playingClosure(number){
    let theNumber = number;
    return () => theNumber ;
}

let valueClosure = playingClosure(2);
console.log("Important finish the call variable with ()");
console.log(valueClosure());