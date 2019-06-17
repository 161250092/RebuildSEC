<template>
    <div>
        <div v-if="!isLogin">
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
        <div v-if="isLogin" style="text-align: center; margin: 10em 10em">
            <h3 style="font-size: 1.5em;">您已经登录了，无需再次登录</h3>
            <div style="font-size: 1.25em">
                <p>浏览器将在三秒后 自动跳转至</p>
                <a href="javascript:void(0);" @click="jump">{{mode==='requester'?'个人中心':'任务接受中心'}}</a>
            </div>
        </div>
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
            jump() {
                if(this.mode === 'requester')
                    this.$router.push(({path: "/personInformation"}));
                else
                    this.$router.push(({path: "/workerPublishedTasks"}));
            },
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
                            this.$router.push(({path: "/personInformation"}));
                        }
                        else{
                            localStorage.setItem("worker", _this.ruleForm.account);
                            this.$router.push(({path: "/workerPublishedTasks"}));
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
        },
        mounted() {
            let _this = this;
            if(_this.mode === 'requester'){
                _this.isLogin = (localStorage.getItem("requester") !== null);
                if(_this.isLogin){
                    setTimeout(() => {
                        if(_this.$router.currentRoute.path.indexOf("requesterHome/login") !== -1){
                            _this.$router.push(({path: "/personInformation"}));
                            console.log("is Log!!!")
                        }
                    }, 3000);
                }
            }
            else{
                _this.isLogin = (localStorage.getItem("worker") !== null);
                if(_this.isLogin){
                    setTimeout(() => {
                        if(_this.$router.currentRoute.path.indexOf("workerHome/login") !== -1) {
                            _this.$router.push(({path: "/workerPublishedTasks"}));
                        }
                    }, 3000);
                }
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