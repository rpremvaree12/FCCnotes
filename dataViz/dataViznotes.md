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

## scatter plot
create circles

```javascript
<body>
  <script>
    const dataset = [
                  [ 34,    78 ],
                  [ 109,   280 ],
                  [ 310,   120 ],
                  [ 79,    411 ],
                  [ 420,   220 ],
                  [ 233,   145 ],
                  [ 333,   96 ],
                  [ 222,   333 ],
                  [ 78,    320 ],
                  [ 21,    123 ]
                ];


    const w = 500;
    const h = 500;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("circle")
       .data(dataset)
       .enter()
       .append("circle")
       .attr("cx", (d, i) => d[0])
       .attr("cy", (d, i) => h - d[1])
       .attr("r", 5);

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       // Add your code below this line
       .attr("x",(d)=>d[0]+5)
       .attr("y",(d)=>h-d[1])
       .text((d)=>d[0]+", "+d[1])


       // Add your code above this line
  </script>
</body>
```
## linear scale
```javascript
  <body>
  <script>
    // Add your code below this line
    const scale = d3.scaleLinear();

    //map input(domain) values to output(range) values
    scale.domain([250,500])
    .range([10,150])



    // Add your code above this line
    const output = scale(50);
    d3.select("body")
      .append("h2")
      .text(output);
  </script>
</body>
```

## min() and max() scaling

```javascript
<body>
  <script>
    const positionData = [[1, 7, -4],[6, 3, 8],[2, 9, 3]]
    // Add your code below this line

    const output = d3.max(positionData, (d)=>d[2]); // Change this line

    // Add your code above this line

    d3.select("body")
      .append("h2")
      .text(output)
  </script>
</body>
```

scale using max()
```javascript
<body>
  <script>
    const dataset = [
                  [ 34,    78 ],
                  [ 109,   280 ],
                  [ 310,   120 ],
                  [ 79,    411 ],
                  [ 420,   220 ],
                  [ 233,   145 ],
                  [ 333,   96 ],
                  [ 222,   333 ],
                  [ 78,    320 ],
                  [ 21,    123 ]
                ];

    const w = 500;
    const h = 500;

    // Padding between the SVG canvas boundary and the plot
    const padding = 30;

    // Create an x and y scale

    const xScale = d3.scaleLinear()
                    .domain([0, d3.max(dataset, (d) => d[0])])
                    .range([padding, w - padding]);

    // Add your code below this line

    const yScale = d3.scaleLinear().domain([0,d3.max(dataset,(d)=>d[1])]).range([h-padding, padding]);


    // Add your code above this line

    const output = yScale(411); // Returns 30
    d3.select("body")
      .append("h2")
      .text(output)
  </script>
</body>
```


## XML request
xml to update a page without reloading a page