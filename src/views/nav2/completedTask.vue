<template>
    <section>
        <div align="center" style="color: #409EFF;font-weight: bold;font-size: 18px;">已完成任务</div>
        <el-table :data="completedTasks"  style="width: 100%">
            <el-table-column label="任务" prop="taskId" >
            </el-table-column>

            <el-table-column label="任务类型" prop="type">
            </el-table-column>

            <el-table-column label="完成人数" prop="peopleNum">
            </el-table-column>

            <el-table-column label="奖励" prop="reward">
            </el-table-column>

            <el-table-column label="查看" >
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            type="primary"
                            @click="check(scope.row)">详情
                    </el-button>
                </template>
            </el-table-column>

            <el-table-column label="下载" >
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            type="primary"
                            @click="download(scope.row)">下载
                    </el-button>
                </template>
            </el-table-column>

        </el-table>
        <el-pagination
                background
                layout="prev, pager, next"
                :total="1000">
        </el-pagination>
        <br>

        <div v-if="showInfo" align="center" style="color: #409EFF;font-weight: bold;font-size: 18px;">详情</div>

        <el-table :data="details"  style="width: 100%" v-if="showInfo">
            <el-table-column label="工人" prop="workerName" >
            </el-table-column>

            <el-table-column label="评估" prop="evaluation">
            </el-table-column>

            <el-table-column label="状态" prop="state">
            </el-table-column>

            <el-table-column label="奖励" prop="reward">
            </el-table-column>
        </el-table>

        <el-pagination
                v-if="showInfo"
                background
                layout="prev, pager, next"
                :total="1000">
        </el-pagination>

    </section>
</template>

<script>
    export default {
        name: "completedTask",
        data(){
            return{
                showInformation:false,

                completedTasks:[
                    {
                        taskId:"0000007",
                        type:"整体标注",
                        taskDescription:"image about rivers",
                        reward:100,
                        peopleNum:100
                    },

                    {
                        taskId:"0000008",
                        type:"方框标注",
                        taskDescription:"image about rivers",
                        reward:1000,
                        peopleNum:100
                    },

                    {
                        taskId:"0000009",
                        type:"区域标注",
                        taskDescription:"image about rivers",
                        reward:10000,
                        peopleNum:100
                    }

                ],

                showInfo:false,
                details:[
                    {
                        workerName:"张三",
                        evaluation:"优秀",
                        state:"通过",
                        reward:100
                    },

                    {
                        workerName:"李四",
                        evaluation:"普通",
                        state:"通过",
                        reward:80
                    },
                    {
                        workerName:"李四",
                        evaluation:"差",
                        state:"拒绝",
                        reward:0
                    }
                ]
            }

        },

        methods:{
            check(task){
                //this.details = task;
                this.showInfo = true;

                this.$message({
                    message: '详情如下',
                    type: 'success'
                });
            },

            download(){
                alert("emmm");
            }
        }


    }
</script>

<style scoped>

</style>
