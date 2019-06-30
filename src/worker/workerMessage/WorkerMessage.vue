<template>
    <div>
        <div>
<!--            表格操作框-->
            <div>
                <el-row type="flex" justify="row-bg">
                    <el-button icon="el-icon-edit" @click="handleDeleteAllSelection">删除</el-button>
                    <el-button icon="el-icon-edit" @click="handleReadAllSelection">已读</el-button>
                    <el-button icon="el-icon-edit" @click="handleNotReadAllSelection">未读</el-button>
                </el-row>
            </div>

<!--            表格-->
            <div style="margin-top: 10px">
                <el-table :data="currentMessageList"
                          style="width: 100%"
                          tooltip-effect="dark"
                          :row-class-name="tableRowClassName"
                          :default-sort="{prop: 'date', order: 'descending'}"
                          @selection-change="handleTableSelectionChange"
                          @cell-dblclick="showMessageDetailByDblclick">

                    <el-table-column type="selection" width="55"></el-table-column>

                    <el-table-column prop="sender" label="发送人" width="150"></el-table-column>
                    <el-table-column prop="date" label="发送时间" width="200"
                                     :formatter="formatDateFromTimestamp" sortable></el-table-column>
                    <el-table-column prop="title" label="标题" min-width="300"></el-table-column>

                    <el-table-column prop="showDetail">
                        <template slot-scope="scope">
                            <el-button type="text" @click="showMessageDetail(scope.$index, scope.row)">
                                查看
                            </el-button>
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

        <div>
            <el-dialog title=""
                       width="30%"
                       :visible.sync="isMessageDialogOpen"
                       :close-on-click-modal="true"
                       :close-on-press-escape="true">
                <p style="font-size: 30px;font-weight: bold;margin: 0 0 20px 40%">信息详情</p>
                <el-row>
                    <el-col :span="20">
                        <el-form class="editor-form"
                                 :model="selectedMessage"
                                 status-icon
                                 ref="selectedMessage"
                                 label-width="100px" label-he>

                            <el-form-item  label="标题" class="message-title">
                                <span>{{selectedMessage.title}} </span>
                            </el-form-item>

                            <el-form-item label="发送者" class="message-title">
                                <span>{{selectedMessage.sender}}</span>
                            </el-form-item>

                            <el-form-item label="发送时间" class="message-title">
                                <span>{{directlyFormatDateFromTimestamp(selectedMessage.date)}}</span>
                            </el-form-item>

                            <el-form-item  label="内容">
                                <span>{{selectedMessage.detail}} </span>
                            </el-form-item>
                        </el-form>
                    </el-col>
                </el-row>


                <div slot="footer" class="dialog-footer">
                    <el-button type="primary" @click="isMessageDialogOpen = false">关闭</el-button>
                </div>
            </el-dialog>
        </div>
    </div>
</template>

<script>
    import workerMessageList from "../../common/js/worker/workerMessageList";
    import {unixTimeToDate} from '../../common/js/formatterFunctions'

    export default {
        name: "WorkerMessage",
        data() {
            return {
                totalMessageList: workerMessageList,
                currentMessageList: [],

                isMessageDialogOpen: false,
                selectedMessage: {},
                tableRowSelectionList: [],

                pageSize: 10,
                currentPage: 1,
                totalCount: workerMessageList.length,
            }
        },
        mounted() {
            this.$nextTick(function () {
                this.loadData();
            })
        },
        methods: {
            showMessageDetail(rowIndex, row) {
                row.hasRead = true;
                this.selectedMessage = row;
                this.isMessageDialogOpen = true;
            },
            showMessageDetailByDblclick(row, column, cell, event) {
                row.hasRead = true;
                this.selectedMessage = row;
                this.isMessageDialogOpen = true;
            },

            handleTableSelectionChange(selectedRow) {
                this.tableRowSelectionList = selectedRow;
            },

            handleDeleteAllSelection() {
                let totalMessageList = this.totalMessageList;
                this.tableRowSelectionList.forEach((selectedMessage) => {
                    let selectedIndex = totalMessageList.indexOf(selectedMessage);
                    totalMessageList.splice(selectedIndex, 1);
                });
                this.totalMessageList = totalMessageList;
                this.tableRowSelectionList = [];

                this.loadData();
            },
            handleReadAllSelection() {
                this.tableRowSelectionList.forEach((item) => {
                    item.hasRead = true;
                });
            },
            handleNotReadAllSelection() {
                this.tableRowSelectionList.forEach((item) => {
                    item.hasRead = false;
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

            loadData() {
                let filterMessageList = this.totalMessageList;
                this.totalCount = filterMessageList.length;

                let startIndex = (this.currentPage - 1) * this.pageSize;
                let endIndex = this.currentPage * this.pageSize;
                this.currentMessageList = filterMessageList.slice(startIndex, endIndex);
            },

            formatDateFromTimestamp(row, column, cellValue, index) {
                return unixTimeToDate(cellValue);
            },
            directlyFormatDateFromTimestamp(timestamp) {
                return unixTimeToDate(timestamp);
            },

            tableRowClassName(row, rowIndex) {
                if (row.hasRead === true) {
                    return 'has-read-row';
                }else {
                    return 'not-read-row';
                }
            },
        },
    }
</script>

<style>
    .el-table .not-read-row {
        font-weight: 700;
    }

    .el-table .has-read-row {

    }

    .message-title {
        margin-bottom: 3px;
        font-weight: bold;
    }

    .element-box {
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
    }
</style>