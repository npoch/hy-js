# Control Flow

## Learning Objectives
By the end of this lesson you will be able to: 
- Construct logical expressions using logical operators and boolean expressions.
- Use conditional statements to run statements based on boolean values.
- Identify how to construct a for-loop, and explain the purpose of looping in programming.

</br>  

Normally, instructions or **statements** in a JavaScript are executed one after the other, in the order in which they are written.

**Control flow** is referring to the order of instructions that are executed based on a decision and is used to change the flow of statements.

An example of a control flow statement is an if/else statement.

"If this condition is true, do this. Else, do this."

## Booleans

Our code so far is executed top to bottom. If that's all we could do then our programs would be limited. This is where **control flow** comes in. We can write code so that a statement or group of statements is only executed if a logical condition is true or false.

A type of value that we need for conditionals is the **boolean** type. This type has two possible values: `true` or `false`. For example, when checking if two numbers are equal the value returned should be either true or false. How do we check if two numbers are equal? We use comparison operators.

## Comparison operators

Operator     |  Description  
------------ | -------------
==	 | is equal to
===	 | is exactly equal to (value and type)
!=	| is not equal to
!==	| is strictly not equal to
&#62;	| greater than
<	| less than
&#62;=	| greater than or equal to
<=	| less than or equal to



Check equality with `===` (equal) and `!==` (not-equal). Note how we **do not use regular equals**. Why?

Check inequality with `>=` `<=` `>` `<` (greater than and less than)

**Exercises**: In the console, write two expressions that return the boolean value `false` and two that return `true`.

## Combining boolean expressions

In order to make more complex conditions we can use logical operators to check for something like `if 2 is equal to 2 AND 3 is greater than 1`.

**Logical operators**  

**&&**  means **AND** <br>
**||** means  **OR** <br>
**!**  means **NOT** <br>

We can combine boolean expressions using (`&&`) and (`||`) operators.

Most often you will use `&&` to determine if two statements are both true, for example:

```js
const cow = "mammal";
const feet = 4;

cow === "mammal" && feet > 2 // returns true, since cows are mammals and they have more than two feet

cow === "mammal" && feet > 6 // returns false, because even though cows are mammals, they have fewer than 6 feet!
```

Most often you will use `||` in situations where you only care if at least one of the conditions is true, for example:

```js
const age = 30;
const name = "Steve";

age > 25 || name === “McLovin”
```

This will return true if EITHER the age variable is greater than 25 AND/OR the name variable is equal to “McLovin”.

The only time an `||` will return false is if NEITHER condition is true. So if age is less than 25, AND name is not equal to “McLovin”, this statement will return false.

**NOTE:** One fun and weird quirk of JavaScript is that every value in JavaScript can be compared to any other value in JavaScript. For example, `0`, `null` and `undefined` will all evaluate to ‘false’, whereas any string (`“Kristen”`, `“pizza”`), or any number higher than `0` will evaluate to true.

Values that evaluate to false (like `0`, `null`, and `undefined`) are known as `falsey` values, whereas values that evaluate to true (any number bigger than 0, strings, etc.) are considered `truthy` values.

This might seem strange at first, but we’ll learn more about why this is useful in the coming lessons.

## Conditional statements
Now that you're familiar with booleans, it's time to meet **conditional statements**. Simply put, these statements allow us to run a statement or group of statements only when a condition is true or false.

Here is the syntax for an if/else statement:

```js
if (condition) {
	// block statement (do something)
} else {
	// block statement (do something)
}
```


Let's break that down.

1. `if` is a keyword
2. `condition` is usually a boolean expression
3. `block statement` will be explained below
4. `else` is a keyword.
5. another `block statement`. Note that the `else` block is optional.


![image](https://hychalknotes.s3.amazonaws.com/control-flow.png)

### Block Statements
A block statement is used to group statements (instructions). The block is delimited by a pair of curly brackets `{}`:

```js
if ( time === 'morning') {
   // do all of the following things
   console.log("Good morning!");
} else {
	// do all the following things if the first condition is false
	console.log("Good evening!");
}
```

In fact a block statement could be just the `{}`.

```js
{
	console.log('Hi!');
}
```

**Exercises**: Complete the following exercises in pairs. Put your code between `<script>` tags inside of an HTML file.


1. Consider the code below; what is printed to the console?

   ```js
   const n = 4;

   if (n > 10) {
	   console.log("That's a big number");
   } else {
	   console.log("It's a small number");
   }
   ```

   <details>
     <summary>Answer</summary>
     <br/>


     It's a small number
   </details></br>

2. Consider the code below; what is printed to the console? What is `else if`?

   ```js
   const n = 55;

   if (n > 100) {
	   console.log("That's a big number");
   } else if (n > 10 ) {
	   console.log("It's kinda big");
   } else {
	   console.log("It's a small number");
   }
   ```

   <details>
     <summary>Answer</summary>
     <br/>


     It's kinda big
   </details></br>

3. Create a program that uses conditionals and logical operators to print out the largest of 3 numbers that are stored in variables.

   <details>
     <summary>Answer</summary>
     <br/>

     ```js
     const numOne = 3;
     const numTwo = 4;
     const numThree = 5;
     let biggestNumber = 0;

     if (numOne >= numTwo && numOne >= numThree) {
       biggestNumber = numOne;
     }

     if (numTwo >= numOne && numTwo >= numThree) {
       biggestNumber = numTwo;
     }

     if (numThree >= numTwo && numThree >= numOne) {
       biggestNumber = numThree;
     }

     console.log(biggestNumber);
     ```
   </details></br>



## Loops

Another powerful concept in programming is **loops**. With loops, a block of statements are repeatedly executed while a condition is true.

![image](https://hychalknotes.s3.amazonaws.com/loops.png)


### For Statement

```js
for (initialExpression; condition; incrementExpression) {
	// loop statements
}
```

When a **for loop** executes, the following happens:

1. The **initialExpression** is typically used to initialize (start) a counter variable. *This expression can also declare variables with the `let` keyword.*

2. The **condition** is an expression that is evaluated before each loop iteration. If this expression evaluates to true, the statement is executed. If this expression evaluates to false, the `for loop` ends.

3. The **incrementExpression** is evaluated at the end of each loop iteration. Generally used to update or increment the counter variable.

Let's look at an example:

Before running the code below predict what would happen.

```js
for (let i = 0; i < 10; i = i + 1) {
	console.log(i);
}
```

When would you want to use this? Let's say you have a music playlist containing 10 songs. You want the songs to auto play the next song until you get to the end of the playlist. The for loop may look something like this:
```js
for (let i = 0; i < 10; i = i + 1) {
	playNextSong(i);
}
```

`let i = 0;` Start at the first song.
`i < 10` If the current song that is playing is less than 10, you are not at the end of the list yet, so play the next song.
`i + 1` To move to the next song on the list, add 1 to the current index number to move onto the next song.


**Caution: Endless Loops**
Consider what would happen if we ran this code:
``` js
// don't run this!
for (let i = 1; i > 0; i = i + 1) {
	console.log(i);
}
```

**Exercises**:
Complete the following exercises in pairs.

**Level 1** Log into the console the numbers between 5 and 12 (including 5 and 12).

**Level 2**. Log into the console the numbers between 1 and 10 in reverse (i.e. starting with 10). The output should look something like this:

```js
10
9
8
7
6
5
4
3
2
1
```



**Level 3**. Print the even numbers between 1 and 20. The output should look something like this:

```js
2
4
6
8
10
12
14
16
18
20
```

**Level 4**. Print the numbers from 1 to 100. But for multiples of 3 print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiple of both 3 and 5, print “FizzBuzz”. The output should look something like this:

```js
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
...
```

Hints: Look up combining boolean expressions with &&. Also look up modulo.

* <a href="https://hychalknotes.s3.amazonaws.com/fizzbuzz.html" download>fizzbuzz.html (starter files)</a>
* <a href="https://hychalknotes.s3.amazonaws.com/fizzbuzz_ANSWER.html" download>Fizzbuzz Answer key</a>

## Learning Outcomes

1. Which of the following should be used to print a count from 0 to 10  
a.
    ```js
    for (let i == 0; i < 10; i = i + 1) {
      console.log(i);
    }
    ```
    b.
    ```js
    for (let i = 0; i > 10; i = i + 1) {
      console.log(i);
    }
    ```
    c.
    ```js
    for (let i = 0, i < 10, i = i + 1) {
      console.log(i);
    }
    ```
    d.
    ```js
    for (let i = 0; i <= 10; i = i + 1) {
      console.log(i);
    }
    ```
    <details>
     <summary>Answer</summary>  

     a - The double equals sign (==) is known as an equality operator and is used to check if two values are equal to one another. It is not used for assignment.      
     b - The greater than sign will prevent this loop from ever running due to the fact that i starts at 0 which is less than 10.  
     c - Semi colons should be used as separators, not commas!  
     **d - This is the proper format for the for loop and will properly print out a count from 0 to 10**.
    </details>  

    </br>
2. Will the following code snippet print *all* odd numbers between 1 and 20, and why/why not?
    ```js
    for (let i = 3; i < 20; i = i + 1) {
      if (i % 2 !== 0) {
        console.log(i);
      }
    }
    ```  
    <details>
     <summary>Answer</summary>

     **This will print all odd numbers except for the number 1, due to the counter variable starting at 3. Remember that let is used as the value of i is being reassigned**
    </details>
