
queue()
   .defer(d3.json, "/project4/hpi")
   .await(makeGraphs);

function makeGraphs(error, projectsJson) {
