window.onresize = function() { 
    window.location.reload(); 
    console.log("Triggered");
}

queue()
   .defer(d3.json, "/project4/hpi")
   .await(makeGraphs);

function makeGraphs(error, hpiProject) {

    var mapWidth = $("#World-chart").width();
    var mapHeight = mapWidth / 2.222;
    var mapScale = mapWidth / 6.667;
    var translateX = mapWidth / 2;
    var translateY = mapHeight / 1.35;

    console.log(mapWidth);

	//Create a Crossfilter instance
    var ndx = crossfilter(hpiProject);

    //Define Dimensions
    var ccDim = ndx.dimension(function (d) {
        return d["Country"];  //  matches
    });

    var indexStatus = ndx.dimension(function (d) {
       return d["Happy Planet Index"];
   });

    var populationDim = ndx.dimension(function (d) {
      return d["Population"];
   });

    var lifeExpectancy = ndx.dimension(function (d) {
       return d["Life Expectancy"];
   });

    //Calculate metrics
    var worldMap = ccDim.group().reduceSum(dc.pluck('Happy Planet Index'));
    var numProjectsByIndexStatus = indexStatus.group();
    var totalPopulation = populationDim.group().reduceSum(dc.pluck('Population'));
    var lifeExpectancyYears = lifeExpectancy.group();

    //Charts   
    var worldChart = dc.geoChoroplethChart("#World-chart");    
    var colors = d3.scale.linear().range(["#17202A", "#424949", "#4D5656", "#626567", "#7B7D7D", "#B3B6B7", "#D0D3D4"]);
    var indexStatusChart = dc.pieChart("#index-chart");
    var numberProjectsND = dc.numberDisplay("#number-projects-nd");
    var lifeExpectancyChart = dc.pieChart("#life-expectancy-chart");

    d3.json("/static/lib/js/countries.json", function(worldcountries) {
    worldChart
        .dimension(ccDim)
        .width(mapWidth)
        .height(mapHeight)
        .group(worldMap)
        .colors(d3.scale.quantize().range(["#17202A", "#424949", "#4D5656", "#626567", "#7B7D7D", "#B3B6B7", "#D0D3D4"]))
        .colorDomain([0, 90])
        .colorCalculator(function (d) { return d ? worldChart.colors()(d) : '#ccc'; })
        .overlayGeoJson(worldcountries.features, "country", function(d) {
            return d.properties.name;
        })
        .projection(d3.geo.mercator()
        .translate([translateX,translateY])
            .scale(mapScale)
          );

    indexStatusChart
       .height(200)
       .radius(80)
       .innerRadius(30)
       .transitionDuration(1500)
       .dimension(indexStatus)
       .group(numProjectsByIndexStatus);

    numberProjectsND
       .formatNumber(d3.format(","))
       .dimension(populationDim)
       .group(totalPopulation);
       
    lifeExpectancyChart
       .height(200)
       .radius(80)
       .innerRadius(30)
       .transitionDuration(1500)
       .dimension(lifeExpectancy)
       .group(lifeExpectancyYears);

   	dc.renderAll();
   	});
}

