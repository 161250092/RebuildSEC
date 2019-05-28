<template>
    <section>

        <div>
            <el-row>
                <el-col :span="10">
                    <el-form class="editor-form" :model="details" status-icon ref="details"
                             label-width="100px">

                        <el-form-item  label="名称">
                            <span>{{details.name}} </span>
                        </el-form-item>


                        <el-form-item  label="声望">
                            <span>{{details.prestige}} </span>
                        </el-form-item>


                        <el-form-item  label="余额">
                            <span>{{details.balance}} </span>
                        </el-form-item>

                        <el-form-item  label="最大发布数">
                            <span>{{details.maxPublishedNum}} </span>
                        </el-form-item>

                        <el-form-item  label="邮箱">
                            <span>{{details.mail}} </span>
                        </el-form-item>

                        <el-form-item  label="电话">
                            <span>{{details.phone}} </span>
                        </el-form-item>
                    </el-form>
                </el-col>

                <el-col :span="12">
                    <div align="center" style="color: #409EFF;font-weight: bold;font-size: 18px;">任务占比</div>
                    <div id="container" style="width:100%; height:400px;"></div>
                </el-col>
            </el-row>
        </div>

        <div align="right">
            <el-row>
                <el-button icon="el-icon-edit"
                           @click="edit()">修改个人信息
                </el-button>

                <el-button type="danger"
                           @click="deleteAccount()">注销账号
                </el-button>
            </el-row>
        </div>
        <!--删号-->
        <el-dialog title="删号确定" :visible.sync="showDeleteAccount" width="30%" :close-on-click-modal="false"
                   :close-on-press-escape="false">
            <span>您确定删除账号吗，一旦操作，不可撤销</span>
            <div slot="footer" class="dialog-footer">
                <el-button type="danger" @click="showDeleteAccount = false">确认</el-button>
                <el-button type="primary" @click="showDeleteAccount = false">取消</el-button>
            </div>
        </el-dialog>

        <!--修该个人信息-->
        <el-dialog title="修改个人信息" :visible.sync="showEditor" width="40%" :close-on-click-modal="false"
                   :close-on-press-escape="false">

            <el-form  status-icon ref="details">

                <el-form-item prop="mail" label="邮箱">
                    <el-input size="small"  v-model="details.mail"></el-input>
                </el-form-item>

                <el-form-item prop="phone" label="电话">
                    <el-input size="small"  v-model="details.phone"></el-input>
                </el-form-item>

            </el-form>

            <div slot="footer" class="dialog-footer">
                <el-button type="success" @click="showEditor = false">确认</el-button>
                <el-button type="primary" @click="showEditor = false">取消</el-button>
            </div>
        </el-dialog>

    </section>

</template>

<script>
    import echarts from 'echarts'

    export default {
        name: "personInformation",
        data(){
            return{
                details:{
                    name: "苗卫星",
                    prestige:100,
                    balance:999.00,
                    phone:18805199036,
                    mail:"24e4314141@qq.com",
                    maxPublishedNum:10

                },
                showEditor:false,
                showDeleteAccount:false

            }
        },

        methods:{
            edit(){
                this.showEditor = true;
            },
            deleteAccount(){
                this.showDeleteAccount = true;
            },

            taskNumcharts(){
                var dom = document.getElementById("container");
                var myChart = echarts.init(dom);
                var app = {};
                let option = null;
                app.title = '环形图';

                option = {
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        x: 'left',

                        data:['发布任务数','剩余可发布数']
                    },
                    series: [
                        {
                            name:'完成情况',
                            type:'pie',
                            radius: ['50%', '70%'],
                            avoidLabelOverlap: false,
                            label: {
                                normal: {
                                    show: false,
                                    position: 'center'
                                },
                                emphasis: {
                                    show: true,
                                    textStyle: {
                                        fontSize: '15',
                                        fontWeight: 'bold'
                                    }
                                }
                            },
                            labelLine: {
                                normal: {
                                    show: false
                                }
                            },
                            data:[
                                {value:2, name:'已发布'},
                                {value:8, name:'剩余'}

                            ]
                        }
                    ]
                };
                if (option && typeof option === "object") {
                    myChart.setOption(option, true);
                }
            },

        },

        mounted(){
            this.taskNumcharts()
        }
    }
</script>
