google.charts.load('current', {'packages':['corechart']});

google.charts.setOnLoadCallback(drawSeriesChart);

function drawSeriesChart() {

  var data = google.visualization.arrayToDataTable([
    ['ID',              'Age',    'Impact',      'How',             'Enjoyment'],
    ['Appendix',          16,       1,      'Out of my control',        3],
    ['Got Robbed',        4,        5,      'Out of my control',        1],
    ['Married',           25,       5,      'A choice',                 3],
    ['Motorcycle',        32,       2,      'A choice',                 3],
    ['Skydive',           33,       3,      'A choice',                 5],
    ['Northern Lights',   39,       2,      'A choice',                 5],
    ['Dad died',          28,       5,      'Out of my control',        1],
    ['Learned to Code',   40,       5,      'A choice',                 4],
    ['3rd tattoo',        31,       1,      'A choice',                 3],
    ['Learn to hunt',     37,       2,      'A choice',                 5],
    ['Got Spanky',        27,       2,      'A choice',                 5],
    ['Bought 1st car',    24,       1,      'A choice',                 2],
    ['1st Apartment',     19,       3,      'A choice',                 3],
    ['#Vanlife',          37,       5,      'A choice',                 5],
    [ ,                45,       1,      'A choice',                 1],
  ]);

  let options = {
    title: 'Correlation between age, impact,' +
           'and enjoyment of major life experiences',
    hAxis: {title: 'Age'},
    vAxis: {title: 'Impact'},
    bubble: {textStyle: {fontSize: 11}}      };

  let chart = new google.visualization.BubbleChart(document.getElementById('chartArea'));
  chart.draw(data, options);
}
