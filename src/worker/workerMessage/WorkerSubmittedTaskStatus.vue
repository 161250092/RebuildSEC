<template>
    <div>
        <div>
<!--            搜索框-->
            <div style="margin: 10px">
                <el-row type="flex" justify="space-between">
                    <el-input v-model="searchCriteria.string" style="width: 90%"
                              placeholder="搜索所有任务">
                        <el-select slot="prepend" style="width: 120px;"
                                   v-model="searchCriteria.option" placeholder="请选择">
                            <el-option v-for="item in searchOptions"
                                       :key="item.value" :label="item.label" :value="item.value">
                            </el-option>
                        </el-select>
                        <el-button slot="append" icon="search" @click="searchTasks"></el-button>
                    </el-input>

                    <el-button icon="el-icon-edit"
                               @click="isFilterOpen = true">高级搜索</el-button>
                </el-row>
            </div>

<!--            表格-->
            <div>
                <el-table :data="currentSubmittedTaskList"
                          style="width: 100%"
                          :row-class-name="setTableColumnClassName"
                          :default-sort="{prop: 'submittedTime', order: 'descending'}">

                    <el-table-column type="expand">
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
                    <el-table-column prop="title" label="任务标题" width="300" sortable></el-table-column>
                    <el-table-column prop="type" label="类型" width="100"
                                     :formatter="formatTaskType" sortable></el-table-column>
                    <el-table-column prop="submittedTime" label="提交时间" width="170"
                                     :formatter="formatTimeFromTimestamp" sortable></el-table-column>
                    <el-table-column prop="taskStatus" label="任务状态" width="120">
                        <template slot-scope="scope">
<!--                            <el-tag :type="searchTaskStatusTagTypeName(scope.row.taskStatus)"-->
<!--                                    disable-transitions>{{formatTaskStatus(scope.row.taskStatus)}}-->
<!--                            </el-tag>-->
                            <div :class="taskStatusTagTypeName(scope.row.taskStatus)">
                                {{formatTaskStatus(scope.row.taskStatus)}}
                            </div>
                        </template>
                    </el-table-column>

                </el-table>
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

        <div>
            <el-dialog title="搜索条件筛选"
                       width="30%"
                       :visible.sync="isFilterOpen"
                       :close-on-click-modal="true"
                       :close-on-press-escape="true">

                <el-form  status-icon ref="details">
                    <el-form-item prop="taskType" label="任务类型">
                        <el-checkbox :indeterminate="isTaskStatusesIndeterminate"
                                     v-model="isAllTaskStatus"
                                     @change="handleTaskTypeAllChange">全选</el-checkbox>
                        <div style="margin: 15px 0;"></div>
                        <el-checkbox-group v-model="searchCriteria.filter.taskStatus"
                                           @change="handleTaskTypeChange">
                            <el-checkbox v-for="item in searchTaskStatus"
                                         :key="item.value" :label="item.value">{{item.label}}</el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item prop="latestEndDate" label="在本时间之前截止">
                        <el-date-picker v-model="searchCriteria.filter.latestEndDate"
                                        :picker-options="pickerOptions"
                                        placeholder="选择日期"></el-date-picker>
                    </el-form-item>
                </el-form>

                <div slot="footer" class="dialog-footer">
                    <el-button type="success" @click="handleFilterConfirm">确认</el-button>
                    <el-button type="primary" @click="isFilterOpen = false">取消</el-button>
                </div>
            </el-dialog>
        </div>
    </div>
</template>

<script>
    import {formatTaskStatusLabel, formatTaskTypeLabel, unixTimeToTime} from "../../common/js/formatterFunctions";
    import workerSubmittedTaskList from "../../common/js/worker/workerSubmittedTaskList";
    import {searchSubmittedTaskStatuses, taskStatusValues} from "../../common/js/taskStatus";

    export default {
        name: "WorkerSubmittedTaskStatus",
        data() {
            return {
                totalSubmittedTaskList: workerSubmittedTaskList,
                currentSubmittedTaskList: [],

                pageSize: 10,
                currentPage: 1,
                totalCount: workerSubmittedTaskList.length,

                searchOptions: [{
                    value: 'id',
                    label: '任务ID',
                }, {
                    value: 'requester',
                    label: '发布者'
                }, {
                    value: 'title',
                    label: '任务标题'
                }],
                searchCriteria: {
                    option: '',
                    string: '',
                    filter: {
                        taskStatus: taskStatusValues,
                        latestSubmittedDate: '',
                    }
                },

                isFilterOpen: false,
                isAllTaskStatus: true,
                isTaskStatusesIndeterminate: false,
                searchTaskStatus: searchSubmittedTaskStatuses,
                searchTaskStatusValue: taskStatusValues,
                pickerOptions: {
                    disabledDate(time) {
                        return time.getTime() <= Date.now();
                    },
                }
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
            handleFilterConfirm() {
                this.isFilterOpen = false;
                this.loadData();
            },
            handleTaskTypeAllChange(val) {
                this.searchCriteria.filter.taskStatus = this.isAllTaskStatus ? this.taskTypesValue : [];
                this.isTaskStatusesIndeterminate = false;
            },
            handleTaskTypeChange(value) {
                let selectedTaskTypeCount = value.length;
                this.isAllTaskStatus = (selectedTaskTypeCount === this.searchTaskStatus.length);
                this.isTaskStatusesIndeterminate = (selectedTaskTypeCount > 0
                    && selectedTaskTypeCount < this.searchTaskStatus.length);
            },

            searchTasks() {
                this.loadData();
            },
            loadData() {
                let searchCriteria = this.searchCriteria;

                let filterList = this.totalSubmittedTaskList.filter((item) => {
                    //任务类型
                    let isSelectedTaskType = false;
                    searchCriteria.filter.taskStatus.forEach((taskStatus) => {
                        if (item.taskStatus === taskStatus) { isSelectedTaskType = true; }
                    });
                    if (!isSelectedTaskType) { return false; }

                    //任务最晚截止时间
                    if (new Date(searchCriteria.filter.latestSubmittedDate).getTime() < item.submittedTime * 1000) { return false; }

                    //字符串查找
                    if (searchCriteria.option === '') {
                        if (!item.id.includes(searchCriteria.string)
                            && !item.requester.includes(searchCriteria.string)
                            && !item.title.includes(searchCriteria.string)) {
                            return false;
                        }
                    } else if (searchCriteria.option === 'id'
                        && !item.id.includes(searchCriteria.string)) {
                        return false;
                    } else if (searchCriteria.option === 'requester'
                        && !item.requester.includes(searchCriteria.string)) {
                        return false;
                    } else if (searchCriteria.option === 'title'
                        && !item.title.includes(searchCriteria.string)) {
                        return false;
                    }

                    return true;
                });
                
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

            taskStatusTagTypeName(taskStatusValue) {
                let tagTypeName = '';
                this.searchTaskStatus.forEach((item) => {
                    if (taskStatusValue === item.value) {
                        tagTypeName = item.tagTypeName;
                    }
                });
                return tagTypeName;
            },

            setTableColumnClassName(row, index){
                // 通过自己的逻辑返回一个class或者空
                return row.searchTaskStatus === 'rejected' ? '' : 'not-expand';
            },
        }
    }
</script>

<style>
    .not-expand .el-table__expand-column .cell {
        display: none;
    }
    .primary {
        color: #20a0ff;
    }
    .success {
        color: #11b95c;
    }
    .danger {
        color: #e64242;
    }
</style>