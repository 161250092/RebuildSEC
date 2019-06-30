<template>

    <div>
        <br/>

        <section class="chart-container">
            <el-row>
                <el-col :span="12" center>
                    <div id="chartPie" style="width:100%; height:400px;"></div>
                </el-col>
            </el-row>
        </section>
    </div>

</template>

<script>
    export default {
        name: "CurrentTaskData",
        data(){
        },
        methods:{

            drawPieChart(){
                this.chartPie = echarts.init(document.getElementById('chartPie'));
                this.chartPie.setOption({
                    title: {
                        text: '当前任务数据',
                        x: 'center'
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                        data: ['已完成', '未完成']
                    },
                    series: [
                        {
                            name: '总值',
                            type: 'pie',
                            radius: '55%',
                            center: ['50%', '60%'],
                            data: [
                                { value: 335, name: '已完成' },
                                { value: 10, name: '未完成' },
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