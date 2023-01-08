# Free Code Camp JS Notes

## array methods

shift() same as and pop() but from front

unshift() same as push() but from front

splice(start index, num elements to remove, items to insert at index)

slice(index, end index exclusive)

...arrName is spread operator. can be used to copy array. different from setting a variable to same array will just point to same array, not copy. changing arr1 will change arr2. whereas using the spread operator will copy the array.

indexOf(item) returns index or -1

Object.keys(arr) returns array of keys

reverse a string - str.split('').reverse().join('')

# factorialize - recursion
if num == 0, return 1
else num * factorialize(num -1)

find largest number - set var to first number in array

# palindrome checker

```javascript
function palindrome(str) {
  let reversed = str.toLowerCase().split(' ').reverse().join('')
  console.log
  return reversed === str;
}

console.log(palindrome(""));
```

# regex
test method - true or false

regex.test(/ /);

match method - extract matches

str.match(/ /);
search for multiple patterns using alteration operator |

str.match(/yes|no/)
## flags 
/ /i - ignore case
/ /g - search globally, not just first instance
/hu./ - wildcard character
/[a-z0-9]/ - match group/range of characters
/^[aeiou]/ - not group of characters. will return sym and whitespaces
/a+/ - match characters that continue in a row
/fo*/ - match zero or more times. will return f, fo, foo, fooo, etc.

## greedy vs lazy match
greedy - find largest word match
lazy - find shorterest
```javascript
"titanic".match(/t[a-z]*i/) #returns "titani"
"titanic".match(/t[a-z]*?i/) #returns "ti"
```

^ search for characters at the beginning of the string

$ search for at end of the string

\w is the shortcut for [A-Za-z0-9_] all letters, numbers and underscore

\W is opposite of \w

\d is all numbers

\D is opposite of \d including whitespace
