# Extra Exercises
#javascript2019

# Extra exercises!
Questions are divided into three categories: Level 1, Level 2, Level 3. If you’re having trouble, don’t hesitate to grab your nearest mentor, or post a question in Slack!
Remember: There’s no one right answer out there. If an answer works and **you understand and can explain why it works,** it’s a correct one. (Optimization is another thing, however…)

# Level 1
## Which is bigger?
Write a function that takes in two numbers as parameters, and then returns or logs the larger number.
```
/Example(s):/
biggerNumber(8,5);
// 8
biggerNumber(-5,10)
// 10
```

## Space letters
Create a function that takes in a string parameter representing some words or a sentence, and returns or logs that string with spaces in between all the characters.
```
/Example(s):/
spaceLetters(“Hello world!”);
// “H e l l o   w o r l d !”
```

## Find string in array
Create a function that takes in two parameters: a string and an array of strings. It should attempt to find the string inside of the array, and return whether the search was successful or not.
```
/Example(s):/
containsString(‘turtle’,[‘hammer’,’dog’,’bismuth’]);
// false
containsString(‘bagel’,[‘brioche’,’bagel’,’baguette’]);
// true
```

## Count a letter
Write a function that that accepts two string arguments, a single letter, and a passage of text to search within. The function should count the number of occurrences of the specified letter within the larger string.
```
/Example(s):/
letterCount(‘Hello world!’, ‘o’)
// 2
```

## Vowel Count
Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels! Ignore the letter ‘Y’.
```
/Example(s):/
countVowels(‘The quick brown fox’);
// 5
countVowels(‘whrrmyvwlst’)
// 0
countVowels(‘AeIOuy’);
// 5
```

## Second Highest
Create a function that takes in a list of numbers, and returns the second highest number from those numbers.
```
/Example(s):/
secondHighest([5 ,8 ,9 ,2 ,-8])
// 8
secondHighest[8, 16, 32, 64]
// 32
secondHighest([5, 1, 3, 4])
// 4
```

# Level 2
## Strings in common
Write a function that takes in two arrays of any length, and reports on any values it found in common. If no common entries are found, it should return an appropriate value.
```
/Example(s):/
stringsInCommon([‘do’,’re’,’mi’],[‘fa’,’so’,’la’,’ti’,’do’])
// [‘do’]

const animals = [‘cow’,’deer’,’goat’,’chicken’,’pig’,’fish’]
const meats = [‘chicken’,’beef’,’fish’,’pork’];
stringsInCommon(animals,meats)
// [‘chicken’,’fish’]

stringsinCommon([‘tinker’,’tailor’,’soldier’,’spy’],[‘john’,’ringo’,’george’,’paul’])
// []
```

## Get Factors
Write a function that computes the factors of a positive integer.
Output can be a string, an array, or an object, but NOT multiple output lines.
```
/Example(s):/
getFactors(30);
// [1,2,3,5,6,10,15,30]
getFactors(1);
// [1]
getFactors(37);
// [1,37]
```

## Palindrome, or not?
Write a function that checks whether a particular string is a palindrome or not. Return either true or false depending on the result. Note: Your function should handle strings in a case-insensitive manner, and should ignore spaces and punctuation.
```
/Example(s):/
isPalindrome(“avid diva”);
// true
isPalindrome(“I really love palindromes.”);
// false
isPalindrome(“Madam im adam”);
// true
isPalindrome(“I’m a livid imp.”);
// false
```

## Fibonacci Sequence
Create a function called fibonacci() that generates the first n numbers of the Fibonacci sequence.
```
/Example(s):/
fibonacci(11);
// 0
// 1
// 1
// 2
// 3
// 5
// 8
// 13
// 21
// 34
// 55
```

## Number reverser
Write a function that takes in a number and reverses it.
```
/Example(s):/
reverseNumber(32243)
// 34223
```

## A Case of Titles
Create a function that takes a string as a parameter and converts the first letter of each word of the string in upper case.
_Bonus:_ Appropriately ignore all articles (a, the), prepositions (to, at, in, with), and coordinating conjunctions (and, but, or) as commonly left uncapitalized in titles.
```
/Example(s):/
titleCase(‘the quick brown fox’);
// The Quick Brown Fox
```

## First non-repeated character
Write a JavaScript function to find the first not repeated character.
```
getFirstUniqueChar(‘abacddbec’)
// ‘e’
```

## Is it prime?
Write a JavaScript function that takes a number as a parameter and checks whether the number is prime or not.
_Hint:_ A prime number is one that has no other positive factors between one and itself. So 5 is a prime number (it doesn’t divide by 2, 3, or 4), but 18 isn’t (it divides by 2, 3, 6, and 9).
```
/Example(s):/
isPrime(47);
// true
isPrime(30);
// false
isPrime(1);
// true
```

## Vowel Count Redux
Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
Unlike the previous vowel function, this one should count all occurrences of the letter ‘Y’ that would qualify as a vowel — ie, those at the end of a word.
```
/Example(s):/
countVowels(‘The brown fox quickly ate more honey.’);
// 13
countVowels(‘whrrmyvwlst’)
// 0
countVowels(‘AeIOuy’);
// 6
```

## Factorial
Write a function that takes in a number (n) parameter, and returns or logs the factorial of that number — or in other words, the product of all numbers from 1 to the number.
For instance, if the user inputs the number five, the output would be the result of performing the operation 5 x 4 x 3 x 2 x 1, which is 120.
```
/Example(s):/
factorial(6)
// 720
```

# Level 3
## Count Letters
Write a function to get the number of occurrences of all the letters in specified string. Case should be ignored — ie, H and h should be treated as the same letter. Do not count punctuation or numbers.
Output can be a string, an object, or multiple output lines.
```
/Example(s):/
countLetters(‘Hello, world!’);
// H: 1
// E: 1
// L: 3
// O: 2
// W: 1
// R: 1
// D: 1
```

## Is email?
Write a function that takes in a string, and verfies that it could possibly be a valid email based on common assumptions of what an email should look like. **Tip** you will need to research regular expressions (regex) to complete this!
```
/Example(s):/
isEmail(‘john.smith@example.com’);
// true
isEmail(‘This isn\’t an email.’);
// false
isEmail(‘drewthedestroyer+ponies@minns.co.uk’);
// true
isEmail(‘drewthedestroyer+ponies@$!’);
// false
```

## Unique Characters
Write a function that takes in a string, and returns all the unique characters found in that string.
```
/Example(s):/
getAllUniques(“thequickbrownfoxjumpsoverthelazydog”)
// “thequickbrownfxjmpsvlazydg”
```

## Pig Latin
Write a function that takes in a sentence, and returns that sentence in Pig Latin.
Pig Latin is a constructed play language common with children in which the first consonant or consonant cluster of each word in a sentence is moved to the end of the word, and then additionally has the suffix ‘ay’ added to it.
If a word starts with a vowel, you wouldn’t move anything to the end, but rather, the suffix added would be ‘way’ rather than ‘ay’.
For example, ‘milk’ in pig latin would be ‘ilkmay’, while ‘banana’ would be ‘ananabay’. Vowel-forward words like ‘egg’ and ‘apple’ would yield ‘eggway’ and ‘appleway’, respectively.
Handle capitalization appropriately as you feel like it, but make sure you handle it in some way!
```
/Example(s):/
pigLatin(‘Hello, world!’);
// “Ellohay, orldway!”
pigLatin(‘My very educated mother just served us noodles.’)
// “Ymay eryvay educatedway othermay ustjay ervedsay usway oodlesnay.”
```

# Answers
Don’t peek until you’ve attempted on your own. There’s more than one way to complete these challenges. If you understand your code, and it works, then you’re on the right track!
