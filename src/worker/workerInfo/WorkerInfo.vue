<template>
    <div>
        <div>
            <el-row>
                <el-col :span="10">
                    <el-form class="editor-form" 
                             :model="worker" 
                             status-icon 
                             ref="worker" 
                             label-width="100px">

                        <el-form-item label="工人ID">
                            <span>{{worker.ID}}</span>
                        </el-form-item>
                        
                        <el-form-item label="名称">
                            <span>{{worker.name}}</span>
                        </el-form-item>

                        <el-form-item  label="声望">
                            <span>{{worker.prestige}} </span>
                        </el-form-item>
                        
                        <el-form-item  label="余额">
                            <span>{{worker.balance}} </span>
                        </el-form-item>

                        <el-form-item  label="邮箱">
                            <span>{{worker.mail}} </span>
                        </el-form-item>

                        <el-form-item  label="电话">
                            <span>{{worker.phone}} </span>
                        </el-form-item>
                        
                    </el-form>
                </el-col>
            </el-row>
        </div>

        <div align="right">
            <el-row>
                <el-button icon="el-icon-edit"
                           @click="edit()">
                    修改个人信息
                </el-button>

                <el-button type="danger"
                           @click="deleteAccount()">
                    注销账号
                </el-button>
            </el-row>
        </div>
        <div>
            <el-dialog title="删号确定"
                       :visible.sync="showDeleteAccount"
                       width="30%"
                       :close-on-click-modal="false"
                       :close-on-press-escape="false">

                <span>您确定删除账号吗，一旦操作，不可撤销</span>

                <div slot="footer" class="dialog-footer">
                    <el-button type="danger" @click="showDeleteAccount = false">确认</el-button>
                    <el-button type="primary" @click="showDeleteAccount = false">取消</el-button>
                </div>

            </el-dialog>
        </div>
        <div>
            <el-dialog title="修改个人信息"
                       :visible.sync="showEditor"
                       width="40%"
                       :close-on-click-modal="false"
                       :close-on-press-escape="false">

                <el-form  status-icon ref="details">
                    <el-form-item prop="mail" label="名称">
                        <el-input size="small"  v-model="worker.name"></el-input>
                    </el-form-item>
                    <el-form-item prop="mail" label="邮箱">
                        <el-input size="small"  v-model="worker.mail"></el-input>
                    </el-form-item>
                    <el-form-item prop="phone" label="电话">
                        <el-input size="small"  v-model="worker.phone"></el-input>
                    </el-form-item>
                </el-form>

                <div slot="footer" class="dialog-footer">
                    <el-button type="success" @click="showEditor = false">确认</el-button>
                    <el-button type="primary" @click="showEditor = false">取消</el-button>
                </div>
            </el-dialog>
        </div>
    </div>
</template>

<script>
    export default {
        name: "WorkerInfo",
        data() {
            return {
                worker: {
                    ID: 'A2GCPZ6HVH27EN',
                    name: '张某某',
                    prestige: 93,
                    balance: 324.56,
                    phone: '18898765432',
                    mail: 'kksk@jq.com',
                },
                showEditor: false,
                showDeleteAccount: false
            }
        },
        methods: {
            edit(){
                this.showEditor = true;
            },
            deleteAccount(){
                this.showDeleteAccount = true;
            },
        }
    }
</script>

<style scoped>

</style>