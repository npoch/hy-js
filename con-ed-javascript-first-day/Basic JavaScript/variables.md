# Variables

## Learning Objectives
By the end of this lesson you will be able to: 
- Identify the proper keyword to use when declaring a variable.
- Understand variable naming conventions.
- Describe how variables values can be manipulated. 

</br> 

Variables are like "containers" used to name and store data. The data can be accessed by referring to the name of the variable. Basically, we can store a piece of data and retrieve it whenever we want using variables.


## Declaring a variable

To use a variable, it must be *declared* first. Before ES6 (the latest version of JavaScript) the **keyword** `var` was used to declare a variable and bring it into existence. Now, with ES6, we have two new keywords for declaring variables, `let`, and `const`, which should replace `var`. We will talk about the differences between the three soon!

The name of the variable is determined by you. Be sure to name it something descriptive, based on what kind of value it will hold. For now, we will use `let` to declare our variables.

```js
let email;
```

Type the above into your console. What does it return? `undefined`. `undefined` is a data **type** that means it doesn't have a value. More on datatypes in a moment!

Now reference it's value by typing 'email'. What do you see? Nothing! We have created the variable but not yet assigned any value to it.

**Keyword:** Special words reserved in JavaScript to denote specific behaviours.  Check out the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Reserved_Words" target="_blank">MDN Keyword List</a> for reference.

## Assigning a value to a variable
Assign a value to the variable with the `=` operator:

```js
const email = 'hello@email.com';
```
*The value on the right hand side is stored in the variable on the left hand side.*

Why did the above example return undefined?   
No value is returned because `const email = "hello@email.com";` is not an expression, it's a **statement**.

**Statements** are similar to expressions, as they both give instructions to the computer but expressions *always* return a value, statements *don't always* return a value.

Now type `email` into your console again. The value has been assigned to `email` so now we can access it just by its name. You should see:

```js
>email;
"hello@email.com"
```
Once you have declared a variable, you don't need to keep using the keywords. We've already seen that referencing the variable name returns it value but you can also *reassign* a variable to another value without using the keywords again.

```js
const email = 'hello@email.com';
email = 'hi@email.com';
```

Woah! We got an **error**! `Uncaught TypeError: Assignment to constant variable.`.

This is one of the diffferences between `const` and the two other ways of declaring variables `let` and `var`.

The browser will throw an error if you try to reassign a value to a variable defined with `const`. Let's try the above again, but let's use `let`. *note* you will have to refresh your browser if you use the same variable name, so we will use a different one!

```js
let address = 'hello@email.com';
address = 'hi@email.com';
```

What do you think `address` will return?


## Let and Const

Other than redefining `const`, there is one key feature these variables share that sets them part from `var`, a concept called _block scope_ (which we will look at later).


### When to use `let` and when to use `const`

There is a bit of debate going on right now about when to use `let` vs `const`. The general rule of thumb is that if you know the value will not be redefined throughout your program, go with `const`, if you need a value that might change, go with `let`. We are going to use `const` until we realize we do need to redefine our variable, and in those cases we will use `let`.

To learn more check out this <a href="https://youtu.be/LTbnmiXWs2k?list=PL57atfCFqj2h5fpdZD-doGEIs0NZxeJTX" target="_blank">video</a> on `let` and `const` and template literals (which we will talk about soon!).




## Variable naming conventions
* Variables can't contain spaces. Start with a non-numeric character (letter, _, or $) followed by any character. (e.g. `const 23people` is invalid)
* Use camelCase to separate words. (e.g. `const myName`)
* JavaScript is case sensitive so variable names are also case sensitive.
* Another convention is to use underscores to_separate_words. This is common in other programming languages (like PHP) but is generally **avoided** in JavaScript.
* When naming a variable, it's best to give it a descriptive name. (e.g. `const name` instead of `const n`)

Consider the following code:
```js
const 365 = y;
```
The result will show an error when the syntax rules are not followed.
```js
SyntaxError: Unexpected number
```

## Using variables as values
After a variable is declared, it can be used as an *expression* in another  variable. In the example below, `years` is being reused in the `days` variable.

```js
> const years = 25;
> const days = years * 365;
```

## Updating a variable using current value
We've already seen that you can reassign a variable to another value, but now we will look at how we can use it’s current value as part of the new assignment expression.

```js
> let numOfCats = 0;
> numOfCats = numOfCats + 1;
```
What do you think the value of `numOfCats` is now?

## Learning Outcomes

1. What keyword should be used to declare a variable called numOfSunrises knowing that it will update every day?  
    <details>
      <summary>Answer</summary>

      The **let** keyword should be used.
    </details>  

2. What will be returned for the following?:  
    ```js
    > const numOfTrees = 10;
    > const numOfSeeds = 5 * numOfTrees;
    > let totalFutureTrees = 0;
    > totalFutureTrees = numOfSeeds + numOfTrees
    > totalFutureTrees
    ```
    <details>
      <summary>Answer</summary>  

      **60** - Using the let keyword in declaration allows for the value to be updated. const is used when the value will not be changing.
    </details>
