# Operators

## Learning Objectives
By the end of this lesson you will be able to: 
- Review the concepts of BEDMAS and order of operation.
- Recognize how BEDMAS applies to operations in JavaScript.

</br>  

You can do basic arithmetic with numbers using **operators**. Arithmetic operators in JavaScript are (`+`) for addition, (`-`) for subtraction, (`*`) for multiplication and (`/`) for division.

```js
> 55 * 20
> 23.5 - 11
> 6 / 1.5
> 34 + 66.3
```

Parentheses can be used to group operations. Just like you learned in grade school, BEDMAS applies. The order in which the computer will do the math is:

**B**rackets   
**E**xponents  
**D**ivision  
**M**ultiplication  
**A**ddition  
**S**ubtraction

**Note:** When numbers are contained within quotes, they are considered **strings** and arithmetic operations cannot be performed.


**Exercise**  
In pairs, solve the following questions by using **operators**. Create a new HTML document, and write your code inside of some `<script>` tags!

- How many seconds are in a year?
- If a tube of cookie dough makes 12 cookies, but you eat a quarter of the raw dough before you get them in the oven, how many cookies can you bake?

## Learning Outcomes
1. Which of the following match the expected output for the below calculations?
    ```js
    > 100 * 5 + 20 / 10
    > (10 * 5) / (5 + 5) - 1
    ```
    a.
    ```js
    502
    4
    ```
    b.
    ```js
    52
    5.5555
    ```
    c.
    ```js
    700
    4
    ```

    <details>
     <summary>Answer</summary>

     **a - These are the correct answers that will be obtained through following BEDMAS!**  
     b - These answers will be obtained through evaluating the expressions effectively from left to right. We need to ensure we follow order of operations!  
     c - The second answer is correct, however, the first answer is obtained through performing  addition _before_ multiplication.
    </details>
