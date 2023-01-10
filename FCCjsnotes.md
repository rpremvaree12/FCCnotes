# Free Code Camp JS Notes

## array methods

shift() same as and pop() but from front

unshift() same as push() but from front

splice(start index, num elements to remove, items to insert at index)

slice(index, end index exclusive)

...arrName is spread operator. can be used to copy array. different from setting a variable to same array will just point to same array, not copy. changing arr1 will change arr2. whereas using the spread operator will copy the array.

indexOf(item) returns index or -1

Object.keys(arr) returns array of keys

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
# Caesar Cipher
```javascript
function rot13(str) {
  let alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let decoded = "";
  let strArr = str.split('');
  console.log(strArr);

  for(let i=0;i <strArr.length; i++){
    // if not in alphabet string, then add the character
    if(alpha.indexOf(strArr[i]) < 0){
      decoded += strArr[i]
    }
    // if the index of the str is less than 13, then start from the beginning and add 13
    else if(alpha.indexOf(strArr[i]) < 13) {
      decoded += alpha[alpha.indexOf(strArr[i])+13];
    }else{
    // if the index of str is more than 13, subtract 13
      decoded += alpha[alpha.indexOf(strArr[i])-13];    }
  }
  return decoded;
}

```
# Roman Numeral Converter
```javascript
function convertToRoman(num) {
  let result = ""
  const roman = {
    M:	1000,
    CM:	900,
    D:	500,
    CD:	400,
    C:	100,
    XC:	90,
    L:	50,
    XL:	40,
    X:	10,
    IX:	9,
    V:	5,
    IV:	4,
    I:	1
  }
  for(const key in roman){
    if (num / roman[key] >= 1){
      result += key.repeat(Math.floor(num/roman[key]))
      num -= roman[key]*(Math.floor(num/roman[key]))
    }
  }
  return result
}
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

\w is word characters, the shortcut for [A-Za-z0-9_] all letters, numbers and underscore but not symbols

\W (non word characters), the opposite of \w ex: symbols !@#$%, etc.

\d is all digits

\D is all non-digit including opposite of \d including underscores


## string methods
.split()
.reverse()
.join()

reverse a string - str.split('').reverse().join('')

```javascript
// determine if the substring target is at the end of the string str
function confirmEnding(str, target) {
  let re = new RegExp(target+"$") 
  return re.test(str)
}
```

Repeat a String Repeat a String

```javascript
// repeat a string str, num times using a for loop
function repeatStringNumTimes(str, num) {
  let output = "";
  for (let i=0; i<num; i++){
    output += str;
  }
  return output
}

// repeat using recursion. If num is negative, return an empty string
function repeatStringNumTimes(str, num) {
  if (num < 1){
    return ""
  }
  return str + repeatStringNumTimes(str, num-1)
}
```

truncate a string
```javascript
// for loop
function truncateString(str, num) {
  let output = ""
  if(num < str.length){
    for (let i = 0; i < num; i ++){
      output += str[i];
    }
    return output + "...";
  }else{
    return str
  }
}

// using slice function
function truncateString(str, num) {
  let output = ""
  if( str.length > num){
    return str.slice(0,num) + "...";
  }else{
    return str;
  }
}
```

Finders Keepers
Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.

```javascript
function findElement(arr, func) {
  let num = 0;
  for (let i=0;i<arr.length; i++){
    num = arr[i]
    if(func(num)){
      return num;
    }
  }
  return undefined;
}

console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }));
```
Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.

```javascript
function booWho(bool) {
  if(bool===true||bool===false){
    return true
  }
  return false
}

//
function booWho(bool) {
  return typeof bool === "boolean"
}
```

```javascript
// title case
function titleCase(str) {
  let newS = str.toLowerCase().split(' ');
  let output = []
  for(let i=0; i<newS.length; i++){
    output.push(newS[i].charAt(0).toUpperCase() + newS[i].slice(1))
  }
  return output.join(' ');
}
```

## Object Oriented Programming

Instance instanceof Object
Instance.constructor === Object
for loop
for (let i in array){
  console.log(array[i]);
}

prototype
object.prototype.property = value;

all at once
```javascript
Bird.prototype = {
  key: value,
  keyname: function(){

  }
}
```
but erases the constructor function
```javascript
duck.constructor === Bird // false
duck.constructor === Object // true
duck instanceof Bird // true
```
define the constructor inside of prototype to avoid this
```javascript
Bird.prototype = {
  constructor: Bird,
  wings: 4
}
}
```
Bird.prototype.isPrototypeOf(duck);

supertype
```javascript
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};
```
don't use new keyword, use Object.create(Animal.prototype)

set it so that Dog inherits from Animal

Dog.prototype = Object.create(Animal.prototype)

```javascript
Dog.prototype = Object.create(Animal.prototype); //inherit
Dog.prototype.constructor = Dog; // reset constructor
Dog.prototype.bark = function(){
  console.log("Woof!");
} // add in prototype method
```

Mixin
let glideMixin = function(obj){
  obj.glide = function(){
    console.log("Gliding, whee!");
  }
}

pass in a parameter to a function that defines a method for it

immediately invoked function expression
```javascript
(function () {
  console.log("A cozy nest is ready");
})()
```
vs.

```javascript
function makeNest() {
  console.log("A cozy nest is ready");
}

makeNest();
```


let funModule = (function(){
  return{
    isCuteMixin: function(obj) {
      obj.isCute = function() {
        return true;
        };
  },
  
  singMixin: function(obj) {
    obj.sing = function() {
    console.log("Singing to an awesome tune");
    };
    }
  }

})();

let isCuteMixin = function(obj) {
  obj.isCute = function() {
    return true;
  };
};
let singMixin = function(obj) {
  obj.sing = function() {
    console.log("Singing to an awesome tune");
  };
};