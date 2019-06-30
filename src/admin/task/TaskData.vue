<template>


    <div>
        <el-radio-group v-model="chartTime" @change="change" border>
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
        name: "TaskData",
        data(){
            return{
                chartTime:1,

                week:['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                month:['第一周', '第二周', '第三周', '第四周'],
                year:['第一季度', '第二季度','第三季度', '第四季度'],

                dataWeekAccomplish:[11,16,13,11,12,14,15],
                dataMonthAccomplish:[77,75,79,76],
                dataYearAccomplish:[215,218,225,230],
                dataWeekNot:[13,16,18,19,11,15,12],
                dataMonthNot:[71,74,79,72],
                dataYearNot:[220,215,220,235],

            }
        },
        methods:{
            drawLineChart(){
                this.chartLine = echarts.init(document.getElementById('chartLine'));
                if(this.chartTime == 1){
                    this.chartLine.setOption({
                        title: {
                            text: '任务数据'
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            data:['已完成','发布数']
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
                        series:[
                            {
                                name: '已完成',
                                type: 'line',
                                stack: '总数',
                                data: this.dataWeekAccomplish
                            },
                            {
                                name: '发布数',
                                type: 'line',
                                stack: '总数',
                                data: this.dataWeekNot
                            }
                        ]

                    });
                }
                else if(this.chartTime == 2){
                    this.chartLine.setOption({
                        title: {
                            text: '任务数据'
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            data:['已完成','发布数']
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
                            data:this.month,
                        },
                        yAxis: {
                            type: 'value'
                        },
                        series:[
                            {
                                name: '已完成',
                                type: 'line',
                                stack: '总数',
                                data: this.dataMonthAccomplish
                            },
                            {
                                name: '发布数',
                                type: 'line',
                                stack: '总数',
                                data: this.dataMonthNot
                            }
                        ]

                    });
                }
                else {
                    this.chartLine.setOption({
                        title: {
                            text: '任务数据'
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            data:['已完成','发布数']
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
                            data:this.year,
                        },
                        yAxis: {
                            type: 'value'
                        },
                        series:[
                            {
                                name: '已完成',
                                type: 'line',
                                stack: '总数',
                                data: this.dataYearAccomplish
                            },
                            {
                                name: '发布数',
                                type: 'line',
                                stack: '总数',
                                data: this.dataYearNot
                            }
                        ]

                    });
                }
            },

            drawPieChart(){
                this.chartPie = echarts.init(document.getElementById('chartPie'));
                if(this.chartTime == 1){
                    this.chartPie.setOption({
                        title: {
                            text: '任务数据',
                            x: 'center'
                        },
                        tooltip: {
                            trigger: 'item',
                            formatter: "{a} <br/>{b} : {c} ({d}%)"
                        },
                        legend: {
                            orient: 'vertical',
                            left: 'left',
                            data: ['已完成', '发布数']
                        },
                        series: [
                            {
                                name: '总值',
                                type: 'pie',
                                radius: '55%',
                                center: ['50%', '60%'],
                                data: [
                                    { value: 66, name: '已完成' },
                                    { value: 65, name: '发布数' },
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
                }
                else if(this.chartTime == 2){
                    this.chartPie.setOption({
                        title: {
                            text: '任务数据',
                            x: 'center'
                        },
                        tooltip: {
                            trigger: 'item',
                            formatter: "{a} <br/>{b} : {c} ({d}%)"
                        },
                        legend: {
                            orient: 'vertical',
                            left: 'left',
                            data: ['已完成', '发布数']
                        },
                        series: [
                            {
                                name: '总值',
                                type: 'pie',
                                radius: '55%',
                                center: ['50%', '60%'],
                                data: [
                                    { value: 290, name: '已完成' },
                                    { value: 300, name: '发布数' },
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
                }
                else {
                    this.chartPie.setOption({
                        title: {
                            text: '任务数据',
                            x: 'center'
                        },
                        tooltip: {
                            trigger: 'item',
                            formatter: "{a} <br/>{b} : {c} ({d}%)"
                        },
                        legend: {
                            orient: 'vertical',
                            left: 'left',
                            data: ['已完成', '发布数']
                        },
                        series: [
                            {
                                name: '总值',
                                type: 'pie',
                                radius: '55%',
                                center: ['50%', '60%'],
                                data: [
                                    { value: 3250, name: '已完成' },
                                    { value: 3350, name: '发布数' },
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
                }
            },

            change(){
                this.drawPieChart();
                this.drawLineChart();
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