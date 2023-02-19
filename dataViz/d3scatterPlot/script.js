const DATAURL = "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json";
let w = 500px;
let h = 500px;

let svg = d3.select("#chart-area")
    .append("svg")
    .attr("width",w)
    .attr("height",h)