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

  const DENOMVALUES ={
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
    return change
  }else{
    change.status = "OPEN"
    // make change algorithm
    // start from highest denom first
    cid.reverse()

    // determine the number of bills needed per denomination
    // d is the denom DENOMVALUES[d] is the value of each denom

    for(let d in DENOMVALUES){
      if((changeNeeded / DENOMVALUES[d]) >= 1){
        // value in each denomination
        let numBillsNeeded = Math.floor(changeNeeded / DENOMVALUES[d]) 
        console.log("numBillsNeeded: "+numBillsNeeded+" "+d)
        // check for number of bills in CID
        for(let i in cid){
          if(cid[i][0] == d){

            let numBillsAvail = Math.floor(cid[i][1]/DENOMVALUES[d]);
            console.log("numBillsAvail: "+numBillsAvail+" "+d);

            if(numBillsAvail == 0){
              continue
            }else if((numBillsAvail - numBillsNeeded) >= 0){
              console.log("has more avail or just enough")
              // add the denomination and value * number of bills to change object
              change["change"].push([d,DENOMVALUES[d]*numBillsNeeded]) 
              changeNeeded -= DENOMVALUES[d]*numBillsNeeded
            }else{
              console.log(numBillsAvail - numBillsNeeded)
              change["change"].push([d,DENOMVALUES[d]*numBillsAvail]) 
              changeNeeded -= DENOMVALUES[d]*numBillsAvail
            }
              changeNeeded = changeNeeded.toFixed(2)
              console.log(change["change"])
              console.log("changeNeeded: "+changeNeeded) 
            if(changeNeeded <= 0){
                break
            }
          }
        }


      }
    }
  }
  if(changeNeeded > 0){
    change.status = "INSUFFICIENT_FUNDS"
    change["change"] = []
  }
  return change
}
```