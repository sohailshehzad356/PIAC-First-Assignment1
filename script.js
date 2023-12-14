// Exercise 1: Write a program that calculates the area of a rectangle
console.log("(Exercise 1): Write a program that calculates the area of a rectangle");
var width = 10;
var height = 10;
var area = width * height;
console.log("The area of the rectangle is:" + area);
//Exercise 2: Write a program that takes input and calculates the volume of a cube.
console.log("(Exercise 2): Write a program that takes input and calculates the volume of a cube. \n");
var edge = 18;
var volume = edge * edge * edge;
console.log("The volume of the cube is: " + volume);
//   Exercise 3:  Write a program that checks if a given number is positive, negative, or zero.
console.log("(Exercise 3): Write a program that checks if a given number is positive, negative, or zero. \n");
var number = 0;
if (number > 0) {
    console.log(number + " is a positive number.");
}
else if (number < 0) {
    console.log(number + " is a negative number.");
}
else {
    console.log(number + " is neither positive or negative. It's zero.");
}
//   Exercise 4:   Write a program that checks if a given number is even or odd.
console.log("(Exercise 4):Write a program that checks if a given number is even or odd. \n");
var num = 19;
if (num % 2 === 0) {
    console.log(num + " is even.");
}
else {
    console.log(num + " is odd.");
}
//   Exercise 5:  Write a program that determines if a person is eligible to vote based on their age.
console.log("(Exercise 5): Write a program that determines if a person is eligible to vote based on their age. \n");
var age = 19;
if (age >= 18) {
    console.log("You're eligible to vote!");
}
else {
    console.log("You're not eligible to vote yet. Please come back when you're " +
        (18 - age) +
        " years old.");
}
// Exercise 6:  Write a program that calculates the result of a mathematical expression.
console.log("(Exercise 5):Write a program that calculates the result of a mathematical expression. \n");
var expression = "((10 + 5) * 3 - 2) / (4 % 3) - 7";
var result = eval(expression);
console.log("The result is: " + result);
