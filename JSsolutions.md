## palindrome checker

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

  for(let i=0; i < strArr.length; i++){
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
## Roman Numeral Converter
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
## telephone validator

```javascript
function telephoneCheck(str) {
  // \D finds all non digits
  let regex = /\D/gi

//.    \([^)]*\)|\[[^\]]*\] finds matching parenthesis
  let unwanted = str.match(regex)
  console.log("unwanted " + unwanted)
  let cleaned = str.replace(regex,"");
  console.log("cleaned " + cleaned)

  
  if(cleaned.length == 11 && cleaned[0] == 1){
    return /^\d+$/.test(cleaned);
  }else if(cleaned.length == 10){
    return /^\d+$/.test(cleaned);
  }else{
    return false;
  }
}
```