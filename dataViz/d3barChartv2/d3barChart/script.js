// resources used: https://d3-graph-gallery.com/graph/barplot_animation_start.html
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

  //change for version 7
d3.json(DATAURL).then((d)=>{
    const dataset = d["data"];

    // add svg and bar chart area
    const svg = d3.select("body")
        .append("svg")
        .attr("width", w)
        .attr("height", h);
    
    // define a tool tip as a div
    let tooltip = d3.select("body")
        .append("div")
        .attr("id","tooltip")
        .style("visibility","visible")
        .style("width","50px")
        .style("height","50px")
        .style("border","2px solid black")

    // scaling functions for axes and scale to fit chart area
    const heightScale = d3.scaleLinear()
                     .domain([0, d3.max(dataset, (d) => d[1])])
                     .range([0, (h-2*padding)]);

    const yAxisScale = d3.scaleLinear()
                .domain([0, d3.max(dataset, (d)=> d[1])])
                .range([h - padding,padding])

    const xScale = d3.scaleLinear()
                .domain([0,dataset.length-1])
                .range([padding, w - padding]);

    let datesArray = dataset.map((d) => {
        return new Date(d[0]); 
    });

    const xAxisScale = d3.scaleTime()
                    .domain([d3.min(datesArray),d3.max(datesArray)])
                    .range([padding,w - padding]);



    // set up axes for chart
    const yAxis = d3.axisLeft(yAxisScale);
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
        .attr("data-date",(d)=>{
            return d[0];
        })
        .attr("data-gdp",(d)=>{
            return d[1];
        })
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
            return yAxisScale(d[1]);
        })

        // control tooltip visiblity using mouseover, mouseon, mouseleave
        .on("mouseover",(event, d)=>{
            tooltip.transition()
                .style("visibility","visible")
            
            tooltip.text(d[0].slice(0,4)+" Q"+(dataset.indexOf(d)%4+1)+" \n$" + d[1].toLocaleString("en-US")+" Billions")
            document.querySelector('#tooltip').setAttribute('data-date', d[0])

        })
        .on("mouseon", (d)=>{
            tooltip.transition()
                .style("visibility","visible")
        })
        .on("mouseleave", (d)=>{
            tooltip.transition()
            .style("visibility","hidden")
        })

        .attr("fill","#3498DB")
        .attr("class","bar")
        .style("border","1px solid black")
    
    // animation of bar chart
    
     



});