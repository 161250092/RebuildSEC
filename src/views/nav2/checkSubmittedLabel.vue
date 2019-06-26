<template>
    <section>
        <div align="center" style="color: #409EFF;font-weight: bold;font-size: 18px;">待审核任务</div>

        <el-table :data="tasks"  style="width: 100%">
            <el-table-column type="expand">
                <template slot-scope="props">
                    <el-form label-position="left" inline class="demo-table-expand">
                        <el-form-item label="任务编号">
                            <span>{{ props.row.taskId }}</span>
                        </el-form-item>
                    </el-form>
                </template>
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
                </template>
            </el-table-column>

            <el-table-column>
                <el-button
                        size="mini"
                        type="danger"
                        icon="el-icon-delete"
                        @click="abolish(scope.row)">废弃
                </el-button>
            </el-table-column>
        </el-table>
        <el-pagination
                background
                layout="prev, pager, next"
                :total="1000">
        </el-pagination>

        <el-dialog title="评分" :visible.sync="showRate" width="15%" :close-on-click-modal="false"
                   :close-on-press-escape="false">
            <el-rate
                    v-model="rate"
                    :colors="colors">
            </el-rate>

            <div slot="footer" class="dialog-footer">
                <el-button type="success" @click="showPassMessage">确认</el-button>
                <el-button type="primary" @click="showRate = false">取消</el-button>
            </div>

        </el-dialog>

        <el-dialog title="驳回确定" :visible.sync="rejectConfirmInfo" width="30%" :close-on-click-modal="false"
                   :close-on-press-escape="false">
            <span>您确定驳回吗，一旦操作，不可撤销</span>

            <div slot="footer" class="dialog-footer">
                <el-button type="danger" @click="showRejectInfo">确认</el-button>
                <el-button type="primary" @click="rejectConfirmInfo = false">取消</el-button>
            </div>

        </el-dialog>




        <el-dialog title="废弃确定" :visible.sync="abolishConfirmInfo" width="30%" :close-on-click-modal="false"
                   :close-on-press-escape="false">
            <span>您确定废弃吗，一旦操作，不可撤销</span>

            <div slot="footer" class="dialog-footer">
                <el-button type="danger" @click="showAbolishInfo">确认</el-button>
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
                rate:null,
                colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
                showRate:false,
                rejectConfirmInfo:false,
                abolishConfirmInfo:false,
                selectedTaskId:""

            }
        },
        methods:{
            review(task){
                if(task.type==="整体标注"){
                 //   alert("去审核");
                    this.$router.push('/canvas1');
                }
                else if(task.type==="方框标注"){
                    this.$router.push('/canvas2')
                }
                else
                    this.$router.push('/canvas3')
            },

            showPassMessage(){
                this.$message({
                    message: '已通过',
                    type: 'success'
                });
                this.showRate = false;
               // this.tasks.pop();
                this.removeEelement();
            },
            pass(task){
              //  alert("通过");
                this.showRate = true;
                this.selectedTaskId = task.taskId;
            },

            showRejectInfo(){
                this.$message({
                    message: '已驳回',
                    type: 'success'
                });
               // this.tasks.pop();
                this.removeEelement();
                this.rejectConfirmInfo = false;
            },
            reject(task){
                this.selectedTaskId = task.taskId;
                this.rejectConfirmInfo = true;
            },

            showAbolishInfo(){
                this.$message({
                    message: '已废弃',
                    type: 'success'
                });

              //  this.tasks.pop();
                this.removeEelement();
                this.abolishConfirmInfo  =false;
            },

            abolish(task){
                this.selectedTaskId = task.taskId;
                this.abolishConfirmInfo = true;
            },

            removeEelement(){
                for(let i=0;i<this.tasks.length;i++){
                    if(this.selectedTaskId===this.tasks[i].taskId){
                        this.tasks.splice(i,1);
                        return;
                    }
                }
            }
        },
        mounted() {
            for(let i=4;i<10;i++){
                let a =  {
                    taskId:"412512"+i,
                    workerName:"hhh",
                    score:94,
                    type:"区域标注"
                };
                this.tasks.push(a);
            }
        }

    }
</script>

<style scoped>

</style>
