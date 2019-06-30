<template>
    <section>
        <el-form-item>发布者注册审核</el-form-item>

        <!--列表-->
        <el-table :data="users" highlight-current-row v-loading="listLoading" @selection-change="selsChange" style="width: 100%;">
            <el-table-column type="selection" width="55">
            </el-table-column>
            <el-table-column type="index" width="60">
            </el-table-column>
            <el-table-column prop="name" label="用户名" width="160" sortable>
            </el-table-column>
            <el-table-column prop="email" label="邮箱" width="130" sortable>
            </el-table-column>
            <el-table-column prop="phone" label="电话" width="130" sortable>
            </el-table-column>
            <el-table-column prop="addr" label="地址" min-width="180" sortable>
            </el-table-column>
            <el-table-column label="审核" width="150">
                <template slot-scope="scope">
                    <el-button size="small" @click="pass(scope.$index, scope.row)">通过</el-button>
                    <el-button type="danger" size="small" @click="notPass(scope.$index, scope.row)">不通过</el-button>
                </template>
            </el-table-column>
        </el-table>

        <!--工具条-->
        <el-col :span="24" class="toolbar">
            <el-button type="danger" @click="batchPass" :disabled="this.sels.length===0">批量通过</el-button>
            <el-pagination layout="prev, pager, next" @current-change="batchChange" :page-size="20" :total="total" style="float:right;">
            </el-pagination>
        </el-col>

    </section>
</template>

<script>

    export default {
        name:'RequesterRegister',
        data() {
            return {
                users: [
                    {
                        name:'张三',
                        email:'87412698@qq.com',
                        phone:'18501236548',
                        abbr:'江苏省'
                    },
                    {
                        name:'李四',
                        email:'8945125981@qq.com',
                        phone:'13500098425',
                        abbr:'浙江省'
                    },
                    {
                        name:'汪仁',
                        email:'987412589@qq.com',
                        phone:'117245314651',
                        abbr:'北京市'
                    },
                    {
                        name:'赵梁',
                        email:'987416985@qq.com',
                        phone:'15123548961',
                        abbr:'湖北省'
                    },
                    {
                        name:'李辉',
                        email:'98741286@qq.com',
                        phone:'15425605560',
                        abbr:'福建省'
                    },
                    {
                        name:'王志',
                        email:'698741269@qq.com',
                        phone:'13852466184',
                        abbr:'新疆'
                    },
                ],
                total: 0,
                page: 1,
                listLoading: false,
                sels: [],//列表选中列

            }
        },
        methods: {
            batchChange(val) {
                this.page = val;
                this.getUsers();
            },

            selsChange: function (sels) {
                this.sels = sels;
            },

            pass(){
                this.$message({
                    message: '不通过审批成功',
                    type: 'success'
                });
            },

            notPass(){
                this.$message({
                    message: '通过审批成功',
                    type: 'success'
                });
            },

            //批量通过
            batchPass: function () {
                var ids = this.sels.map(item => item.id).toString();
                this.$confirm('确认通过选中的发布者注册吗？', '提示', {
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        message: '通过审批成功',
                        type: 'success'
                    });
                }).catch(() => {

                });
            },

        },
        mounted() {
            this.getUsers();
        }
    }

</script>

<style scoped>

</style>