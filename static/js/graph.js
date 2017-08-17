queue()
   .defer(d3.json, "/project4/hpi")
   .await(makeGraphs);

function makeGraphs(error, hpiProject) {



	//Create a Crossfilter instance
    var ndx = crossfilter(hpiProject);

    //Define Dimensions
    var ccDim = ndx.dimension(function (d) {
        return d["Country"];  //  matches
    });

    var indexStatus = ndx.dimension(function (d) {
       return d["Happy Planet Index"];
   });

    //Calculate metrics
    var worldMap = ccDim.group().reduceSum(dc.pluck('Happy Planet Index'));
    var numProjectsByIndexStatus = indexStatus.group();

    //Charts   
    var worldChart = dc.geoChoroplethChart("#World-chart");    
    var colors = d3.scale.linear().range(["#17202A", "#424949", "#4D5656", "#626567", "#7B7D7D", "#B3B6B7", "#D0D3D4"]);
    var indexStatusChart = dc.pieChart("#index-chart");

    d3.json("/static/lib/js/countries.json", function(worldcountries) {
    worldChart
        .dimension(ccDim)
        .width(1000)
        .height(450)
        .group(worldMap)
        .colors(d3.scale.quantize().range(["#17202A", "#424949", "#4D5656", "#626567", "#7B7D7D", "#B3B6B7", "#D0D3D4"]))
        .colorDomain([0, 90])
        .colorCalculator(function (d) { return d ? worldChart.colors()(d) : '#ccc'; })
        .overlayGeoJson(worldcountries.features, "country", function(d) {
            return d.properties.name;
        })
        .projection(d3.geo.mercator()
        );

    indexStatusChart
       .height(200)
       .radius(90)
       .innerRadius(40)
       .transitionDuration(1500)
       .dimension(indexStatus)
       .group(numProjectsByIndexStatus);

   	dc.renderAll();
   	});
}
