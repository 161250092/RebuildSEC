<template>
    <div>
        <div>
<!--            搜索框-->
            <div style="margin: 10px">
                <el-row type="flex" justify="space-between">
                    <el-input v-model="searchCriteria.string" style="width: 90%" class="element-box"
                              placeholder="搜索所有任务">
                        <el-select slot="prepend" style="width: 120px;"
                                   v-model="searchCriteria.option" placeholder="请选择">
                            <el-option v-for="item in searchOptions"
                                       :key="item.value" :label="item.label" :value="item.value">
                            </el-option>
                        </el-select>
                        <el-button slot="append" icon="search" @click="searchTasks"></el-button>
                    </el-input>

                    <el-button icon="el-icon-edit" class="element-box"
                               @click="isFilterOpen = true">高级搜索</el-button>
                </el-row>
            </div>

            <div>
                <!--            表格-->
                <div>
                    <el-table :data="currentTaskList"
                              :row-key="getRowKey"
                              :expand-row-keys="expandRowKeys"
                              :row-class-name="tableRowClassName"
                              style="width: 100%"
                              ref="taskTable"
                              :default-sort="{prop: 'accepted', order: 'descending'}"
                              @row-click="handleClickTable">

                        <el-table-column type="expand" inline>
                            <template slot-scope="props">
                                <el-form lable-position="left">
                                    <el-form-item label="任务ID">
                                        <span>{{props.row.id}}</span>
                                    </el-form-item>
                                    <el-form-item label="任务描述">
                                        <span>{{props.row.description}}</span>
                                    </el-form-item>
                                </el-form>
                            </template>
                        </el-table-column>

                        <el-table-column prop="requester" label="发布者" width="150"></el-table-column>
                        <el-table-column prop="title" label="任务标题" width="300"></el-table-column>
                        <el-table-column prop="accepted" label="接受数" width="100" sortable></el-table-column>
                        <el-table-column prop="type" label="类型" width="100"
                                         :formatter="formatTaskType" sortable></el-table-column>
                        <el-table-column prop="reward" label="奖励" width="100"
                                         :formatter="formatRewardFromNumber" sortable></el-table-column>
                        <el-table-column prop="endTime" label="截止时间" width="120"
                                         :formatter="formatDateFromTimestamp" sortable></el-table-column>

                        <el-table-column prop="actions" label="操作" align="right">
                            <template slot-scope="scope">
                                <el-button size="mini" @click="handleAccept(scope.$index, scope.row)">接受并工作</el-button>
                            </template>
                        </el-table-column>

                    </el-table>
                </div>

                <!--            分页栏-->
                <div style="margin-top: 15px;text-align: right">
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
                    <el-form-item prop="minAccepted" label="最小接受数">
                        <el-input size="small"  v-model="searchCriteria.filter.minAccepted"></el-input>
                    </el-form-item>
                    <el-form-item prop="minReward" label="最少奖励">
                        <el-input size="small"  v-model="searchCriteria.filter.minReward"></el-input>
                    </el-form-item>
                    <el-form-item prop="taskType" label="任务类型">
                        <el-checkbox :indeterminate="isTaskTypesIndeterminate"
                                     v-model="isAllTaskTypes"
                                     @change="handleTaskTypeAllChange">全选</el-checkbox>
                        <div style="margin: 15px 0;"></div>
                        <el-checkbox-group v-model="searchCriteria.filter.taskType"
                                           @change="handleTaskTypeChange">
                            <el-checkbox v-for="item in taskTypes"
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
    import publishedTaskList from '../../common/js/worker/workerPublishedTaskList'
    import {taskTypes, taskTypeValues} from '../../common/js/taskTypes';
    import workerTaskSearchOption from '../../common/js/worker/workerTaskSearchOption'
    import {formatTaskTypeLabel, unixTimeToDate} from '../../common/js/formatterFunctions'

    export default {
        name: "PublishedTaskList",
        data() {
            return {
                totalTaskList: publishedTaskList,
                currentTaskList: [],

                pageSize: 10,
                currentPage: 1,
                totalCount: publishedTaskList.length,

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
                },

                expandRowKeys: []
            }
        },
        mounted() {
            this.$nextTick(function () {
                this.loadData();
            })
        },
        methods: {
            handleClickTable(row, event, index) {
                if (this.expandRowKeys.indexOf(row.id) < 0) {
                    this.expandRowKeys.push(row.id);
                } else {
                    this.expandRowKeys.splice(this.expandRowKeys.indexOf(row.id), 1);
                }
            },
            handleAccept(index, row) {
                let url = '/worker_' + row.type;
                // this.$router.push(url);
                let _this = this;
                this.$confirm('确认接受吗?', '提示', {
                    //type: 'warning'
                }).then(() => {
                    _this.$router.push(url);
                }).catch(() => {

                });
            },
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
                this.searchCriteria.filter.taskType = this.isAllTaskTypes ? this.taskTypesValue : [];
                this.isTaskTypesIndeterminate = false;
            },
            handleTaskTypeChange(value) {
                let selectedTaskTypeCount = value.length;
                this.isAllTaskTypes = (selectedTaskTypeCount === this.taskTypes.length);
                this.isTaskTypesIndeterminate = (selectedTaskTypeCount > 0
                    && selectedTaskTypeCount < this.taskTypes.length);
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
                    if (new Date(searchCriteria.filter.latestEndDate).getTime() < item.endTime * 1000) { return false; }

                    //字符串查找
                    if (searchCriteria.option === '') {
                        if (!item.id.includes(searchCriteria.string)
                            && !item.requester.includes(searchCriteria.string)
                            && !item.title.includes(searchCriteria.string)
                            && !item.description.includes(searchCriteria.string)) {
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
                    } else if (searchCriteria.option === 'description'
                            && !item.description.includes(searchCriteria.string)) {
                        return false;
                    }

                    return true;
                });

                this.totalCount = filterTaskList.length;

                let startIndex = (this.currentPage - 1) * this.pageSize;
                let endIndex = this.currentPage * this.pageSize;
                this.currentTaskList = filterTaskList.slice(startIndex, endIndex);
            },

            formatTaskType(row, column, cellValue, index) {
                return formatTaskTypeLabel(cellValue);
            },
            formatRewardFromNumber(row, column, cellValue, index) {
                return '￥' + cellValue;
            },
            formatDateFromTimestamp(row, column, cellValue, index) {
                return unixTimeToDate(cellValue);
            },
            getRowKey(row){
                return row.id;
            },
            tableRowClassName(row, rowIndex) {
                if (rowIndex % 2 === 1) {
                    return 'success-row';
                }
                return '';
            }
        }
    }
</script>

<style>
    .element-box {
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
    }

    .el-table .success-row {
        background: oldlace;
    }
</style>