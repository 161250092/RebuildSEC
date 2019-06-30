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
        name: "InAndOut",
        data(){
            return{
                chartTime:1,

                week:['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                month:['第一周', '第二周', '第三周', '第四周'],
                year:['第一季度', '第二季度','第三季度', '第四季度'],

                dataWeekIn:[120,220,150,300,200,180,400],
                dataWeekOut:[200,50,210,150,100,90,110],
                dataMonthIn:[1100,1250,1400,900],
                dataMonthOut:[950,1100,1200,1150],
                dataYearIn:[3000,3200,3500,2900],
                dataYearOut:[2800,2900,3100,2950],
            }
        },
        methods:{
            drawLineChart(){
                this.chartLine = echarts.init(document.getElementById('chartLine'));
                if(this.chartTime == 1){
                    this.chartLine.setOption({
                        title: {
                            text: '充值 & 兑换'
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            data: ['充值', '兑换']
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
                                name: '充值',
                                type: 'line',
                                stack: '总值',
                                data:this.dataWeekIn,
                            },
                            {
                                name: '兑换',
                                type: 'line',
                                stack: '总值',
                                data: this.dataWeekOut,
                            },
                        ]

                    });
                }
                else if(this.chartTime == 2){
                    this.chartLine.setOption({
                        title: {
                            text: '充值 & 兑换'
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            data: ['充值', '兑换']
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
                        series: [
                            {
                                name: '充值',
                                type: 'line',
                                stack: '总值',
                                data: this.dataMonthIn,
                            },
                            {
                                name: '兑换',
                                type: 'line',
                                stack: '总值',
                                data:this.dataMonthOut
                            },
                        ]

                    });
                }
                else{
                    this.chartLine.setOption({
                        title: {
                            text: '充值 & 兑换'
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            data: ['充值', '兑换']
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
                        series: [
                            {
                                name: '充值',
                                type: 'line',
                                stack: '总值',
                                data: this.dataYearIn
                            },
                            {
                                name: '兑换',
                                type: 'line',
                                stack: '总值',
                                data:this.dataYearOut
                            },
                        ]

                    });
                }
            },

            drawPieChart(){
                this.chartPie = echarts.init(document.getElementById('chartPie'));
                if(this.chartTime == 1){
                    this.chartPie.setOption({
                        title: {
                            text: '充值 & 兑换',
                            x: 'center'
                        },
                        tooltip: {
                            trigger: 'item',
                            formatter: "{a} <br/>{b} : {c} ({d}%)"
                        },
                        legend: {
                            orient: 'vertical',
                            left: 'left',
                            data: ['充值', '兑换']
                        },
                        series: [
                            {
                                name: '总值',
                                type: 'pie',
                                radius: '55%',
                                center: ['50%', '60%'],
                                data: [
                                    { value: 950, name: '充值' },
                                    { value: 800, name: '兑换' },
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
                            text: '充值 & 兑换',
                            x: 'center'
                        },
                        tooltip: {
                            trigger: 'item',
                            formatter: "{a} <br/>{b} : {c} ({d}%)"
                        },
                        legend: {
                            orient: 'vertical',
                            left: 'left',
                            data: ['充值', '兑换']
                        },
                        series: [
                            {
                                name: '总值',
                                type: 'pie',
                                radius: '55%',
                                center: ['50%', '60%'],
                                data: [
                                    { value: 3800, name: '充值' },
                                    { value: 3550, name: '兑换' },
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
                }else{
                    this.chartPie.setOption({
                        title: {
                            text: '充值 & 兑换',
                            x: 'center'
                        },
                        tooltip: {
                            trigger: 'item',
                            formatter: "{a} <br/>{b} : {c} ({d}%)"
                        },
                        legend: {
                            orient: 'vertical',
                            left: 'left',
                            data: ['充值', '兑换']
                        },
                        series: [
                            {
                                name: '总值',
                                type: 'pie',
                                radius: '55%',
                                center: ['50%', '60%'],
                                data: [
                                    { value: 42500, name: '充值' },
                                    { value: 38500, name: '兑换' },
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