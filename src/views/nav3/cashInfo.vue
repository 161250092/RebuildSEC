<template>
<!--    	<p align="center" style="color: #409EFF;font-weight: bold;font-size: 18px;">资金流动</p>-->
	<section>
		<div align="center" style="color: #409EFF;font-weight: bold;font-size: 18px;">收入</div>
		<el-table :data="cashInfo"  style="width: 100%">
			<el-table-column type="expand">
				<template slot-scope="props">
					<el-form label-position="left" inline class="demo-table-expand">
						<el-form-item label="消息Id">
							<span>{{ props.row.messageId }}</span>
						</el-form-item>
					</el-form>
				</template>
			</el-table-column>

			<el-table-column label="数额" prop="quantity">
			</el-table-column>

			<el-table-column label="原因" prop="reason">
			</el-table-column>

<!--			<el-table-column label="">-->
<!--				<template slot-scope="scope">-->
<!--					<el-button-->
<!--							size="mini"-->
<!--							type="success"-->
<!--							@click="confirm(scope.row)">已了解-->
<!--					</el-button>-->
<!--				</template>-->
<!--			</el-table-column>-->

		</el-table>

		<br>
		<el-pagination
				@size-change="handleSizeChange"
				@current-change="handleCurrentChange"
				:current-page.sync="currentPage3"
				:page-size="100"
				layout="prev, pager, next, jumper"
				:total="1000">
		</el-pagination>


		<br>
		<div align="center" style="color: #ff7238;font-weight: bold;font-size: 18px;">支出</div>

		<el-table :data="cashInfo"  style="width: 100%">
			<el-table-column type="expand">
				<template slot-scope="props">
					<el-form label-position="left" inline class="demo-table-expand">
						<el-form-item label="消息Id">
							<span>{{ props.row.messageId }}</span>
						</el-form-item>
					</el-form>
				</template>
			</el-table-column>
			<el-table-column label="数额" prop="quantity">
			</el-table-column>

			<el-table-column label="原因" prop="reason">
			</el-table-column>

<!--			<el-table-column label="">-->
<!--				<template slot-scope="scope">-->
<!--					<el-button-->
<!--							size="mini"-->
<!--							type="success"-->
<!--							@click="confirm(scope.row)">已了解-->
<!--					</el-button>-->
<!--				</template>-->
<!--			</el-table-column>-->
		</el-table>
		<el-pagination
				@size-change="handleSizeChange"
				@current-change="handleCurrentChange"
				:current-page.sync="currentPage3"
				:page-size="100"
				layout="prev, pager, next, jumper"
				:total="1000">
		</el-pagination>
	</section>


</template>

<script>
    export default {
        name: "cashInfo",

        data(){
            return{
				currentPage3:false,
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
				this.$message({
					message: '已了解',
					type: 'success'
				});
            },

			handleSizeChange(){

			}

        },

        mounted() {
        	for(let i=4;i<7;i++) {
        		let a = {
					messageId:i,
					type:"收入",
					quantity:100,
					reason:"充值",
				};
				this.cashInfo.push(a);

			}

		}
	}
</script>

<style scoped>

</style>
