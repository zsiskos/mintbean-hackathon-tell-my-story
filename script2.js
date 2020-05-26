google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawSeriesChart);

function drawSeriesChart() {
  let data = google.visualization.arrayToDataTable([
    ['ID',              'Age',    'Impact',      'How',             'Enjoyment'],
    ['Appendectomy',      16,       1,      'Out of my control',        2],
    ['Got Robbed',        6,        5,      'Out of my control',        1],
    ['Wedding',           25,       5,      'A choice',                 3],
    ['Motorcycle',        32,       1.5,      'A choice',                 3],
    ['Skydive',           33,       2.25,      'A choice',                 5],
    ['Northern Lights',   39,       3.75,      'A choice',                 5],
    ['Dad died',          28,       5,      'Out of my control',        1],
    ['Learned to Code',   40,       4.5,      'A choice',                 4],
    ['3rd tattoo',        31,       1,      'A choice',                 3],
    ['Learn to hunt',     36,       4,      'A choice',                 4],
    ['Got Spanky',        27,       3.2,      'A choice',                 5],
    ['Bought 1st car',    24,       1,      'A choice',                 2],
    ['1st Apartment',     19,       3,      'A choice',                 3],
    ['#Vanlife',          37,       5,      'A choice',                 5],
  ]);

  let options = {
    title: 'Correlation b/w major life experiences, age, impact, and enjoyment',
    height: 800,
    hAxis: {
      title: 'Age',
      maxValue: 45,
    },
    vAxis: {
      title: 'Impact',
      maxValue: 5.5,
    },
    bubble: {
      textStyle: {
        fontSize: 11,
        auraColor: 'none'
      }
    },       
  };

  let chart = new google.visualization.BubbleChart(document.getElementById('chartArea'));
  chart.draw(data, options);

  
}

$(window).resize(function(){
  drawSeriesChart();
});