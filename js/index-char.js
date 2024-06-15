// 柱状图1
(function () {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".bar .char"));
    // 指定图表的配置项和数据
    var option = {
        color: ["#2f89cf"],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
            textStyle: {
                fontSize: '10'
            }
        },
        grid: {
            left: "0%",
            top: "10px",
            right: "0%",
            bottom: "4%",
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                // x轴中更换data数据
                data: ["旅游行业", "教育培训", "游戏行业", "医疗行业", "电商行业", "社交行业", "金融行业"],
                axisTick: {
                    alignWithLabel: true
                },
                // 设置x轴标签文字样式
                // x轴的文字颜色和大小
                axisLabel: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: "6"
                },
                //  x轴样式不显示
                axisLine: {
                    show: false,
                    // 如果想要设置单独的线条样式
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                        width: 2,
                        type: "solid"
                    }
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                // y 轴文字标签样式
                axisLabel: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: "6"
                },
                // y轴线条样式
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                        width: 1,
                        type: "solid"
                    }
                },
                // y 轴分隔线样式
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)"
                    }
                }
            }
        ],
        series: [
            {
                name: '直接访问',
                type: 'bar',
                barWidth: '35%',
                // series 更换数据
                data: [200, 300, 300, 900, 1500, 1200, 600],
                itemStyle: {
                    // 修改柱子圆角
                    barBorderRadius: 2
                }
            }
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    // 让图表跟随屏幕自适应
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();
// 柱状图2
(function () {
    var myChart = echarts.init(document.querySelector(".bar2 .char"));
    // 声明颜色数组
    var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
    var option = {
        tooltip: {
            show: true,
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
            showContent: false

        },
        grid: {
            top: "10%",
            left: "22%",
            bottom: "10%",
            containLabel: false
        },
        xAxis: {
            // 不显示x轴
            show: false,
        },
        yAxis: [
            {
                type: 'category',
                // 反向坐标
                inverse: true,
                data: ["HTML5", "CSS3", "javascript", "VUE", "NODE"],
                //不显示y轴线条
                axisLine: {
                    show: false
                },
                // 不显示刻度
                axisTick: {
                    show: false
                },
                axisLabel: {
                    color: "#fff",
                    fontSize: "6"
                },
            },
            {
                show: true,
                inverse: true,
                data: [702, 350, 610, 793, 664],
                // 不显示y轴的线
                axisLine: {
                    show: false
                },
                // 不显示刻度
                axisTick: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        fontSize: 6,
                        color: "#fff"
                    }
                }
            }
        ],
        series: [
            {
                name: '条',
                type: 'bar',
                data: [70, 34, 60, 78, 69],
                // 柱子之间的距离
                barCategoryGap: 50,
                //柱子的宽度
                barWidth: 10,
                // 柱子设为圆角
                itemStyle: {
                    barBorderRadius: 20,
                    // params 传进来的是柱子对象
                    color: function (params) {
                        var num = myColor.length;
                        // dataIndex 是当前柱子的索引号
                        return myColor[params.dataIndex % num]
                    }
                },
                // 图形上的文本标签
                label: {
                    normal: {
                        show: true,
                        // 图形内显示
                        position: "inside",
                        // 文字的显示格式
                        formatter: "{c}%",
                        color: "#fff",
                        fontSize: "8"
                    }
                },
                yAxisIndex: 0,

            },
            {
                name: '框',
                type: 'bar',
                data: [100, 100, 100, 100, 100],
                barCategoryGap: 50,
                barWidth: 15,
                itemStyle: {
                    color: "none",
                    borderColor: "#00c1de",
                    borderWidth: 1,
                    barBorderRadius: 20
                },
                yAxisIndex: 1,
            }
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    // 让图表跟随屏幕自适应
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();
// 折线图1
(function () {
    var myChart = echarts.init(document.querySelector(".line .char"));
    var yearData = [
        {
            year: '2020',  // 年份
            data: [  // 两个数组是因为有两条线
                [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
                [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
            ]
        },
        {
            year: '2021',  // 年份
            data: [  // 两个数组是因为有两条线
                [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
                [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
            ]
        }
    ];
    var option = {
        color: ['#00f2f1', '#ed3f35'],
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            textStyle: {
                color: '#4c9bfd', // 图例文字颜色
                fontSize: "6"
            },
            right: '10%', // 距离右边10%
        },
        grid: {
            top: '20%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            show: true,// 显示边框
            borderColor: '#012f4a',// 边框颜色
            containLabel: true // 包含刻度文字在内
        },
        xAxis: {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisTick: {
                show: false // 去除刻度线
            },
            axisLabel: {
                color: '#4c9bfd', // 文本颜色
                fontSize: "6"
            },
            axisLine: {
                show: false // 去除轴线
            },
            boundaryGap: false  // 去除轴内间距
        },
        yAxis: {
            type: 'value',
            axisTick: {
                show: false  // 去除刻度
            },
            axisLabel: {
                color: '#4c9bfd', // 文字颜色
                fontSize: "6"
            },
            splitLine: {
                lineStyle: {
                    color: '#012f4a' // 分割线颜色
                }
            }
        },
        series: [{
            name: '新增粉丝',
            data: yearData[0].data[0],
            type: 'line',
            // 折线修饰为圆滑
            smooth: true,
            // 单独修改线的颜色
            lineStyle: {
                width: 1
            },
        }, {
            name: '新增游客',
            data: yearData[0].data[1],
            type: 'line',
            smooth: true,
            // 单独修改线的颜色
            lineStyle: {
                width: 1
            },
        }]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    // 让图表跟随屏幕自适应
    window.addEventListener("resize", function () {
        myChart.resize();
    });
    // 5.点击切换效果
    $(".line h2").on("click", "a", function () {
        // alert(1);
        console.log($(this).index());
        // 点击 a 之后 根据当前a的索引号 找到对应的 yearData的相关对象
        // console.log(yearData[$(this).index()]);
        var obj = yearData[$(this).index()];
        option.series[0].data = obj.data[0];
        option.series[1].data = obj.data[1];
        // 需要重新渲染
        myChart.setOption(option);
    });
})();
// 折线图2
(function () {
    var myChart = echarts.init(document.querySelector(".line2 .char"));
    var option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            top: "0%",
            textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: "6"
            }
        },
        grid: {
            left: "10",
            top: "30",
            right: "10",
            bottom: "10",
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                // 文本颜色为rgba(255,255,255,.6)  文字大小为 12
                axisLabel: {
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: 6
                    }
                },
                // x轴线的颜色为   rgba(255,255,255,.2)
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.2)"
                    }
                },
                data: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "26", "28", "29", "30"],
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisTick: { show: false },
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)"
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: 6
                    }
                },
                // 修改分割线的颜色
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)"
                    }
                }
            }
        ],
        series: [
            {
                name: '播放量',
                type: 'line',
                // 线条圆滑
                smooth: true,
                // 单独修改线的颜色
                lineStyle: {
                    color: "#0184d5",
                    width: 1
                },
                areaStyle: {
                    // 渐变色，只需要复制即可
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: "rgba(1, 132, 213, 0.4)"   // 渐变色的起始颜色
                            },
                            {
                                offset: 0.8,
                                color: "rgba(1, 132, 213, 0.1)"   // 渐变线的结束颜色
                            }
                        ],
                        false
                    ),
                    shadowColor: "rgba(0, 0, 0, 0.1)"
                },
                // 设置拐点 小圆点
                symbol: "circle",
                // 拐点大小
                symbolSize: 8,
                // 设置拐点颜色以及边框
                itemStyle: {
                    color: "#0184d5",
                    borderColor: "rgba(221, 220, 107, .1)",
                    borderWidth: 12
                },
                // 开始不显示拐点， 鼠标经过显示
                showSymbol: false,
                data: [30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 30, 40, 30, 40, 30, 40, 20, 60, 50, 40],
            },
            {
                name: '转发量',
                type: 'line',
                smooth: true,
                lineStyle: {
                    normal: {
                        color: "#00d887",
                        width: 1
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0,
                            0,
                            0,
                            1,
                            [
                                {
                                    offset: 0,
                                    color: "rgba(0, 216, 135, 0.4)"
                                },
                                {
                                    offset: 0.8,
                                    color: "rgba(0, 216, 135, 0.1)"
                                }
                            ],
                            false
                        ),
                        shadowColor: "rgba(0, 0, 0, 0.1)"
                    }
                },
                // 设置拐点 小圆点
                symbol: "circle",
                // 拐点大小
                symbolSize: 5,
                // 设置拐点颜色以及边框
                itemStyle: {
                    color: "#00d887",
                    borderColor: "rgba(221, 220, 107, .1)",
                    borderWidth: 12
                },
                // 开始不显示拐点， 鼠标经过显示
                showSymbol: false,
                data: [130, 10, 20, 40, 30, 40, 80, 60, 20, 40, 90, 40, 20, 140, 30, 40, 130, 20, 20, 40, 80, 70, 30, 40, 30, 120, 20, 99, 50, 20],
            },

        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    // 让图表跟随屏幕自适应
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();
// 饼图1
(function () {
    var myChart = echarts.init(document.querySelector(".pie .char"));
    var option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a}<br/>{b}:{c}({d}%)'
        },
        color: [
            "#065aab",
            "#066eab",
            "#0682ab",
            "#0696ab",
            "#06a0ab",
        ],
        legend: {
            // 距离底部为0%
            bottom: "0%",
            // 小图标的宽度和高度
            itemWidth: 10,
            itemHeight: 10,
            data: ["0岁以下", "20-29岁", "30-39岁", "40-49岁", "50岁以上"],
            // 修改图例组件的文字为 6px
            textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: "6"
            }
        },
        series: [
            {
                name: "年龄分布",
                type: 'pie',
                //  修改内圆半径和外圆半径为  百分比是相对于容器宽度来说的
                radius: ['40%', '60%'],
                // 设置饼形图在容器中的位置
                center: ["50%", "50%"],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                },
                // 不显示连接线
                labelLine: {
                    show: false
                },
                data: [
                    { value: 1, name: "0岁以下" },
                    { value: 4, name: "20-29岁" },
                    { value: 2, name: "30-39岁" },
                    { value: 2, name: "40-49岁" },
                    { value: 1, name: "50岁以上" }
                ]
            }
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    // 让图表跟随屏幕自适应
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();
// 饼图2
(function () {
    var myChart = echarts.init(document.querySelector(".pie2 .char"));
    var option = {
        color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
        legend: {
            // 图例朝向
            orient: "vertical",
            left: "0%",
            // 小图标的宽度和高度
            itemWidth: 10,
            itemHeight: 10,
            // 修改图例组件的文字为 6px
            textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: "6"
            },
            
        },
        series: [
            {
                name: "面积模式",
                type: "pie",
                // left: "30",
                radius: ['10%', '70%'],
                // 饼图位置
                center: ["60%", "50%"],
                roseType: "radius",
                // 文本标签控制饼形图文字的相关样式， 注意它是一个对象
                label: {
                    fontSize: 6,
                    color: "rgba(255,255,255,.5)",
                },
                // 引导线调整
                labelLine: {
                    // 连接扇形图线长
                    length: 6,
                    // 连接文字线长
                    length2: 8
                },
                data: [
                    { value: 20, name: '云南' },
                    { value: 26, name: '北京' },
                    { value: 24, name: '山东' },
                    { value: 25, name: '河北' },
                    { value: 20, name: '江苏' },
                    { value: 25, name: '浙江' },
                    { value: 30, name: '四川' },
                    { value: 42, name: '湖北' }
                ]
            }
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    // 让图表跟随屏幕自适应
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})()
