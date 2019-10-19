# Template Literals and Concatenation

## Learning Objectives
By the end of this lesson you will be able to: 
- Construct JavaScript strings using various concatenation methods. 
- Use template literals for expression evaluation.

</br>  

## Concatenation
Unlike the other arithmetic operators, the `+` operator has another purpose other than adding numbers. It is the "addition" or joining of strings, known as **concatenation**. If you use the `+` operator with only numerical values, it will add the values. Otherwise, it will combine the outputs as a string.

You can concatenate variables, strings or a combination of both but strings must always be contained within quotes.

To join the three strings "Javascript", "is" and "awesome!" to get "JavaScript is awesome!" it would be:
```js
"Javascript " + "is" + " awesome!"
```
To join strings and variables, it would be:
```js
const language = "Javascript";
const sentence = language + " is awesome!";
sentence;
```
What happens when you type the below expressions in the console?
```js
'Juno' * 6
```
or
```js
'Juno' + 6
```
or

```js
'Juno' * 'Class'
```

or
```js
Array(16).join("lol" - 2) + " Batman!";
```
`NaN` (not a number) for first and third examples. We can't do some operations (like multiplication) with types that are not numbers.

**Note:** You can create strings by using single or double quotes or backticks. For example, 'Juno' and "Juno" are equivalent. \`Juno\` would also work! Pick one and stay consistent.

**Exercises**  
What happens when you type in the console: `'She's a Juno student'`.

SyntaxError! How would you solve this issue?

Solution: <span class="solution">When you need to use a character that will break your string, you can *escape* the character with a backslash `\` So: , `'She\'s a Juno student'`</span>



## Template Literals

In ES6 there is a new way to define a string, and it comes with some added benefits. Currently if you want to define a string, you can use `''` or `""`. Basically just pick double or single quotes and stick with it.

```js
const name = "Sam";
const job = "Instructor";
```

If you want to concatenate strings together you can use the `+` operator.

```js
const name = "Sam";
const job = "Instructor";
const sentence = name + " works at Juno as an " + job;
console.log(sentence);// "Sam works at Juno as an Instructor"
```

To create a template literal string, we use the backtick `` ` `` in place of the quotes.

```js
const name = `Sam`;
const job = `Instructor`;
```

They behave exactly the same, but there is one difference. With a template literal, concatenation becomes a lot easier.

```js
const name = `Sam`;
const job = `Instructor`;
const sentence = `${name} works at Juno as an ${job}`;
console.log(sentence);// "Sam works at Juno as an Instructor"
```

Notice the `${}` syntax inside of the string, this is a template expression. It allows us to template out our strings, and the browser will replace the `${}` expression with the proper value at runtime. This makes concatenating large strings a lot more enjoyable.

### Multi line

One last thing to look at is how template literals handle multi line string. With a regular string if you wanted to have to span more than one line, you would have to do something like this.

```js
const multi = "This is a \n multiline string";
console.log(multi);
```
We have to include the `\n` new line character. If you tried to put that on two lines:

```js
const multi = "This is a \n
multiline string";
console.log(multi);
```

It would throw an error `Uncaught SyntaxError: Unexpected token ILLEGAL`. However with template literals we CAN do that!!

```js
const multi = `This is a
multiline string`;
console.log(multi);
```

## Evaluating expressions

You can even execute an expression in a template literal.

```js
const mathIsHard = `What is 1 + 1? I know! It’s ${1 + 1}`;
console.log(mathIsHard); // "What is 1 + 1? I know! It’s 2"
```
We'll see how this can come in handy when we learn more about functions.

So nice!!

To learn more check out this <a href="https://youtu.be/LTbnmiXWs2k?list=PL57atfCFqj2h5fpdZD-doGEIs0NZxeJTX" target="_blank">video</a> on template literals.


### Template Literal Support

<a href="https://caniuse.com/#feat=template-literals" target="_blank">Can I use Table for Template Literals</a>

Template strings work in most browsers, but if you need to support older browsers you will have to use a tool like Babel which can compile back to ES6. **For this class, feel free to use template strings as frequently as you would like. We will be learning how to use a few tools that will compile for us, later on in fundamentals.**

## Learning Outcomes
1. Which of the following should be used to print the following sentence (note the newline separation):  </br>  
```I like going to the movies...```  
```Mostly to eat the popcorn``` </br>   
a.
    ```js
        const movies = "I like going to the movies... \n
        Mostly to eat the popcorn"
    ```
    b.
    ```js
        const movies = "I like going to the movies..." + "\n" + "Mostly to eat the popcorn"
    ```
    c.
    ```js
        const movies = `I like going to the movies...
        Mostly to eat the popcorn`
    ```
    <details>
      <summary>Answer</summary>

      a - Double quotes do not allow for text to be on a separate line.  
      Both **b** and **c** are valid options! **b** appends a newline character to the string, while **c** uses template literals which allows for text on a separate line.
    </details>

2. What would the following print out:    
    ```js
    const pikaThunder = 10
    const bulbaHealth = `Bulbasaur got hit. Health is now: ${50 - pikaThunder}`

    console.log(bulbaHealth)
    ```
    a.
    ```
    Bulbasaur got hit. Health is now: 50 - 10
    ```
    b.
    ```
    Bulbasaur got hit. Health is now: ${50 - 10}
    ```
    c.
    ```
    Bulbasaur got hit. Health is now: 40
    ```

    <details>
     <summary>Answer</summary>  

     a - Remember that the expression inside of a template literal gets evaluated.  
     b - The dollar sign and curly brace that indicate a template literal will not be printed!   
     **c - This is correct as the expression within the template literal is being evaluated.**
    </details>
