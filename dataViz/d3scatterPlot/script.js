const DATAURL = "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json";
let req = new XMLHttpRequest();

let w = 600;
let h = 600;
let padding = 50;
let xScale;
let xAxisScale;
let yScale;
let yAxisScale;
let xAxis;
let yAxis;
let dataset;

let svg = d3.select("#chart-area")
    .append("svg");

let drawCanvas = () => {
    svg.attr("height", h)
    .attr("width", w);
}

let generateScales = () =>{

    // scale coordinates of circles
    xScale = d3.scaleLinear()
    .domain([d3.min(dataset, (d)=>{
        return d["Year"]
    }), d3.max(dataset, (d)=>{
        return d["Year"]
    })])
    .range([padding,w-padding]);

    yScale = d3.scaleLinear()
    .domain([d3.min(dataset, (d)=>{
        return d["Seconds"]
    }), d3.max(dataset, (d)=> {
        return d["Seconds"]
    })])
    .range([h-padding, padding])

    // map data from year
    let yearArray = dataset.map((d) => {
        return new Date(d[0]); 
    });

    // scale for the x axis
    xAxisScale = d3.scaleTime()
    .domain([d3.min(yearArray),d3.max(yearArray)])
    .range([padding,w - padding]);
}

let drawScales = () =>{
    xAxis = d3.axisBottom(xAxisScale);
    svg.append("g")
    .attr("id","x-axis")
    .attr("transform", "translate(0," + (h - padding) + ")")
    .call(xAxis)
    
    // yAxis = d3.axisLeft(yAxisScale);
    // svg.append("g")
    // .attr("id","y-axis")
    // .attr("transform","translate("+padding+",0)")
    // .call(yAxis);
}

let drawPoints = () =>{
    svg.selectAll("circle")
    .data(dataset)
    .enter()
    .append("circle")
    .attr("cx", (d)=>{
        return xScale(d["Year"])
    })
    .attr("cy", (d)=>{
        return yScale(d["Seconds"])
    })
    .attr('r',5)

}

req.open("GET",DATAURL,true);
req.onload = () => {
    dataset = JSON.parse(req.responseText);
    console.log(dataset)
    drawCanvas();
    generateScales();
    drawScales();
    drawPoints();
}
req.send();