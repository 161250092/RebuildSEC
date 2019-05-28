<template>
    <section>
    <el-form  label-width="200px" style="margin:20px;width:60%;min-width:600px;">

        <el-form-item  label="标注类型">
            <el-select  placeholder="请选择标注类型" v-model="markType">
                <el-option label="整体标注" value="1"></el-option>
                <el-option label="方框标注" value="2"></el-option>
                <el-option label="区域标注" value="3"></el-option>
            </el-select>
        </el-form-item>

        <el-form-item  label="标注质量">
            <el-select  placeholder="请选择标注质量" v-model="quality">
                <el-option label="普通" value="1"></el-option>
                <el-option label="高级" value="2"></el-option>
                <el-option label="特级" value="3"></el-option>
            </el-select>
        </el-form-item>

        <el-form-item  label="标注人数">
            <el-input size="small" style="width:200px" v-model="peopleNum"></el-input>
        </el-form-item>


        <el-form-item  label="任务描述">
            <el-input
                    placeholder="请输入内容"
                    auto-complete="off" type="textarea" :rows="3"
                    style="width:200px"
                    v-model="taskDescription"
            >
            </el-input>
        </el-form-item>

        <el-form-item  label="单张图片单价(单位:元)">
            <el-input size="small" style="width:200px" v-model="singleImgPrice"></el-input>
        </el-form-item>

        <el-form-item  label="图片单价(单位:元)">
            <el-input size="small" style="width:200px" v-model="singlePrice"></el-input>
        </el-form-item>

        <el-form-item label="总价(单位:元)">
            <span>{{totalPrice}}</span>
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



<script>
    export default {
        data() {
            return {
                totalPrice:0,
                fileList: [],
                editor:{},
                markType:'',
                quality:'',
                taskId: "16250092",
                peopleNum:0,
                taskDescription:"....",
                singleImgPrice:0.0,
                singlePrice:0.0
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            },
            saveAsDraft(){
                alert("已存");
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

