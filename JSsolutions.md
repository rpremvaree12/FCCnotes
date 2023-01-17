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
  const validPatterns = [
    /^\d{3}-\d{3}-\d{4}$/,
    /^\(\d{3}\)\d{3}-\d{4}$/,
    /^\(\d{3}\) \d{3}-\d{4}$/,
    /^\d{3} \d{3} \d{4}$/,
    /^\d{10}$/,
    /^1 \(\d{3}\) \d{3} \d{4}$/,
    /^1 \d{3}-\d{3}-\d{4}$/,
    /^1 \(\d{3}\) \d{3}-\d{4}$/,
    /^1\(\d{3}\)\d{3}-\d{4}$/,
    /^1 \d{3} \d{3} \d{4}$/
  ]
  for(let i in validPatterns){
    if(validPatterns[i].test(str)){
      console.log(validPatterns[i]);
      return true;
    }
  }
  // if str doesn't match anything in the regex array, then it's not valid
  return false
}
```

## cash register

```javascript
function checkCashRegister(price, cash, cid) {
  let change = {
    status: "",
    change: []
  };

  const VALUES ={
    "ONE HUNDRED": 100,
    "TWENTY": 20,
    "TEN": 10,
    "FIVE": 5,
    "ONE": 1,
    "QUARTER": 0.25,
    "DIME": 0.10,
    "PENNY": 0.01
  }

  // find total in cash drawer
  let totalcid = 0;
  for(let i in cid){
    totalcid += cid[i][1]
  }
  totalcid = totalcid.toFixed(2)
  console.log("total in drawer "+totalcid)

  // change needed
  let changeNeeded = cash - price;

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

    for(let i in VALUES){
      if() >= 0){
        console.log(cid[i][1]) // value in each denomination

        change["change"].push() // add amount to change object
      }
    }
  }
  return change["change"]
}
}```