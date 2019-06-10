<template>
    <div>
        <h2>总览</h2>

        <div style="float: left">
            <div>
                <h3>任务状态</h3>

                <el-table :data="workerTaskStatus" style="width: 100%">
                    <el-table-column type="expand">
                        <template slot-scope="props">
                            <el-form label-position="left">

                            </el-form>
                        </template>
                    </el-table-column>

                    <el-table-column prop="date"
                                     label="时间"
                                     width="150">
                    </el-table-column>

                    <el-table-column prop="submitted"
                                     label="提交"
                                     width="100">
                    </el-table-column>

                    <el-table-column prop="approved"
                                     label="通过"
                                     width="100">
                    </el-table-column>

                    <el-table-column prop="rejected"
                                     label="未通过"
                                     width="100">
                    </el-table-column>

                    <el-table-column prop="pending"
                                     label="审核中"
                                     width="100">
                    </el-table-column>

                    <el-table-column prop="totalReward"
                                     label="总奖励"
                                     width="100">
                    </el-table-column>
                </el-table>
            </div>
        </div>

        <div style="float: right">
            <div>
                <h3>任务状态总览</h3>

                <div class="overview-box">
                    <div>
                        <el-row>
                            <el-col :span="18"><div><p>通过数</p></div></el-col>
                            <el-col :span="6"><div><p>{{workerTaskStatusOverview.approved}}</p></div></el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="18"><div><p>通过率</p></div></el-col>
                            <el-col :span="6"><div><p>{{workerTaskStatusOverview.approvalRate}}%</p></div></el-col>
                        </el-row>
                    </div>
                    <div class="overview-sub-box">
                        <el-row>
                            <el-col :span="18"><div><p>审核中</p></div></el-col>
                            <el-col :span="6"><div><p>{{workerTaskStatusOverview.pending}}</p></div></el-col>
                        </el-row>
                    </div>
                    <div class="overview-sub-box">
                        <el-row>
                            <el-col :span="18"><div><p>未通过数</p></div></el-col>
                            <el-col :span="6"><div><p>{{workerTaskStatusOverview.rejected}}</p></div></el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="18"><div><p>未通过率</p></div></el-col>
                            <el-col :span="6"><div><p>{{workerTaskStatusOverview.rejectedRate}}%</p></div></el-col>
                        </el-row>
                    </div>
                </div>
            </div>

            <div>
                <div>
                    <h3>总收益</h3>

                    <div>
                        <el-select v-model="totalEarningShowType">
                            <el-option v-for="item in totalEarningShowOptions"
                                       :key="item.value"
                                       :label="item.label"
                                       :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </div>


                <div>
                    <el-row>
                        <el-col :span="18"><div><p>到目前为止: </p></div></el-col>
                        <el-col :span="6"><div><p>{{totalEarning}}</p></div></el-col>
                    </el-row>
                </div>

                <div v-if="totalEarningShowType === 'year'">
                    <el-table :data="totalEarningByYear"
                              style="width: 100%">
                        <el-table-column prop="year"
                                         label="年份"
                                         width="200">
                        </el-table-column>

                        <el-table-column prop="amount"
                                         label="总额"
                                         width="150">
                        </el-table-column>
                    </el-table>
                </div>
                <div v-if="totalEarningShowType === 'quarter'">
                    <el-table :data="totalEarningByQuarter"
                              style="width: 100%">
                        <el-table-column prop="quarter"
                                         label="季度"
                                         width="200">
                        </el-table-column>

                        <el-table-column prop="amount"
                                         label="总额"
                                         width="150">
                        </el-table-column>
                    </el-table>
                </div>
                <div v-if="totalEarningShowType === 'month'">
                    <el-table :data="totalEarningByMonth"
                              style="width: 100%">
                        <el-table-column prop="month"
                                         label="月份"
                                         width="200">
                        </el-table-column>

                        <el-table-column prop="amount"
                                         label="总额"
                                         width="150">
                        </el-table-column>
                    </el-table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { earningYear, earningQuarter, earningMonth } from '../../common/js/worker/workerTotalEarning'

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
                totalEarningByYear: earningYear,
                totalEarningByQuarter: earningQuarter,
                totalEarningByMonth: earningMonth,
                workerTaskStatusOverview: {
                    approved: 10,
                    approvalRate: 0.23,
                    pending: 18,
                    rejected: 5,
                    rejectedRate: 0.56
                }
            }
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