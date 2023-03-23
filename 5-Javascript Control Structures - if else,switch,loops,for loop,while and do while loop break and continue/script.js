// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// Control Structures In JavaScript 

// 👉 What Is A Block 
// 👉 What Do You Mean By Control Structures
// 👉 What Do You Mean By Program Flow
// 👉 If/Else Statements 
// 👉 Switch Statements 
// 👉 Primitive Loops ( for,while,do/while)
// 👉 Break And Continue Statements 

// 👉 What Is A Block :
// A block statement is used to group zero or more statements. The block is delimited by a pair of braces ("curly brackets") and contains a list of zero or more statements and declarations.

// {
//     console.log("Hello")
//     console.log("Hello")
//     console.log("Hello")
//     console.log("Hello")
//     console.log("Hello")
// }

// 👉 What Do You Mean By Control Structures


// Control structures in JavaScript are used to control the flow of execution of code based on certain conditions or events. They allow the programmer to make decisions and perform different actions depending on the current state of the program. There are three main types of control structures in JavaScript: conditional statements, loops, 


// What Is Flow Of Execution

// What do you mean by flow of program in JavaScript 

// The flow of a program in JavaScript refers to the order in which the instructions in the program are executed. When a JavaScript program is run, the program follows a specific sequence of steps, which is known as the program flow.

// JavaScript is a procedural programming language, which means that the program flow is determined by the sequence of statements in the code. The program flow can be controlled using various programming constructs, such as loops, conditionals, functions, and so on.




// Conditional statements:

// 👉 If/Else Statements 


// Conditional statements allow the programmer to execute different code based on whether a certain condition is true or false. There are three types of conditional statements in JavaScript:

// if statement: The if statement executes a block of code if a specified condition is true. For example:



// if(false) {
//     console.log("Your Age Is " + age)
// console.log("Hello")
// console.log("Hello")
// console.log("Hello")
    
// } else{
//     console.log("I aM Else block")
// }


// var age = parseInt(prompt("What Is Your Age:"))
// console.log("Your Age Is"+" " + age)
// if(age>18){
//     console.log("You Can Enter Into Park")
    
// }else{
//     console.log("You Cannot Enter")
// }

// var ticketPrice = parseInt(prompt("Enter Your Amount TO Buy A Ticket Platinium Price: 1000, Golden Price : 500 And Silver Price Is 250: "))

// if(ticketPrice == 1000){
//     console.log("Here Is Your Platinium Ticket")
// }else if(ticketPrice == 500){
//     console.log("Here Is Your Golden Ticket")
// }else if(ticketPrice == 250){
//     console.log("Here Is Your Silver Ticket")
// } else{
//     console.log("Wrong Amount")
// }


// 👉 Switch Statements 

// switch statement: The switch statement is used to perform different actions based on different value of variable .

//  For example:

// var day = 2;

// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;

//  case 2:
//     console.log("Tuesday")
//     break
    
//     case 3:
//     console.log("Wed")
//     break;
    
//     case 4:
//     console.log("Thursday")
//     break;
    
//     case 5:
//     console.log("Friday")
//     break;
    
//     case 6:
//     console.log("Saturday")
//     break;
    
//     case 7:
//     console.log("Sunday")
//     break;
//   // and so on...
//   default:
//     console.log("Invalid day");
// }


// 👉 Primitive Loops ( for,while,do/while)

// Loops allow the programmer to repeat a block of code multiple times. There are three primitive types of loops in JavaScript:


// Dry: Dont Repeat Yourself

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);

// for loop: The for loop repeats a block of code for a specified number of times.

// for(var i = 1; i>0; i++){
//     console.log(i)
// }


// while loop: The while loop repeats a block of code as long as a specified condition is true.
// var i =1

// while(i<=10){
//     console.log(i)
//     i++;
// }


// do-while loop: The do-while loop is similar to the while loop, but it executes the block of code at least once before checking the condition. 

// var i=11
// do{
//     console.log(i)
//     i++;
// }while(i<=10)


// 👉 Break And Continue Statements 

// Break

// for(var i=1; i<1000000; i++){
     
//   if(i<=5){
//         console.log(i);
//         break;
//     }
// }

// console.log("sasa")


// Continue

// for(var i=1; i<=10; i++){
    
//     if(i==5){
//         continue;
//     }
    
//     console.log(i)
// }















































































































// if-else statement: The if-else statement executes a block of code if a specified condition is true, and a different block of code if it is false. For example:

// if (x > 5) {
//   console.log("x is greater than 5");
// } else {
//   console.log("x is less than or equal to 5");
// }



































