<template>
    <div>
        <div>
            <p>{{searchCriteria}}</p>
<!--            搜索框-->
            <div>
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
                <el-table :data="currentTaskList" style="width: 100%"
                          :default-sort="{prop: 'endDate', order: 'descending'}">

                    <el-table-column type="expand">
                        <template slot-scope="props">
                            <el-form lable-position="left">
                                <el-form-item label="任务描述">
                                    <span>{{props.row.description}}</span>
                                </el-form-item>
                            </el-form>
                        </template>
                    </el-table-column>

                    <el-table-column prop="requester" label="发布者" width="150"></el-table-column>
                    <el-table-column prop="title" label="任务" width="300"></el-table-column>
                    <el-table-column prop="type" label="类型" width="100"
                                     :formatter="formatTaskType" sortable></el-table-column>
                    <el-table-column prop="schedule" label="进度" width="100"
                                     :formatter="formatSchedule" sortable></el-table-column>
                    <el-table-column prop="reward" label="奖励" width="100"
                                     :formatter="formatRewardFromNumber" sortable></el-table-column>
                    <el-table-column prop="endDate" label="截止时间" width="120"
                                     :formatter="formatDateFromTimestamp" sortable></el-table-column>

                    <el-table-column
                            prop="actions"
                            label="操作"
                            align="right">
                        <template slot-scope="scope">
                            <el-button
                                    size="mini"
                                    @click="handleWork(scope.$index, scope.row)"
                            >继续工作</el-button>
                        </template>
                    </el-table-column>

                </el-table>
            </div>
<!--            分页栏-->
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
</template>

<script>
    import workerAcceptedTaskList from '../../common/js/workerAcceptedTaskList';
    import {taskTypes, taskTypeValues} from '../../common/js/taskTypes'
    import workerTaskSearchOption from '../../common/js/workerTaskSearchOption'

    export default {
        name: "WorkerTaskList",
        data() {
            return {
                totalTaskList: workerAcceptedTaskList,
                currentTaskList: [],

                pageSize: 10,
                currentPage: 1,
                totalCount: workerAcceptedTaskList.length,

                searchOptions: workerTaskSearchOption,
                searchCriteria: {
                    option: '',
                    string: '',
                    filter: {
                        minAccepted: 0,
                        minReward: 0.01,
                        taskType: taskTypeValues,
                        latestEndDate: '',
                    }
                },

                isFilterOpen: false,
                isAllTaskTypes: true,
                isTaskTypesIndeterminate: false,
                taskTypes: taskTypes,
                taskTypesValue: taskTypeValues,
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
            handleAccept(index, row) {
                console.log(index, row);
            },

            searchTasks() {
                this.loadData();
            },
            loadData() {
                let searchCriteria = this.searchCriteria;

                let filterTaskList = this.totalTaskList.filter((item) => {
                    //任务接受数
                    if (item.accepted < searchCriteria.filter.minAccepted) { return false; }

                    //任务最低奖励
                    if (item.reward < searchCriteria.filter.minReward) { return false; }

                    //任务类型
                    let isSelectedTaskType = false;
                    searchCriteria.filter.taskType.forEach((taskType) => {
                        if (item.type === taskType) { isSelectedTaskType = true; }
                    });
                    if (!isSelectedTaskType) { return false; }

                    //任务最晚截止时间
                    if (new Date(searchCriteria.filter.latestEndDate).getTime() < item.endDate * 1000) { return false; }

                    //字符串查找
                    if (this.searchOptions === '') {
                        if (!item.requester.includes(searchCriteria.string)
                            || !item.title.includes(searchCriteria.string)
                            || !item.description.includes(searchCriteria.string) ) { return false; }
                        else if (this.searchOptions === 'requester'
                            && !item.requester.includes(searchCriteria.string)) { return false; }
                        else if (this.searchOptions === 'title'
                            && !item.title.includes(searchCriteria.string)) { return false; }
                        else if (this.searchOptions === 'description'
                            && !item.description.includes(searchCriteria.string)) { return false; }
                    }

                    return true;
                });

                this.totalCount = filterTaskList.length;

                let startIndex = (this.currentPage - 1) * this.pageSize;
                let endIndex = this.currentPage * this.pageSize;
                this.currentTaskList = filterTaskList.slice(startIndex, endIndex);
            },

            formatSchedule(row, column, cellValue, index) {
                return (cellValue * 100) + '%';
            },
            formatTaskType(row, column, cellValue, index) {
                let typeStr = '错误类型';
                this.taskTypes.forEach((item) => {
                    if (item.value === cellValue) {
                        typeStr = item.label;
                    }
                });
                return typeStr;
            },
            formatRewardFromNumber(row, column, cellValue, index) {
                return '￥' + cellValue;
            },
            formatDateFromTimestamp(row, column, cellValue, index) {
                let date = new Date(cellValue * 1000);
                return date.toLocaleDateString();
            },
        }
    }
</script>

<style scoped>

</style>