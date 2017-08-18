/**
 * Created by zzq on 2017/7/5.
 */
define(['app', 'loadCss', 'echarts', 'bmap', 'myService'], function(app, loadCss, echarts) {

    app.controller('dev_areaController', function($scope) {
        var myChart = echarts.init(document.getElementById('main'));
        var myData = [
            { name: '北京', value: [116, 39, 100] },
            { name: '海门', value: [121.15, 31.89, 90] },
            { name: '鄂尔多斯', value: [109.781327, 39.608266, 120] },
            { name: '招远', value: [120.38, 37.35, 142] },
            { name: '舟山', value: [122.207216, 29.985295, 123] }
        ]
        var option = {
            title: {
                text: '设备区域分布',
                subtext: 'dev',
                left: 'center'
            },
            tooltip: {
                trigger: 'item',
                enterable: true
            },
            bmap: {
                center: [116, 39],
                zoom: 10,
                roam: true,
                mapStyle: {
                    styleJson: [
                        {
                            "featureType": "local",
                            "elementType": "geometry",
                            "stylers": {
                                "visibility": "on"
                            }
                        }
                    ]
                }
            },
            visualMap: { // 视觉映射组件
                type: 'continuous',
                min: 0,
                max: 200,
                calculable: true,
                inRange: {
                    color: ['#50a3ba', '#eac736', '#d94e5d']
                },
                textStyle: {
                    color: '#fff'
                }
            },
            series: [{
                name: 'IPC',
                type: 'scatter', // 散点图
                coordinateSystem: 'bmap', // 坐标系使用bmap
                data: myData,
                // symbol: "image//img/lamp.png",
                symbol: 'image://./res/img/lamp.png',
                symbolSize:20,
                label: {
                    normal: {
                        formatter: '',
                        position: 'right',
                        show: false,
                        textStyle: { color: 'red' }
                    },
                    emphasis: {
                        show: true
                    }
                },
            }]
        }
        myChart.showLoading(); // 显示加载中动画
        myChart.hideLoading(); // 关闭动画
        myChart.setOption(option);
        myChart.on('click', function(param) {
            console.log(param)
        });
    })
})