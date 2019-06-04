<template>
    <div>
        <div>
            <div>
                <el-table :data="taskList"
                          style="width: 100%">

                    <el-table-column type="expand">
                        <template slot-scope="props">
                            <el-form lable-position="left">
                                <el-form-item label="任务描述">
                                    <span>{{props.row.description}}</span>
                                </el-form-item>
                            </el-form>
                        </template>
                    </el-table-column>

                    <el-table-column
                            prop="requester"
                            label="发布者"
                            width="150"
                    ></el-table-column>

                    <el-table-column
                            prop="title"
                            label="任务"
                            width="500"
                    ></el-table-column>

                    <el-table-column
                            prop="type"
                            label="任务类型"
                            width="150"
                    ></el-table-column>

                    <el-table-column
                            prop="reward"
                            label="奖励"
                            width="100"
                    ></el-table-column>

                    <el-table-column
                            prop="schedule"
                            label="进度"
                            width="100"
                    ></el-table-column>

                    <el-table-column
                            prop="actions"
                            label="操作"
                            align="right">
                        <template slot-scope="scope">
                            <el-button
                                    size="mini"
                                    @click="handleWork(scope.$index, scope.row)"
                            >继续工作</el-button>
                        </template>
                    </el-table-column>

                </el-table>
            </div>
            <div style="text-align: center">
                <el-pagination
                        background
                        layout="prev, pager, next"
                        :total="100"
                ></el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "WorkerTaskList",
        data() {
            return {
                taskList: [
                    {
                        requester: '发布者1',
                        title: '任务1',
                        type: '类型1',
                        reward: 0.05,
                        schedule: '95%',
                        description: '描述：aksjdhgkjahgk'
                    },
                    {
                        requester: '发布者2',
                        title: '任务2',
                        type: '类型2',
                        reward: 0.05,
                        schedule: '10%',
                        description: '描述：poiwhugfahvjbs'
                    }
                ]
            }
        },
        methods: {
            handleAccept(index, row) {
                console.log(index, row);
            }
        }
    }
</script>

<style scoped>

</style>