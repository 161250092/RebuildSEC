<template>
    <div>
        <el-form :model="ruleForm" :rules="rules2" ref="ruleForm" label-position="left" label-width="80px" class="login-container">
            <h3 class="title">登录</h3>
            <el-form-item label="账号" prop="account">
                <el-input type="text" v-model="ruleForm.account" auto-complete="off" placeholder="账号"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="ruleForm.pass" auto-complete="off" placeholder="密码"></el-input>
            </el-form-item>
            <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
            <el-form-item>
                <el-button type="primary" @click.native.prevent="handleSubmit(mode)" :loading="isLogin">登录</el-button>
                <el-button @click.native.prevent="handleReset">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "Login",
        props: ["mode"],
        data() {
            return {
                isLogin: false,
                ruleForm: {
                    account: 'admin',
                    pass: '123456'
                },
                rules2: {
                    account: [
                        { required: true, message: '请输入账号', trigger: 'blur' },
                    ],
                    pass: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                    ]
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
                        console.log("Login Success!");
                        this.isLogin = true;
                        if(targetMode === 'requester'){
                            localStorage.setItem("requester", _this.ruleForm.account);
                            this.$alert('即将前往个人中心', '登陆成功', {
                                confirmButtonText: '确定',
                                callback: action => {
                                    this.$router.push(({path: "/personInformation"}));
                                }
                            });
                        }
                        else{
                            localStorage.setItem("worker", _this.ruleForm.account);
                            this.$alert('即将前往任务接受中心', '登陆成功', {
                                confirmButtonText: '确定',
                                callback: action => {
                                    this.$router.push(({path: "/workerPublishedTasks"}));
                                }
                            });
                        }

                        // let loginParams = { username: this.ruleForm.account, password: this.ruleForm.checkPass };
                        // requestLogin(loginParams).then(data => {
                        //     if(targetMode === 'requester')
                        //         this.$router.push(({path: "/request"}));
                        //     else if(targetMode === 'worker')
                        //         this.$router.push(({path: "/worker"}));
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
    .login-container {
        -webkit-border-radius: 5px;
        border-radius: 5px;
        -moz-border-radius: 5px;
        background-clip: padding-box;
        margin: 100px auto;
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