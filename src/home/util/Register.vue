<template>
    <div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-position="left" label-width="80px" class="register-container">
            <h3 class="title">注册</h3>
            <el-form-item label="账号" prop="account">
                <el-input type="text" v-model="ruleForm.account" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="ruleForm.pass" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
                <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
            </el-form-item>
            <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
            <el-form-item>
                <el-button type="primary" @click.native.prevent="handleSubmit(mode)" :loading="isRegister">注册</el-button>
                <el-button @click.native.prevent="handleReset">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "Register",
        props: ["mode"],
        data() {
            let validateCheckPass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.ruleForm.pass) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                isRegister: false,
                ruleForm: {
                    account: '',
                    pass: '',
                    checkPass: ''
                },
                rules: {
                    account: [
                        { required: true, message: '请输入账号', trigger: 'blur' },
                    ],
                    pass: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                    ],
                    checkPass: [
                        { required: true, validator: validateCheckPass, trigger: 'blur' }
                    ],
                },
                checked: true
            };
        },
        methods: {
            handleReset() {
                this.$refs.ruleForm.resetFields();
            },
            handleSubmit(targetMode) {
                let _this = this;
                _this.$refs.ruleForm.validate((valid) => {
                    if (valid) {
                        console.log("Register Success!");
                        this.isRegister = true;
                        if(targetMode === 'requester')
                            localStorage.setItem("requester", _this.ruleForm.account);
                        else
                            localStorage.setItem("worker", _this.ruleForm.account);
                        this.$alert('即将前往个人中心', '注册成功', {
                            confirmButtonText: '确定',
                            callback: action => {
                                if(targetMode === 'requester')
                                    this.$router.push(({path: "/request"}));
                                else if(targetMode === 'worker')
                                    this.$router.push(({path: "/worker"}));
                            }
                        });
                        // let registerParams = { username: this.ruleForm.account, password: this.ruleForm.checkPass };
                        // requestRegister(registerParams).then(data => {
                        //     //NProgress.done();
                        //     let { msg, code, user } = data;
                        //     if (code !== 200) {
                        //         this.$message({
                        //             message: msg,
                        //             type: 'error'
                        //         });
                        //     } else {
                        //         sessionStorage.setItem('user', JSON.stringify(user));
                        //         this.$router.push({ path: '/' });
                        //     }
                        // });
                    } else {
                        console.log('Validation Error !');
                        return false;
                    }
                });
            }
        }
    }
</script>

<style scoped>
    .register-container {
        -webkit-border-radius: 5px;
        border-radius: 5px;
        -moz-border-radius: 5px;
        background-clip: padding-box;
        margin: 80px auto;
        width: 350px;
        padding: 35px 35px 15px 35px;
        background: #fff;
        border: 1px solid #eaeaea;
        box-shadow: 0 0 25px #cac6c6;
    }
    .title {
        margin: 0 auto 40px auto;
        text-align: center;
        color: #505458;
    }
    .remember {
        margin: 0 0 35px 80px;
    }
</style>