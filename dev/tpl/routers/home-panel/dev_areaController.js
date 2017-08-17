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
                            'featureType': 'land',     //调整土地颜色
                            'elementType': 'geometry',
                            'stylers': {
                                'color': '#081734'
                            }
                        },
                        {
                            'featureType': 'building',   //调整建筑物颜色
                            'elementType': 'geometry',
                            'stylers': {
                                'color': '#04406F'
                            }
                        },
                        {
                            'featureType': 'building',   //调整建筑物标签是否可视
                            'elementType': 'labels',
                            'stylers': {
                                'visibility': 'off'
                            }
                        },
                        {
                            'featureType': 'highway',     //调整高速道路颜色
                            'elementType': 'geometry',
                            'stylers': {
                                'color': '#015B99'
                            }
                        },
                        {
                            'featureType': 'highway',    //调整高速名字是否可视
                            'elementType': 'labels',
                            'stylers': {
                                'visibility': 'off'
                            }
                        },
                        {
                            'featureType': 'arterial',   //调整一些干道颜色
                            'elementType': 'geometry',
                            'stylers': {
                                'color':'#003051'
                            }
                        },
                        {
                            'featureType': 'arterial',
                            'elementType': 'labels',
                            'stylers': {
                                'visibility': 'off'
                            }
                        },
                        {
                            'featureType': 'green',
                            'elementType': 'geometry',
                            'stylers': {
                                'visibility': 'off'
                            }
                        },
                        {
                            'featureType': 'water',
                            'elementType': 'geometry',
                            'stylers': {
                                'color': '#044161'
                            }
                        },
                        {
                            'featureType': 'subway',    //调整地铁颜色
                            'elementType': 'geometry.stroke',
                            'stylers': {
                                'color': '#003051'
                            }
                        },
                        {
                            'featureType': 'subway',
                            'elementType': 'labels',
                            'stylers': {
                                'visibility': 'off'
                            }
                        },
                        {
                            'featureType': 'railway',
                            'elementType': 'geometry',
                            'stylers': {
                                'visibility': 'off'
                            }
                        },
                        {
                            'featureType': 'railway',
                            'elementType': 'labels',
                            'stylers': {
                                'visibility': 'off'
                            }
                        },
                        {
                            'featureType': 'all',     //调整所有的标签的边缘颜色
                            'elementType': 'labels.text.stroke',
                            'stylers': {
                                'color': '#313131'
                            }
                        },
                        {
                            'featureType': 'all',     //调整所有标签的填充颜色
                            'elementType': 'labels.text.fill',
                            'stylers': {
                                'color': '#FFFFFF'
                            }
                        },
                        {
                            'featureType': 'manmade',
                            'elementType': 'geometry',
                            'stylers': {
                                'visibility': 'off'
                            }
                        },
                        {
                            'featureType': 'manmade',
                            'elementType': 'labels',
                            'stylers': {
                                'visibility': 'off'
                            }
                        },
                        {
                            'featureType': 'local',
                            'elementType': 'geometry',
                            'stylers': {
                                'visibility': 'off'
                            }
                        },
                        {
                            'featureType': 'local',
                            'elementType': 'labels',
                            'stylers': {
                                'visibility': 'off'
                            }
                        },
                        {
                            'featureType': 'subway',
                            'elementType': 'geometry',
                            'stylers': {
                                'lightness': -65
                            }
                        },
                        {
                            'featureType': 'railway',
                            'elementType': 'all',
                            'stylers': {
                                'lightness': -40
                            }
                        },
                        {
                            'featureType': 'boundary',
                            'elementType': 'geometry',
                            'stylers': {
                                'color': '#8b8787',
                                'weight': '1',
                                'lightness': -29
                            }
                        }]
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