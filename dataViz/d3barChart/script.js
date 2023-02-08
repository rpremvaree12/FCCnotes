
const DATAURL = "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json";
const w = "100%";
const h = 1000;

// add and format h1 tag
d3.select("body")
  .append("h1")
  .text("United States GDP")
  .attr("id","title")
  .style("text-align", "center")


d3.json(DATAURL, (d) => {
    const dataset = d["data"];

    // add svg and bar chart area
    const svg = d3.select("body")
        .append("svg")
        .attr("width", w)
        .attr("height", h)
        .style("border","1px solid black")


    // draw a rect for each item in the dataset
    svg.selectAll("rect")

        // data and enter acts like a forEach

        .data(dataset)
        .enter()
        .append("rect")
        .style("fill","#3498DB")
        .attr("width",5)

        // position each rect horizontally based on data point
        .attr("x", (d,i)=>{
            // position each rect based on its index
            return i*7;
        })

        // make the height of each rect based off the GDP value
        .attr("height", (d,i)=>{
            // GDP value is at 1
            return d[1];
        })
        // .attr("x",0)
        .attr("y", (d,i)=>{
            // invert the rect so that rect is "pushed down" relative to the top
            return h - 0.25 * d[1]
        })
        
})


