// Topics We Will Cover In Today's Class:

// 👉 Running JavaScript on Webpage and Browser Console
// 👉 Different Types of Errors/Bugs
// 👉 Logical Errors, Syntax Errors, and Runtime Errors
// 👉 Understanding Statements in Programming Languages
// 👉 Understanding Expressions
// 👉 Type Coersion
// 👉 Syntax in JavaScript or Any Other Programming Languages
// 👉 Comments in JavaScript or Any Other Programming Languages
// 👉 Operators and Different Types of Operators

// 👉 Running JavaScript on Webpage and Browser Console

// console.log("Hello From Internal Javascript")
// console.log()
// document.write("<h1>Hello From Internal Javascript</h1>");

// JavaScript is a programming language that is primarily used for web development. To run JavaScript on a webpage, you can either include the script directly in the HTML file using the script tag or you can include an external JavaScript file using the src attribute in the script tag. Alternatively, you can also run JavaScript code in the browser console, which is a developer tool that allows you to execute JavaScript code directly in the browser.

// 👉 Different Types of Errors/Bugs

// In programming, errors are inevitable. There are three main types of errors in JavaScript: syntax errors, logical errors, and runtime errors.

// Syntax errors occur when the code violates the language's syntax rules, such as missing semicolons or using an incorrect keyword.

// Logical errors occur when the code does not produce the desired result. This type of error is often caused by incorrect algorithm or flawed code design.

// Runtime errors occur when the code attempts to perform an operation that is not allowed, such as dividing by zero or accessing an undefined variable.

// Logical Errors, Syntax Errors, and Runtime Errors:
// As mentioned earlier, logical errors occur when the code does not produce the desired result due to a flaw in the code design. Syntax errors occur when the code violates the language's syntax rules. Runtime errors occur when the code attempts to perform an operation that is not allowed.

// Syntax What Is This

// Syntax === Grammer

//  var 1name = "Jeet" Syntax Error You Cant Start A Variable Name WITH Number


//  console.log(1name) will give a syntax error

// Logical Errors

// function multiplication(val1, val2) {
//   console.log(val1 + val2); will give a logical error
// }

// multiplication(2, 5);

// Runtime Errors

// console.log("hello");
// console.log(asa); this will cause a runtime error asa is not defined
// console.log("i am fine");
// console.log("i am fine");
// console.log("i am fine");
// console.log("i am fine");

// 👉 Understanding Statements in Programming Languages
// 👉 Understanding Expressions

// Understanding Statements in Programming Languages:
// In programming, a statement is a complete instruction that the computer can execute. Statements are typically composed of keywords, operators, and values. Examples of statements in JavaScript include variable declarations, function calls, and conditional statements.

// Understanding Expressions:
// An expression is a combination of values, variables, operators, and functions that are evaluated to produce a value. Examples of expressions in JavaScript include arithmetic expressions, logical expressions, and function calls.

// Statement Example:

// var name = "jeet kumar"; This Is Called A Statement
// console.log(name) this is also an statement

// Expression Example

// 2+2 This is called an expression
// 10/2 etc
//myFunc() this is also an valid expression

// 👉 Comments in JavaScript or Any Other Programming Languages

// Comments are annotations in code that are ignored by the interpreter or compiler. They are used to provide additional information about the code, explain how it works, and make it more readable. In JavaScript, comments can be single-line comments or multi-line comments.

// Single Line Comment

// var name = "jeet" this is a single line comment

/*  Multiple Line Comment */

/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias illum modi, ut dolore quae repellat. Dolorum ea ipsam illum 
ipsa deleniti quam cupiditate, error, deserunt tempore quis laboriosam iusto voluptates.
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias illum modi, ut dolore quae repellat. Dolorum ea ipsam illum 
ipsa deleniti quam cupiditate, error, deserunt tempore quis laboriosam iusto voluptates.
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias illum modi, ut dolore quae repellat. Dolorum ea ipsam illum 
ipsa deleniti quam cupiditate, error, deserunt tempore quis laboriosam iusto voluptates.
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias illum modi, ut dolore quae repellat. Dolorum ea ipsam illum 
ipsa deleniti quam cupiditate, error, deserunt tempore quis laboriosam iusto voluptates.
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias illum modi, ut dolore quae repellat. Dolorum ea ipsam illum 
ipsa deleniti quam cupiditate, error, deserunt tempore quis laboriosam iusto voluptates.
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias illum modi, ut dolore quae repellat. Dolorum ea ipsam illum 
ipsa deleniti quam cupiditate, error, deserunt tempore quis laboriosam iusto voluptates.
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias illum modi, ut dolore quae repellat. Dolorum ea ipsam illum 
ipsa deleniti quam cupiditate, error, deserunt tempore quis laboriosam iusto voluptates. */

// 👉 Type Coersion

/* Type coercion is the process of converting a value from one data type to another. In JavaScript, type coercion can occur implicitly or explicitly. Implicit type coercion occurs when JavaScript automatically converts a value from one data type to another, while explicit type coercion occurs when a developer manually converts a value from one data type to another using functions like parseInt or parseFloat. */

//Implicit Coersion

// var val_1 = 30;
// var val_2 = "30";
// var val_3 = val_1+val_2;  //JAVASCRIPT WILL IMPLICITLY CONVERT DATATYPE OF VAL_1 THEN CONCATINATE IT WITH VAL_2 AND STORE IT IN VAL_3

// document.write(val_3 + "<br/> ");

// var val_1 = 2;
// var val_2 = "10";
// var multiplication = val_1 * val_2;
// var division = val_1 / val_2;
// var subtraction = val_1 - val_2;

// document.write(multiplication + "<br>");
// document.write(division + "<br>");
// document.write(subtraction + "<br>");
// + sign work with 2 meanings

// 1 for concatination
// var a = "string 1";
// var b = "string 2";

// document.write(a + b);

// 1 for evaluation or arthimatic operations

// Explicit Coersion

// var value1 = parseInt(prompt("Enter Your Value 1"));
// var value2 = parseInt(prompt("Enter Your Value 2"));

// document.write(value1 + value2);

// We Will See Operators In Next Session
