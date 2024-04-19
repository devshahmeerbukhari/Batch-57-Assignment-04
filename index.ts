//1. Instructions: Declare a variable named greeting with the string value "Hello, World!" and print it.
let greetings: string = "Hello World"
console.log(greetings)

//2. Instructions: Define two variables with integer values and calculate their sum, difference, product, and quotient.
let num1: number = 15, num2 = 7
//Sum:
let sum: number = num1 + num2
console.log(`Sum of num1 and num2 is: ${sum}`)

//Difference:
let difference: number = num1 - num2
console.log(`Difference between num1 and num2 is: ${difference}`)

//Profuct:
let product: number = num1 * num2
console.log(`Product of num1 and num2 is: ${product}`)

//Quotient:
let quotient: number = num1 / num2;
console.log(`Quotient of num1 and num2 is: ${quotient}`)

//3. Instructions: Swap the values of two variables without using a third variable.
console.log(`Before swaping\nNum1 is: ${num1}`)
console.log(`Num2 is: ${num2}`)
num2 += num1;
num1 = num2 - num1;
num2 -= num1;
console.log(`After swaping\nNum1 is: ${num1}`)
console.log(`Num2 is: ${num2}`)

//4. Instructions: This applies to TypeScript. Create a string variable and try changing its type.
//let message: string = 12;
//error will occure because i have explicetly assig the data type of message variable to string, it will not accept any other data type of data.

//5. Instructions: Use the modulus operator to find the remainder of two numbers.
let remainder: number = num2 % num1
console.log(`Remander of num1 by num2 is: ${remainder}`)

//6. Instructions: Increment a variable's value by 1 using two different methods.
let counter: number = 0
console.log(`Before increment: ${counter}`)
counter++
counter += 1
console.log(`After increment: ${counter}`)

//7. Instructions: Given three boolean variables, write expressions for AND, OR, and NOT gates.
let a = true, b = false, c = true
if(a && c){
    console.log(`Both are true.`)
}
if(a || b){
    console.log(`One of them is true.`)
}
if(!b){
    console.log(`B is false.`)
}

//8. Instructions: Show examples of using compound assignment operators.
let CAForAddition: number = 0, CAForSubtraction: number = 10, CAForMultiplication: number = 1, CAForDivision: number = 12
CAForAddition += 5
CAForSubtraction -= 3
CAForMultiplication *= 40
CAForDivision /= 2;
console.log(`Compound Assignment for Addition: ${CAForAddition}`)
console.log(`Compound Assignment for Subtraction: ${CAForSubtraction}`)
console.log(`Compound Assignment for Multiplication: ${CAForMultiplication}`)
console.log(`Compound Assignment for Division: ${CAForDivision}`)

//9. Instructions: Write a program to check if a number is even or odd.
let num = 20
if(num % 2 === 0){
    console.log(`Number ${num} is Even!`);
} else{
    console.log(`Number ${num} is Odd!`);
}

//10. Instructions: Check if a person is eligible to vote.
let age: number = 20
if(age >= 18){
    console.log(`Eligible to vote.`)
} else{
    console.log(`Not Eligible to vote.`)
}

//11. Instructions: Assign a grade based on a numerical score.
let score: number = 91;
let grade: string;
if(score >= 90 && score <= 100){
    grade = `A+`
} else if(score >= 80 && score <= 89){
    grade = `A`
} else if(score >= 70 && score <= 79){
    grade = `B`
} else if(score >= 60 && score <= 69){
    grade = `C`
} else if(score >= 50 && score <= 69){
    grade = `D`
} else{
    grade = `F`
}
console.log(`Grade is: ${grade}`)

//12. Instructions: Find the maximum of three numbers.
let x = 10, y = 12, z = 15;
if(x > y && x > z){
    console.log(`${x} is a maximum numebr`)
} else if(y > z && y > x){
    console.log(`${y} is a maximum number`)
} else{
    console.log(`${z} is a maximum number`)
}

//13. Instructions: Check if a given year is a leap year.
let year: number = 2024;
if(year % 4 === 0){
    console.log(`${year} is a leap year`)
} else{
    console.log(`${year} is not a leap year`)
}

//14. Instructions: Write a program that converts temperature from Fahrenheit to Celsius.
let fahrenheit: number = 90;
let celsius: number = (fahrenheit - 32) * (5 / 9)
console.log(`Temperature in fahrenheit is: ${fahrenheit} and then conveted to celsius: ${celsius}`) 

//15. Instructions: Check if a number is positive, negative, or zero.
let number: number = 12;
if(number < 0){
    console.log(`${number} number is negative`)
} else if(number > 0){
    console.log(`${number} number is positive`)
} else{
    console.log(`${number} number is zero`)
}

//16. Instructions: Write a program that prints the multiplication table of a given number up to 10.
console.log(`${number} * 1 = ${number * 1}`)
console.log(`${number} * 2 = ${number * 2}`)
console.log(`${number} * 3 = ${number * 3}`)
console.log(`${number} * 4 = ${number * 4}`)
console.log(`${number} * 5 = ${number * 5}`)
console.log(`${number} * 6 = ${number * 6}`)
console.log(`${number} * 7 = ${number * 7}`)
console.log(`${number} * 8 = ${number * 8}`)
console.log(`${number} * 9 = ${number * 9}`)
console.log(`${number} * 10 = ${number * 10}`)