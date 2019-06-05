<template>
<section>
    <div align="center" style="color: #409EFF;font-weight: bold;font-size: 18px;">待标注样本</div>
    <el-table :data="taskWaitingForMark"  style="width: 100%">
        <el-table-column label="任务" prop="taskId" >
        </el-table-column>

        <el-table-column label="任务类型" prop="type">
        </el-table-column>

        <el-table-column label="操作" >
            <template slot-scope="scope">
                <el-button
                        size="mini"
                        type="primary"
                        @click="mark(scope.row)">标注
                </el-button>
            </template>
        </el-table-column>
    </el-table>
    <br>

    <div align="center" style="color: #409EFF;font-weight: bold;font-size: 18px;">待发布任务</div>
    <el-table :data="taskWaitingForRelease"  style="width: 100%">
        <el-table-column label="任务" prop="taskId">
        </el-table-column>

        <el-table-column label="任务类型" prop="type">
        </el-table-column>

        <el-table-column label="操作">
            <template slot-scope="scope">
                <el-button
                        size="mini"
                        type="success"
                        @click="release(scope.row)">发布
                </el-button>

                <el-button
                        size="mini"
                        type="primary"
                        icon="el-icon-edit"
                        @click="edit(scope.row)">编辑
                </el-button>


                <el-button
                        size="mini"
                        type="danger"
                        icon="el-icon-delete"
                        @click="deleteTask(scope.row)">删除
                </el-button>


            </template>
        </el-table-column>

    </el-table>


    <el-dialog title="编辑" :visible.sync="showInformation" width="30%" :close-on-click-modal="false"
               :close-on-press-escape="false">
        <el-form class="editor-form" :model="editorDetails" status-icon ref="editorDetails"
                 label-width="100px">

            <el-form-item prop="taskId" label="任务编号">
                <span>{{editorDetails.taskId}} </span>
            </el-form-item>


            <el-form-item prop="type" label="标注类型">
                <span>{{editorDetails.type}} </span>
            </el-form-item>


            <el-form-item prop="taskDescription" label="任务描述">
                <span>{{editorDetails.taskDescription}} </span>
            </el-form-item>

            <el-form-item prop="reward" label="任务奖励">
                <span>{{editorDetails.reward}} </span>
            </el-form-item>

            <el-form-item prop="peopleNum" label="总人数">
                <span>{{editorDetails.peopleNum}} </span>
            </el-form-item>


        </el-form>


        <div slot="footer" class="dialog-footer">
            <el-button type="primary" @click="showInformation = false">确认</el-button>
        </div>

    </el-dialog>

</section>
</template>

<script>
    export default {
        name: "publishTask",
        data() {
            return{
                taskWaitingForMark:[
                    {
                        taskId:"0000001",
                        type:"整体标注",
                    },

                    {
                        taskId:"0000002",
                        type:"方框标注",
                    },
                    {
                        taskId:"0000003",
                        type:"区域标注",
                    }
                ],

                taskWaitingForRelease:[
                    {
                        taskId:"0000004",
                        type:"整体标注",
                    },

                    {
                        taskId:"0000005",
                        type:"方框标注",
                    },
                    {
                        taskId:"0000006",
                        type:"区域标注",
                    }
                ],

                showInformation:false,

                editorDetails:{
                    taskId:"0000004",
                    type:"整体标注",
                    taskDescription:"image about rivers",
                    reward:1000,
                    peopleNum:100
                }
            }
        },

        methods:{
            mark(task){
                alert("去标注");
                if(task.type==="整体标注"){
                    this.$router.push('/imgLabel');
                }
                else if(task.type==="方框标注"){
                    this.$router.push('/frameLabel')
                }
                else
                    this.$router.push('/areaLabel')
            },

            release(task){
                this.$message({
                    message: '已发布',
                    type: 'success'
                });
               this.taskWaitingForRelease.pop();
            },

            edit(task){
                this.showInformation = true;
            },


            deleteTask(task){
                console.log(task);
                this.taskWaitingForRelease.pop();
                this.$message({
                    message: '已删除',
                    type: 'success'
                });
            }

        }
    }
</script>

<style scoped>

</style>
