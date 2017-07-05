/**
 * Created by zzq on 2017/7/3.
 */
define(['app', 'loadCss', 'echarts', 'myService'], function (app, loadCss, echarts) {

    loadCss.loadCss('res/css/item1.css');
    app.controller('item1Controller', function ($scope) {
        console.log(echarts);
        var myChart = echarts.init(document.getElementById('main1'));

        var option = {
            title: {
                text: '用户列表'
            },
            tooltip: {},
            legend: {
                data: ['销量']
            },
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5,20,14,32,10,1]
            }]
        }

        myChart.setOption(option);
    })
})