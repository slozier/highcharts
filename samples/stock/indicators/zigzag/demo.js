
$.getJSON('https://cdn.rawgit.com/highcharts/highcharts/v6.0.4/samples/data/aapl-ohlc.json', function (data) {

    Highcharts.stockChart('container', {

        rangeSelector: {
            selected: 2
        },

        title: {
            text: 'AAPL Stock Price'
        },

        legend: {
            enabled: true
        },

        plotOptions: {
            series: {
                showInLegend: true
            }
        },

        series: [{
            type: 'ohlc',
            id: 'aapl',
            name: 'AAPL Stock Price',
            data: data
        }, {
            type: 'zigzag',
            linkedTo: 'aapl'
        }, {
            type: 'zigzag',
            linkedTo: 'aapl',
            params: {
                deviation: 5
            }
        }]
    });
});
