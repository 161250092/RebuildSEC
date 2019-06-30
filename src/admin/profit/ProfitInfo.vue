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
                <el-col :span="12" center>
                    <div id="chartLine" style="width:100%; height:400px;"></div>
                </el-col>
            </el-row>
        </section>
    </div>

</template>

<script>
    export default {
        name: "ProfitInfo",
        data(){
            return{
                chartTime:1,


                week:['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                month:['第一周', '第二周', '第三周', '第四周'],
                year:['第一季度', '第二季度','第三季度', '第四季度'],

                dataWeek:[15,18,14,12,19,20,14],
                dataMonth:[105,120,115,125],
                dataYear:[350,320,330,325],
            }
        },
        methods:{
            drawLineChart(){
                this.chartLine = echarts.init(document.getElementById('chartLine'));
                if(this.chartTime == 1){
                    this.chartLine.setOption({
                        title: {
                            text: '盈利'
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            data:'盈利'
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
                        series:{
                            name: '盈利',
                            type: 'line',
                            stack: '总值',
                            data: this.dataWeek
                        }

                    });
                }
                else if(this.chartTime == 2){
                    this.chartLine.setOption({
                        title: {
                            text: '盈利'
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            data:'盈利'
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
                        series:{
                            name: '盈利',
                            type: 'line',
                            stack: '总值',
                            data: this.dataMonth
                        }

                    });
                }
                else {
                    this.chartLine.setOption({
                        title: {
                            text: '盈利'
                        },
                        tooltip: {
                            trigger: 'axis'
                        },
                        legend: {
                            data:'盈利'
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
                        series:{
                            name: '盈利',
                            type: 'line',
                            stack: '总值',
                            data: this.dataYear
                        }

                    });
                }
            },

            mounted() {
                this.drawLineChart();
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