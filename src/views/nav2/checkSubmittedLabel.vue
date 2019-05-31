<template>
    <section>
        <div align="center" style="color: #409EFF;font-weight: bold;font-size: 18px;">待审核任务</div>

        <el-table :data="tasks"  style="width: 100%">
            <el-table-column label="任务编号" prop="taskId"  >
            </el-table-column>
            <el-table-column label="类型" prop="type">
            </el-table-column>

            <el-table-column label="工人名称" prop="workerName" >
            </el-table-column>

            <el-table-column label="系统评分" prop="score">
            </el-table-column>


            <el-table-column label="" >
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            type="primary"
                            icon="el-icon-search"
                            @click="review(scope.row)">审核
                    </el-button>

                </template>
            </el-table-column>


            <el-table-column label="" >
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            type="success"
                            @click="pass(scope.row)">通过
                    </el-button>
                </template>
            </el-table-column>



            <el-table-column label="" >
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            type="warning"
                            @click="reject(scope.row)">驳回
                    </el-button>

                    <el-button
                            size="mini"
                            type="danger"
                            icon="el-icon-delete"
                            @click="abolish(scope.row)">废弃
                    </el-button>
                </template>
            </el-table-column>



        </el-table>


        <el-dialog title="驳回确定" :visible.sync="rejectConfirmInfo" width="30%" :close-on-click-modal="false"
                   :close-on-press-escape="false">
            <span>您确定驳回吗，一旦操作，不可撤销</span>

            <div slot="footer" class="dialog-footer">
                <el-button type="danger" @click="rejectConfirmInfo = false">确认</el-button>
                <el-button type="primary" @click="rejectConfirmInfo = false">取消</el-button>
            </div>

        </el-dialog>


        <el-dialog title="废弃确定" :visible.sync="abolishConfirmInfo" width="30%" :close-on-click-modal="false"
                   :close-on-press-escape="false">
            <span>您确定废弃吗，一旦操作，不可撤销</span>

            <div slot="footer" class="dialog-footer">
                <el-button type="danger" @click="abolishConfirmInfo = false">确认</el-button>
                <el-button type="primary" @click="abolishConfirmInfo = false">取消</el-button>
            </div>

        </el-dialog>

    </section>
</template>

<script>
    export default {
        name: "checkSubmittedLabel",
        data(){
            return {
                tasks:[
                    {
                        taskId:"31241251",
                        workerName:"hh",
                        score:89,
                        type:"整体标注"
                    },

                    {
                        taskId:"4125121",
                        workerName:"hhh",
                        score:94,
                        type:"区域标注"
                    },


                    {
                        taskId:"412412",
                        workerName:"ssss",
                        score:59,
                        type:"方框标注"
                    },


                ],

                rejectConfirmInfo:false,
                abolishConfirmInfo:false

            }
        },
        methods:{
            review(task){

                if(task.type==="整体标注"){
                    alert("去审核");
                    this.$router.push('/canvas1');
                }
                else if(task.type==="方框标注"){
                    this.$router.push('/canvas2')
                }
                else
                    alert("undo");
            },

            pass(task){
                alert("通过");
            },
            reject(task){
                this.rejectConfirmInfo = true;
            },

            abolish(task){
                this.abolishConfirmInfo = true;
            }
        }

    }
</script>

<style scoped>

</style>
