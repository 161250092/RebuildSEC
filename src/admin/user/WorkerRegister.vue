<template>
    <section>
        <el-form-item>工人注册审核</el-form-item>

        <!--列表-->
        <el-table :data="users" highlight-current-row v-loading="listLoading" @selection-change="selsChange" style="width: 100%;">
            <el-table-column type="selection" width="55">
            </el-table-column>
            <el-table-column type="index" width="60">
            </el-table-column>
            <el-table-column prop="name" label="用户名" width="120" sortable>
            </el-table-column>
            <el-table-column prop="ID" label="工人ID" width="120" sortable>
            </el-table-column>
            <el-table-column prop="email" label="邮箱" width="120" sortable>
            </el-table-column>
            <el-table-column prop="phone" label="电话" width="120" sortable>
            </el-table-column>
            <el-table-column prop="addr" label="地址" min-width="140" sortable>
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
        name:'WorkerRegister',
        data() {
            return {
                users: [
                    {
                        name:'',
                        ID:'',
                        email:'',
                        phone:'',
                        addr:''
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