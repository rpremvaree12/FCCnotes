const DATAURL = "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json";
let req = new XMLHttpRequest();

let w = 500;
let h = 500;
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
    let yearArray = dataset.map((d) => {
        return new Date(d[0]); 
    });

    xAxisScale = d3.scaleTime()
    .domain([d3.min(yearArray),d3.max(yearArray)])
    .range([padding,w - padding]);

    xScale = () =>{

    }
    yScale = () =>{

    }
    d3.axisBottom(xAxisScale);
    svg.append("g")
        .attr("id","x-axis")
        .attr("transform", "translate(0," + (h - padding) + ")")
        .call(xAxis)
}

let drawScales = () =>{

}

let drawPoints = () =>{
    svg.selectAll("cirlce")
    .data(dataset)
    .enter()
    .append("circle")
    .attr("cx", w/2)
    .attr("cy", h/2)
    .attr('r',5)

}

req.open("GET",DATAURL,true);
req.onload = () => {
    dataset = JSON.parse(req.responseText);
    drawCanvas();
    generateScales();
    drawScales();
    drawPoints();
}
req.send();