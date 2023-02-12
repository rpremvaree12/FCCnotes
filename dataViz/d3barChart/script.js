
const DATAURL = "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json";
const w = 1200;
const h = 1000;
const padding = 60;

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
        .attr("height", h);
    
    // scaling functions for axes and scale to fit chart area
    const heightScale = d3.scaleLinear()
                     .domain([0, d3.max(dataset, (d) => d[1])])
                     .range([0, h]);

    const yScale = d3.scaleLinear()
                .domain([0, d3.max(dataset, (d)=> d[1])])
                .range([h,0])

    const xScale = d3.scaleLinear()
                .domain([0,dataset.length-1])
                .range([0,w - padding]);

    let datesArray = dataset.map((d) => {
        return new Date(d[0]); 
    })
    const xAxisScale = d3.scaleTime()
                    .domain([d3.min(datesArray),d3.max(datesArray)])
                    .range([0,w - padding]);



    // set up axes for chart
    const yAxis = d3.axisLeft(yScale);
    svg.append("g")
        .attr("id","y-axis")
        .attr("transform", "translate(" + padding + ",0)")
        .call(yAxis);

    const xAxis = d3.axisBottom(xAxisScale);
    svg.append("g")
        .attr("id","x-axis")
        .attr("transform", "translate(0," + (h - padding) + ")")
        .call(xAxis)


    // draw a rect for each item in the dataset
    svg.selectAll("rect")

        // data() and enter() acts like a forEach

        .data(dataset)
        .enter()
        .append("rect")
        .attr("width",(w / dataset.length))

        // position each rect horizontally based on data point
        .attr("x", (d,i)=>{
            // position each rect based on its index
            return xScale(i)
        })

        // make the height of each rect based off the GDP value
        .attr("height", (d,i)=>{
            // GDP value is at 1
            return heightScale(d[1]);
        })

        .attr("y", (d,i)=>{
            // invert the rect so that rect is "pushed down" relative to the top
            return h - heightScale(d[1]);
        })

        .attr("fill","#3498DB")
        .attr("class","bar")
        .style("border","1px solid black")
     
})


