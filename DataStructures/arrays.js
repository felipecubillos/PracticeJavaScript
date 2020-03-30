let myNumbersArray = [1,4,5,6,8];
console.log("the number in the position 4 is : "+myNumbersArray[3]);
console.log("the length of the array is : "+ myNumbersArray.length);


console.log("Looping the array");

for(let iterator =0; iterator< myNumbersArray.length; iterator++){

    console.log("the value in the position "+iterator + " is: "+ myNumbersArray[iterator]);
}
console.log("you can add values to the end of the array with the method push");
myNumbersArray.push(16);
console.log(myNumbersArray);
console.log("and you can remove the last value of the array with the method pop");
myNumbersArray.pop();
console.log(myNumbersArray);
