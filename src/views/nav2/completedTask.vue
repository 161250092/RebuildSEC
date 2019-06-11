<template>
    <section>
        <div align="center" style="color: #409EFF;font-weight: bold;font-size: 18px;">已完成任务</div>
        <el-table :data="completedTasks"  style="width: 100%">
            <el-table-column type="expand">
                <template slot-scope="props">
                    <el-form label-position="left" inline class="demo-table-expand">
                        <el-form-item label="任务介绍">
                            <span>{{ props.row.description}}</span>
                        </el-form-item>



                    </el-form>
                </template>
            </el-table-column>

            <el-table-column label="任务类型" prop="type">
            </el-table-column>

            <el-table-column label="时间" prop="workTime">
            </el-table-column>

            <el-table-column label="完成人数" prop="peopleNum">
            </el-table-column>

            <el-table-column label="奖励" prop="reward">
            </el-table-column>

            <el-table-column label="详情" >
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            type="primary"
                            @click="check(scope.row)">查看
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

        <el-dialog title="下载" :visible.sync="showDownloadChoices" width="30%" :close-on-click-modal="false"
                   :close-on-press-escape="false">
            <el-select  placeholder="请选择下载方式" v-model="downloadStyle">
                <el-option label="原格式" value="1"></el-option>
                <el-option label="转jpg" value="2"></el-option>
                <el-option label="转png" value="3"></el-option>
            </el-select>


            <div slot="footer" class="dialog-footer">
                <el-button type="danger" @click="showDownloadInfo">确认</el-button>
                <el-button type="primary" @click="showDownloadChoices = false">取消</el-button>
            </div>
        </el-dialog>

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
                        workTime:"2019-06-12",
                        description:"请写出图片中人物特征",
                        type:"整体标注",
                        taskDescription:"image about rivers",
                        reward:100,
                        peopleNum:100
                    },

                    {
                        taskId:"0000008",
                        type:"方框标注",
                        workTime:"2019-06-13",
                        description:"请框出图中生物并出标出其特征",
                        taskDescription:"image about rivers",
                        reward:1000,
                        peopleNum:100
                    },

                    {
                        taskId:"0000009",
                        type:"区域标注",
                        workTime:"2019-06-15",
                        description:"请圈画出图中生物并出标出其特征",
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
                ],
                showDownloadChoices:false,
                downloadStyle:"",
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

            showDownloadInfo(){
                this.$message({
                    message:"已加入下载入伍",
                    type:"success"
                });
                this.showDownloadChoices = false;
            },
            download(task){
                this.showDownloadChoices = true;
            }
        }


    }
</script>

<style scoped>

</style>
