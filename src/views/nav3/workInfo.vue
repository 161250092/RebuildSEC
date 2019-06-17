<template>
<!--	<p align="center" style="color: #409EFF;font-weight: bold;font-size: 18px;">任务申请</p>-->
	<section>
		<div align="center" style="color: #409EFF;font-weight: bold;font-size: 18px;">待审核任务</div>

		<el-table :data="requests"  style="width: 100%">
		<el-table-column label="消息Id" prop="messageId">
		</el-table-column>

		<el-table-column label="任务编号" prop="taskId">
		</el-table-column>

		<el-table-column label="工人名称" prop="workerName">
		</el-table-column>

		<el-table-column label="积分奖励" prop="reward">
		</el-table-column>

<!--		<el-table-column label="">-->
<!--			<template slot-scope="scope">-->
<!--				<el-button-->
<!--						size="mini"-->
<!--						type="success"-->
<!--						@click="getIt(scope.row)">已了解-->
<!--				</el-button>-->
<!--			</template>-->
<!--		</el-table-column>-->
	</el-table>
		<el-pagination
				@size-change="handleSizeChange"
				@current-change="handleCurrentChange"
				:current-page.sync="currentPage3"
				:page-size="100"
				layout="prev, pager, next, jumper"
				:total="1000">
		</el-pagination>


		<br>





	</section>
</template>


<script>
	export default {
		data() {
			return {
				currentPage3:false,
				requests:[
					{
						messageId:1,
						taskId:1,
						workerName:"h",
						reward:100,
					},
					{
						messageId:2,
						taskId:2,
						workerName:"hh",
						reward:100,
					},

					{
						messageId:3,
						taskId:3,
						workerName:"hhh",
						reward:100,
					}



				],

			}
		},
		methods: {
			getIt(task){
				this.$message({
					message: '已了解',
					type: 'success'
				});
			},

			handleSizeChange(){

			}
		},


		mounted() {

		}
	}

</script>
