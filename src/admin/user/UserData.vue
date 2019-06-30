<template>


    <div>
        <el-radio-group v-model="chartTime" @change="drawLineChart" border>
            <el-radio :label="1">最近一周</el-radio>
            <el-radio :label="2">最近一月</el-radio>
            <el-radio :label="3">最近一年</el-radio>
        </el-radio-group>


        <br/>

        <section class="chart-container">
            <el-row>
                <el-col :span="12">
                    <div id="chartLine" style="width:100%; height:400px;"></div>
                </el-col>
                <el-col :span="12">
                    <div id="chartPie" style="width:100%; height:400px;"></div>
                </el-col>
            </el-row>
        </section>
    </div>

</template>

<script>
    export default {
        name: "UserData",
        data(){
            return{
                chartTime:1,

                week:['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                month:['第一周', '第二周', '第三周', '第四周'],
                year:['第一季度', '第二季度','第三季度', '第四季度'],

                dataWeekWorker:[20,24,21,23,25,26,22],
                dataWeekRequester:[10,9,11,13,12,11,8],
                dataMonthWorker:[160,155,156,162],
                dataMonthRequester:[68,72,69,73],
                dataYearWorker:[350,355,365,345],
                dataYearRequester:[220,235,215,205],
            }
        },
        methods:{
            drawLineChart(){
                this.chartLine = echarts.init(document.getElementById('chartLine'));
                if(this.chartTime == 1){
                    this.chartLine.setOption({
                        title: {
                            text: '新用户'
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            data: ['新工人', '新发布者']
                        },
                        grid: {
                            left: '3%',
                            right: '4%',
                            bottom: '3%',
                            containLabel: true
                        },

                        xAxis: {
                            type: 'category',
                            boundaryGap: false,
                            data:this.week,
                        },
                        yAxis: {
                            type: 'value'
                        },
                        series: [
                            {
                                name: '新工人',
                                type: 'line',
                                stack: '总数',
                                data:this.dataWeekWorker
                            },
                            {
                                name: '新发布者',
                                type: 'line',
                                stack: '总数',
                                data: this.dataWeekRequester
                            },
                        ]

                    });
                }
                else if(this.chartTime == 2){
                    this.chartLine.setOption({
                        title: {
                            text: '新用户'
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            data: ['新工人', '新发布者']
                        },
                        grid: {
                            left: '3%',
                            right: '4%',
                            bottom: '3%',
                            containLabel: true
                        },

                        xAxis: {
                            type: 'category',
                            boundaryGap: false,
                            data:this.month
                        },
                        yAxis: {
                            type: 'value'
                        },
                        series: [
                            {
                                name: '新工人',
                                type: 'line',
                                stack: '总数',
                                data:this.dataMonthWorker
                            },
                            {
                                name: '新发布者',
                                type: 'line',
                                stack: '总数',
                                data: this.dataMonthRequester
                            },
                        ]

                    });
                }
                else{
                    this.chartLine.setOption({
                        title: {
                            text: '新用户'
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            data: ['新工人', '新发布者']
                        },
                        grid: {
                            left: '3%',
                            right: '4%',
                            bottom: '3%',
                            containLabel: true
                        },

                        xAxis: {
                            type: 'category',
                            boundaryGap: false,
                            data:this.year
                        },
                        yAxis: {
                            type: 'value'
                        },
                        series: [
                            {
                                name: '新工人',
                                type: 'line',
                                stack: '总数',
                                data:this.dataYearWorker
                            },
                            {
                                name: '新发布者',
                                type: 'line',
                                stack: '总数',
                                data: this.dataYearRequester
                            },
                        ]

                    });
                }
            },

            drawPieChart(){
                this.chartPie = echarts.init(document.getElementById('chartPie'));
                this.chartPie.setOption({
                    title: {
                        text: '总用户地区数据',
                        x: 'center'
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                        data: ['华北', '东北','华东','华南','西南','西北']
                    },
                    series: [
                        {
                            name: '总数',
                            type: 'pie',
                            radius: '55%',
                            center: ['50%', '60%'],
                            data: [
                                { value: 1155, name: '华北' },
                                { value: 766, name: '东北' },
                                { value: 2255, name: '华东' },
                                { value: 1540, name: '华南' },
                                { value: 450, name: '西南' },
                                { value: 950, name: '西北' },
                            ],
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                });
            },

            mounted() {
                this.drawLineChart();
                this.drawPieChart();
            }

        }
    }
</script>

<style scoped>
    .chart-container {
        width: 100%;
        float: left;
    }

</style>