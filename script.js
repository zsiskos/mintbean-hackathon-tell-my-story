google.charts.load('current', {'packages':['corechart']});

google.charts.setOnLoadCallback(drawSeriesChart);

function drawSeriesChart() {

  var data = google.visualization.arrayToDataTable([
    ['ID',    'Age',        'Impact',         'How',       'Enjoyment'],
    ['Robbed',    4,              5,      'Out of her control',  33739900],
    ['Married',    25,              5,      'A choice',         81902307],
    ['Motorcycle',    32,               2,      'A choice',         5523095],
    ['Skydive',    27,              3,      'A choice',    79716203],
  ]);

  let options = {
    title: 'Correlation between age, impact,' +
           'and enjoyment of Zoë\'s life experiences',
    hAxis: {title: 'Age'},
    vAxis: {title: 'Impact'},
    bubble: {textStyle: {fontSize: 11}}      };

  let chart = new google.visualization.BubbleChart(document.getElementById('chartArea'));
  chart.draw(data, options);
}
