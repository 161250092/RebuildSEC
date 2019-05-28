<template>
<!--    	<p align="center" style="color: #409EFF;font-weight: bold;font-size: 18px;">资金流动</p>-->
    	<el-table :data="cashInfo"  style="width: 100%">
    		<el-table-column label="消息Id" prop="messageId">
    		</el-table-column>

    		<el-table-column label="类型" prop="type">
    		</el-table-column>

    		<el-table-column label="数额" prop="quantity">
    		</el-table-column>

    		<el-table-column label="原因" prop="reason">
    		</el-table-column>

    		<el-table-column label="">
    			<template slot-scope="scope">
    				<el-button
    						size="mini"
    						type="success"
    						@click="confirm(scope.row)">已了解
    				</el-button>
    			</template>
    		</el-table-column>
    	</el-table>
</template>

<script>
    export default {
        name: "cashInfo",

        data(){
            return{
                cashInfo:[
                    {
                        messageId:1,
                        type:"收入",
                        quantity:100,
                        reason:"充值",
                    },
                    {
                        messageId:2,
                        type:"支出",
                        quantity:150,
                        reason:"发布任务",
                    },
                    {
                        messageId:3,
                        type:"收入",
                        quantity:100,
                        reason:"充值",
                    }
                ]
            }
        },
        methods:{
            confirm(task){
                alert("got it");
            }
        }
    }
</script>

<style scoped>

</style>
