<template>
    <div>
        <div>
<!--            搜索框-->
            <div>
                <el-table :data="currentSubmittedTaskList" style="width: 100%"
                          :default-sort="{prop: 'submittedTime', order: 'descending'}">

                    <el-table-column type="expand" inline>
                        <template slot-scope="props">
                            <el-form lable-position="left">
                                <el-form-item label="理由">
                                    <span>{{props.row.description}}</span>
                                </el-form-item>
                            </el-form>
                        </template>
                    </el-table-column>

                    <el-table-column prop="id" label="任务ID" width="190" sortable></el-table-column>
                    <el-table-column prop="requester" label="发布者" width="150" sortable></el-table-column>
                    <el-table-column prop="title" label="任务" width="300" sortable></el-table-column>
                    <el-table-column prop="type" label="类型" width="100"
                                     :formatter="formatTaskType" sortable></el-table-column>
                    <el-table-column prop="submittedTime" label="提交时间" width="170"
                                     :formatter="formatTimeFromTimestamp" sortable></el-table-column>
                    <el-table-column prop="taskStatus" label="任务状态" width="120">
                        <template slot-scope="scope">
                            <el-tag :type="taskStatusTagTypeName(scope.row)"
                                    disable-transitions>{{formatTaskStatus(scope.row.taskStatus)}}
                            </el-tag>
                        </template>
                    </el-table-column>

                </el-table>
            </div>

<!--            表格-->
            <div>

            </div>

<!--            分页栏-->
            <div>
                <div style="text-align: center">
                    <el-pagination
                            background
                            @size-change="handlePageSizeChange"
                            @current-change="handlePageCurrentChange"
                            :current-page="currentPage"
                            :page-sizes="[10, 20, 30, 40]"
                            :page-size="pageSize"
                            layout="total, sizes, prev, pager, next, jumper"
                            :total="totalCount"
                    ></el-pagination>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import {formatTaskStatusLabel, formatTaskTypeLabel, unixTimeToTime} from "../../common/js/formatterFunctions";
    import workerSubmittedTaskList from "../../common/js/worker/workerSubmittedTaskList";
    import {taskStatuses} from "../../common/js/taskStatus";

    export default {
        name: "WorkerSubmittedTaskStatus",
        data() {
            return {
                totalSubmittedTaskList: workerSubmittedTaskList,
                currentSubmittedTaskList: [],

                pageSize: 10,
                currentPage: 1,
                totalCount: workerSubmittedTaskList.length,

                taskStatus: taskStatuses,
            }
        },
        mounted() {
            this.$nextTick(function () {
                this.loadData();
            })
        },
        methods: {

            handlePageSizeChange(newPageSize) {
                this.pageSize = newPageSize;
                this.loadData();
            },
            handlePageCurrentChange(newCurrentPage) {
                this.currentPage = newCurrentPage;
                this.loadData();
            },


            loadData() {
                let filterList = this.totalSubmittedTaskList;
                this.totalCount = filterList.length;

                let startIndex = (this.currentPage - 1) * this.pageSize;
                let endIndex = this.currentPage * this.pageSize;
                this.currentSubmittedTaskList = filterList.slice(startIndex, endIndex);
            },


            formatTimeFromTimestamp(row, column, cellValue, index) {
                return unixTimeToTime(cellValue);
            },
            formatTaskType(row, column, cellValue, index) {
                return formatTaskTypeLabel(cellValue);
            },
            formatTaskStatus(taskStatusValue) {
                return formatTaskStatusLabel(taskStatusValue);
            },

            taskStatusTagTypeName(row) {
                let tagTypeName = '';
                this.taskStatus.forEach((item) => {
                    if (item.value === row.taskStatus) {
                        tagTypeName = item.tagTypeName;
                    }
                });
                return tagTypeName;
            }
        }
    }
</script>

<style scoped>

</style>