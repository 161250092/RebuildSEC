<template>
    <div>
        <div style="height: 400px">
            <div style="float: left">
                <div style="margin-top: 15px">
                    <div id="taskStatusOverview" style="width:500px;height:300px;"></div>
                </div>
            </div>

            <div style="float: right;">
                <div style="margin-left: 50px">
                    <el-row class="row-bg" justify="space-around">
                        <el-col :span="10">
                            <h3>总收益</h3>
                        </el-col>
                        <el-col :span="14">
                            <el-select v-model="totalEarningShowType"
                                       @change="changeTotalEarningChartOption">
                                <el-option v-for="item in totalEarningShowOptions"
                                           :key="item.value"
                                           :label="item.label"
                                           :value="item.value">
                                </el-option>
                            </el-select>
                        </el-col>
                    </el-row>

                    <div>
                        <el-row style="font-size: large">
                            <el-col :span="18"><div><p>到目前为止: </p></div></el-col>
                            <el-col :span="6"><div><p>{{totalEarning}}</p></div></el-col>
                        </el-row>
                    </div>
                </div>

                <div id="totalEarningChart" style="width:520px;height:300px;"></div>
            </div>
        </div>

        <div>
            <div>
                <h3>任务状态</h3>
            </div>


            <el-table :data="workerTaskStatus" style="width: 100%">
                <el-table-column type="expand">
                    <template slot-scope="props">
                        <el-form label-position="left">

                        </el-form>
                    </template>
                </el-table-column>

                <el-table-column prop="date"
                                 label="时间"
                                 width="230">
                </el-table-column>

                <el-table-column prop="submitted"
                                 label="提交"
                                 width="150">
                </el-table-column>

                <el-table-column prop="approved"
                                 label="通过"
                                 width="150">
                </el-table-column>

                <el-table-column prop="rejected"
                                 label="未通过"
                                 width="150">
                </el-table-column>

                <el-table-column prop="pending"
                                 label="审核中"
                                 width="150">
                </el-table-column>

                <el-table-column prop="totalReward"
                                 label="总奖励"
                                 width="200">
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
    import echarts from 'echarts'

    export default {
        name: "WorkerHistory",
        data() {
            return {
                workerTaskStatus: [
                    {
                        date: '06/02 - 06/08',
                        submitted: 10,
                        approved: 5,
                        rejected: 3,
                        pending: 2,
                        totalReward: 30.43
                    },
                    {
                        date: '05/26 - 06/01',
                        submitted: 18,
                        approved: 3,
                        rejected: 10,
                        pending: 7,
                        totalReward: 10.23
                    }
                ],
                totalEarning: 823.45,
                totalEarningShowType: 'year',
                totalEarningShowOptions: [
                    {
                        value: 'year',
                        label: '年'
                    },
                    {
                        value: 'quarter',
                        label: '季度'
                    },
                    {
                        value: 'month',
                        label: '月'
                    }
                ],
                totalEarningChartPerQuarter: null,

                workerTaskStatusOverview: {
                    approved: 10,
                    approvalRate: 0.23,
                    pending: 18,
                    rejected: 5,
                    rejectedRate: 0.56
                }


            }
        },
        mounted() {
            this.$nextTick(function () {
                this.totalEarningChartPerQuarter = echarts.init(document.getElementById('totalEarningChart'));
                this.initTaskStatusOverviewChart();
                this.changeTotalEarningChartOption();
            });
        },
        methods: {
            initTaskStatusOverviewChart() {
                let taskStatusOverviewChart = echarts.init( document.getElementById('taskStatusOverview'));
                let option = {
                    title : {
                        text: '任务状态总览',
                        x:'center'
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b} : {c} ({d}%)'
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'right',
                        data: ['已通过', '审核中', '未通过']
                    },
                    series: [
                        {
                            name: '工人任务状态值',
                            type: 'pie',
                            radius: '55%',
                            center: ['50%', '60%'],
                            data: [
                                {value: 834, name: '已通过'},
                                {value: 76, name: '审核中'},
                                {value: 123, name: '未通过'},
                            ],
                        }
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                };

                taskStatusOverviewChart.setOption(option);
            },

            changeTotalEarningChartOption() {
                let xAxisData = [];
                let seriesData = [];
                if (this.totalEarningShowType === 'year') {
                    xAxisData = ['2017', '2018', '2019'];
                    seriesData = [242.43, 432.32, 135.24];
                } else if (this.totalEarningShowType === 'quarter') {
                    xAxisData = ['2019年一季度', '2019年二季度', '2019年三季度', '2019年四季度'];
                    seriesData = [123.2, 14.5, 34.32, 152.34];
                } else if (this.totalEarningShowType === 'month') {
                    xAxisData = ['2019年1月','2019年2月','2019年3月','2019年4月','2019年5月','2019年6月',
                        '2019年7月','2019年8月','2019年9月','2019年10月','2019年11月','2019年12月'];
                    seriesData = [342.3,342.3,342.3,342.3,342.3,342.3,
                        342.3,342.3,342.3,342.3,342.3,342.3];
                }

                let option = {
                    xAxis: {
                        type: 'category',
                        data: xAxisData,
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: seriesData,
                        type: 'line',
                        smooth: 'true'
                    }]
                };
                this.totalEarningChartPerQuarter.setOption(option);
            },
        }
    }
</script>

<style scoped lang="scss">
    .overview-box {
        border-style: solid;

        .overview-sub-box {
            border-top-style: solid;
        }
    }
</style>