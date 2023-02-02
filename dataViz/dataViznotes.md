# D3.js

## select() and selectAll()
const anchor = d3.select("a");
The above example finds the first anchor tag on the page and saves an HTML node for it in the variable anchor.

```javascript

d3.select("body").append("h1").text("Learning D3");
d3.selectAll("li").text("list item");
```

## .data(dataset).enter()
When enter() is combined with the data() method, it looks at the selected elements from the page and compares them to the number of data items in the set. **If there are fewer elements than data items, it creates the missing elements.**

In other words, the data() method parses the data set an EVERYTHING chained after will run once for each data element


```html
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    // make body the node. select all h2. enter() combined with data(dataset) will check the number of items on the page and compared to the items in the dataset.
    d3.select("body").selectAll("h2").data(dataset).enter().append("h2").text("New Title");




    // Add your code above this line
  </script>
</body>
```

### javascript callback
A callback is a function passed as an argument to another function.
```javascript
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}
```

## .text()
can take in a callback function
```javascript
.text((d)=> d + " USD");
```

where d is each element in the dataset

## .style() using ternary operator
```javascript
.style("color", (d) => (d< 20? "red" : "green"));
```

## .attr()
used to add class or other attributes
use attr() for characteristics of the element and style() for the design of the element

## rect element
must be appended to svg element not body

## scaling
all appeared inverted since y = 0 at top left corner. To push everything down to the same level, use the following.
y = h - m * d