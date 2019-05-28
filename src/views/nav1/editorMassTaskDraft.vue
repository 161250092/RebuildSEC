<template>
    <section>
        <el-form  status-icon ref="editor" label-width="200px" style="margin:20px;width:60%;min-width:600px;">
            <el-form-item prop="markType" label="标注类型">
                <el-select  placeholder="请选择标注类型" v-model="markType">
                    <el-option label="整体标注" value="1"></el-option>
                    <el-option label="方框标注" value="2"></el-option>
                    <el-option label="区域标注" value="3"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item prop="scheme" label="方案选择">
                <el-select  placeholder="方案" v-model="scheme" @change="onSelectedScheme($event)" >
                    <el-option label="最大化分配任务" value="1"></el-option>
                    <el-option label="最小化支出" value="2"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item prop="taskId" label="任务编号">
                <span>{{taskId}}</span>
            </el-form-item>

            <el-form-item prop="quality" label="标注质量">
                <el-select  placeholder="请选择标注质量" v-model="quality">
                    <el-option label="普通" value="1"></el-option>
                    <el-option label="高级" value="2"></el-option>
                    <el-option label="特级" value="3"></el-option>
                </el-select>
            </el-form-item>


            <el-form-item prop="taskDescription" label="任务描述">
                <el-input
                        placeholder="请输入内容"
                        auto-complete="off" type="textarea" :rows="3"
                        style="width:200px"
                        v-model="taskDescription">
                </el-input>
            </el-form-item>

            <el-form-item label="截止时间" >
                <el-date-picker
                        v-model="endTime"
                        type="date"
                        placeholder="选择日期">
                </el-date-picker>
            </el-form-item>

            <el-form-item label="预算(单位:元)">
                <el-input size="small" style="width:200px" v-model="budget"></el-input>

            </el-form-item>

            <el-form-item label="单张图片最低价(单位:元)" v-if="isMinBudget">
                <el-input size="small" style="width:200px" v-model="expectedUnitPrice" ></el-input>
            </el-form-item>

            <el-form-item>
                <el-upload
                        class="upload-demo"
                        ref="upload"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :file-list="fileList"
                        :auto-upload="false">
                    <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                    <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
            </el-form-item>

            <el-form-item>
                <el-button style="margin-left: 0px;" size="small" type="success" @click="saveAsDraft">保存为草稿</el-button>
            </el-form-item>

        </el-form>





    </section>
</template>


<style scoped>

</style>

<script>
    export default {
        data() {
            return {
                editor:{},
                markType:"",
                taskId:"16125002",
                scheme:"",
                quality:"",
                taskDescription:"",
                endTime:"",
                expectedUnitPrice:0,
                budget:0,
                isMinBudget:false,

                fileList: [],
            }
        },
        methods: {
            saveAsDraft() {
                alert("save");
                this.isMinBudget = true;
            },

            onSelectedScheme(event) {
                if (event === "2")
                    this.isMinBudget = true;
                else
                    this.isMinBudget = false;
            },

            minBudget() {
                this.isMinBudget = true;
                alert("can sendKeys");
            },

            maxAllocation() {
                this.isMinBudget = false;
            },

            submitUpload() {
                this.$refs.upload.submit();
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            }

        }
    }

</script>

