## palindrome checker

```javascript
function palindrome(str){
  let regex = /[_\W]/gi; //match all underscores and non-word characters (symbols)
  console.log(str.match(regex))
  let cleaned = str.replace(regex,"").toLowerCase();
  let reversed = cleaned.split('').reverse().join('')
  console.log("cleaned: "+cleaned)
  console.log("reversed: "+reversed)
  return reversed === cleaned;
}
```

## Caesar Cipher

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
  let regex = /\D/gi   // \D finds all non digits
  // console.log(str.match(regex))
  let regexParenthesis = /\([^)]*\)|\[[^\]]*\]/
  if(str.match(regexParenthesis) != null && str[0] == "(" || str[0]==1){
    console.log("matching () found")
    console.log(str.match(regexParenthesis))
    return str.match(regexParenthesis)[0].length == 5
  }else if(!/\)/.test(str)){
    console.log("no parenthesis found")
    let cleaned = str.replace(regex,"");
    console.log("cleaned "+cleaned);
    return cleaned.length == 10 || cleaned.length ==11
  }else{
    return false
  }

  }
```

## cash register

```javascript
function checkCashRegister(price, cash, cid) {
  let change = {
    status: "",
    change: []
  };

  // find total in cash drawer
  let totalcid = 0;
  for(let i in cid){
    totalcid += cid[i][1]
  }
  totalcid = totalcid.toFixed(2)
  console.log("total in drawer "+totalcid)

  // change needed
  let changeNeeded = cash - price;
  console.log(changeNeeded)

  // check if changed needed is more than cid or cannot give exact change
  if( changeNeeded > totalcid){
    change.status = "INSUFFICIENT_FUNDS";
  }else if(changeNeeded == totalcid){
    change.status = "CLOSED";
    change.change = cid;
  }else{
    change.status = "OPEN"
    // make change
    cid.reverse()
    for(let i in cid){
      console.log(cid[i])
      if(changeNeeded - cid[i] >= 0){
        change["change"].push(cid)
      }
    }
  }
  return change
}```