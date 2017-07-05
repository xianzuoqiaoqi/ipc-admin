/**
 * Created by zzq on 2017/7/5.
 */
define(['app', 'loadCss', 'echarts', 'bmap', 'myService', 'chinaMap'], function (app, loadCss, echarts) {

    app.controller('dev_areaController', function ($scope) {
        console.log(echarts);

        var myChart = echarts.init(document.getElementById('main'));
        var myData = [
            {name: '北京', value: [116, 39, 100]},
            {name: '海门', value: [121.15, 31.89, 90]},
            {name: '鄂尔多斯', value: [109.781327, 39.608266, 120]},
            {name: '招远', value: [120.38, 37.35, 142]},
            {name: '舟山', value: [122.207216, 29.985295, 123]}
        ]
        var option = {
            title: {
                text: '设备区域分布',
                subtext: '',
                left: 'center'
            },
            bmap: {
                center: [116, 39],
                zoom: 5,
                roam: true,
                mapStyle: {
                    styleJson: [{   // 水
                        'featureType': 'water',
                        'elementType': 'all',
                        'stylers': {
                            'color': '#d1d1d1'
                        }
                    }, {            // 陆地
                        'featureType': 'land',
                        'elementType': 'all',
                        'stylers': {
                            'color': '#f3f3f3'
                        }
                    }, {            // 铁路
                        'featureType': 'railway',
                        'elementType': 'all',
                        'stylers': {
                            'visibility': 'off'
                        }
                    }, {            // 高速
                        'featureType': 'highway',
                        'elementType': 'all',
                        'stylers': {
                            'visibility': 'off'
                        }
                    }, {
                        'featureType': 'highway',
                        'elementType': 'labels',
                        'stylers': {
                            'visibility': 'off'
                        }
                    }, {
                        'featureType': 'arterial',
                        'elementType': 'geometry',
                        'stylers': {
                            'color': '#fefefe'
                        }
                    }, {
                        'featureType': 'arterial',
                        'elementType': 'geometry.fill',
                        'stylers': {
                            'color': '#fefefe'
                        }
                    }, {
                        'featureType': 'poi',
                        'elementType': 'all',
                        'stylers': {
                            'visibility': 'off'
                        }
                    }, {
                        'featureType': 'green',
                        'elementType': 'all',
                        'stylers': {
                            'visibility': 'off'
                        }
                    }, {
                        'featureType': 'subway',
                        'elementType': 'all',
                        'stylers': {
                            'visibility': 'off'
                        }
                    }, {
                        'featureType': 'manmade',
                        'elementType': 'all',
                        'stylers': {
                            'color': '#d1d1d1'
                        }
                    }, {
                        'featureType': 'local',
                        'elementType': 'all',
                        'stylers': {
                            'color': '#d1d1d1'
                        }
                    }, {
                        'featureType': 'arterial',
                        'elementType': 'labels',
                        'stylers': {
                            'visibility': 'off'
                        }
                    }, {
                        'featureType': 'boundary',
                        'elementType': 'all',
                        'stylers': {
                            'color': '#fefefe'
                        }
                    }, {
                        'featureType': 'building',
                        'elementType': 'all',
                        'stylers': {
                            'color': '#d1d1d1'
                        }
                    }, {
                        'featureType': 'label',
                        'elementType': 'labels.text.fill',
                        'stylers': {
                            'color': '#999999'
                        }
                    }]
                }
            },
            visualMap: {	// 视觉映射组件
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
            series: [
                {
                    name: 'IPC',
                    type: 'scatter',            // 散点图
                    coordinateSystem: 'bmap',   // 坐标系使用bmap
                    data: myData
                }
            ]
        }
        myChart.showLoading();  // 显示加载中动画
        myChart.hideLoading();  // 关闭动画
        myChart.setOption(option);
        myChart.on('click', function (param) {
            console.log(param)
        });
    })
})