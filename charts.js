import {columnDefs,DiamondData} from './datafortrainees.js'

google.charts.load('current', {'packages':['corechart']});

google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  // shape bar chart data
  const shapeCounts = DiamondData.reduce((acc, item) => {
    acc[item.shape] = (acc[item.shape] || 0) + 1;
    return acc;
  }, {});

  // Color bar chart data
  const colorCounts = DiamondData.reduce((acc, item) => {
    acc[item.color] = (acc[item.color] || 0) + 1;
    return acc;
  }, {});
  // Carat interval data
  const caratCounts = DiamondData.reduce((acc, item) => {
    acc[item.carat] = (acc[item.carat] || 0) + 1;
    return acc;
  }, {});

  // Carat interval data
  const calarityCounts = DiamondData.reduce((acc, item) => {
    acc[item.clarity] = (acc[item.clarity] || 0) + 1;
    return acc;
  }, {});

  // Polish interval data
  const polishCounts = DiamondData.reduce((acc, item) => {
    acc[item.polish] = (acc[item.polish] || 0) + 1;
    return acc;
  }, {});

  // Create a data table for shape bar chart
  var shapeData = new google.visualization.DataTable();
  shapeData.addColumn('string', 'Lab');
  shapeData.addColumn('number', 'Count');

  // Populate the data table with shape counts
  for (const shape in shapeCounts) {
    shapeData.addRow([shape, shapeCounts[shape]]);
  }

  // Set chart options for shape bar chart
  var shapeOptions = {
    title: 'Shape Counts',
    bars: 'horizontal',
    legend: { position: 'none' },
  };

  // Instantiate and draw the shape bar chart
  var shapeChart = new google.visualization.BarChart(document.getElementById('chart_lab'));
  shapeChart.draw(shapeData, shapeOptions);

  // Create a data table for color bar chart
  var colorData = new google.visualization.DataTable();
  colorData.addColumn('string', 'Color');
  colorData.addColumn('number', 'Count');

  // Populate the data table with color counts
  for (const color in colorCounts) {
    colorData.addRow([color, colorCounts[color]]);
  }
  
  // Set chart options for color bar chart
  var colorOptions = {
    title: 'Color Counts',
    bars: 'horizontal',
    legend: { position: 'none' },
  };
  // Instantiate and draw the color bar chart
  var colorChart = new google.visualization.BarChart(document.getElementById('chart_color'));
  colorChart.draw(colorData, colorOptions);

  // Create a data table for calarity bar chart
  var calarityData = new google.visualization.DataTable();
  calarityData.addColumn('string', 'Color');
  calarityData.addColumn('number', 'Count');

  // Populate the data table with calarity counts
  for (const calarity in calarityCounts) {
    calarityData.addRow([calarity, calarityCounts[calarity]]);
  }
  
  // Set chart options for calarity bar chart
  var calarityOptions = {
    title: 'Calarity Counts',
    bars: 'horizontal',
    legend: { position: 'none' },
  };
  // Instantiate and draw the color bar chart
  var calarityChart = new google.visualization.BarChart(document.getElementById('chart_calarity'));
  calarityChart.draw(calarityData, calarityOptions);

  // Create a data table for polish bar chart
  var polishData = new google.visualization.DataTable();
  polishData.addColumn('string', 'Color');
  polishData.addColumn('number', 'Count');

  // Populate the data table with polish counts
  for (const polish in polishCounts) {
    polishData.addRow([polish, polishCounts[polish]]);
  }
  
  // Set chart options for polish bar chart
  var polishOptions = {
    title: 'Polish Counts',
    bars: 'horizontal',
    legend: { position: 'none' },
  };
  // Instantiate and draw the color bar chart
  var polishChart = new google.visualization.BarChart(document.getElementById('chart_polish'));
  polishChart.draw(polishData, polishOptions);
}
