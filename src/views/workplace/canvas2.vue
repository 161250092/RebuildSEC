<template>
<!--方框标注的显示-->
    <section>

    <div align="center" class="father">
        <canvas id="canvas" width="650" height="414" class="canvas"/>
        <img :src=currentImageUrl  class="canvas_bgp">

        <div class="buttonPosition">
            <el-button class="fa fa-arrow-left" @click="previewImg"></el-button>
            <el-button class="fa fa-arrow-right" @click="nextImg"></el-button>
            <el-button v-if="theLast" type="success" @click="pass">通过</el-button>
            <el-button v-if="theLast"  type="warning" @click="reject">驳回</el-button>
            <el-button v-if="theLast" type="danger" @click="abolish">废弃</el-button>
            <el-button v-if="theLast" @click="returnToReviewPage">返回</el-button>
            <p>{{currentIndex}}/{{totalNum}}</p>
        </div>

        <div class="tagsPosition" align="center">
            <el-table :data="tagsInShowing"  style="width: 30%" >
                <el-table-column label="标签" prop="content">
                </el-table-column>
            </el-table>
        </div>

    </div>

        <el-dialog title="评分" :visible.sync="showRate" width="15%" :close-on-click-modal="false"
                   :close-on-press-escape="false">
            <el-rate
                    v-model="rate"
                    :colors="colors">
            </el-rate>

            <div slot="footer" class="dialog-footer">
                <el-button type="success" @click="showPassMessage">确认</el-button>
                <el-button type="primary" @click="showRate = false">取消</el-button>
            </div>

        </el-dialog>

        <el-dialog title="驳回确定" :visible.sync="rejectConfirmInfo" width="30%" :close-on-click-modal="false"
                   :close-on-press-escape="false">
            <span>您确定驳回吗，一旦操作，不可撤销</span>

            <div slot="footer" class="dialog-footer">
                <el-button type="danger" @click="showRejectInfo">确认</el-button>
                <el-button type="primary" @click="rejectConfirmInfo = false">取消</el-button>
            </div>

        </el-dialog>




        <el-dialog title="废弃确定" :visible.sync="abolishConfirmInfo" width="30%" :close-on-click-modal="false"
                   :close-on-press-escape="false">
            <span>您确定废弃吗，一旦操作，不可撤销</span>

            <div slot="footer" class="dialog-footer">
                <el-button type="danger" @click="showAbolishInfo">确认</el-button>
                <el-button type="primary" @click="abolishConfirmInfo = false">取消</el-button>
            </div>

        </el-dialog>



    </section>


</template>

<script>
    export default {
        name: "canvas2",
        data(){
            return {
                currentImageUrl:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3443176063,4021563566&fm=27&gp=0.jpg",
                reviewId:"10086",

                currentIndex:1,
                totalNum:5,
                theLast:false,
                imgUrl:[
                    "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3443176063,4021563566&fm=27&gp=0.jpg",
                    "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2814109303,2147705560&fm=27&gp=0.jpg",
                    "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2349781172,4133730419&fm=27&gp=0.jpg",
                    "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2922170376,2371336021&fm=27&gp=0.jpg",
                    "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4117698333,1699709581&fm=27&gp=0.jpg",
                ],
                tagsInShowing:[
                    {
                        tagsId:1,
                        content:"卡通人物"
                    },
                    {
                        tagsId:2,
                        content:"男生"
                    }
                ],

                tagsInfo:[
                    [{
                        tagsId:1,
                        content:"卡通人物"
                    },
                        {
                            tagsId:2,
                            content:"男生"
                        }],

                    [
                        {
                            tagsId:1,
                            content:"卡通人"
                        },
                        {
                            tagsId:2,
                            content:"女生"
                        }
                    ],

                    [
                        {
                            tagsId:1,
                            content:"简笔画"
                        }

                    ],

                    [
                        {
                            tagsId:1,
                            content:"卡通"
                        },
                        {
                            tagsId:2,
                            content:"老鼠"
                        },
                        {
                            tagsId:3,
                            content:"皮卡丘"
                        }
                    ],

                    [
                        {
                            tagsId:1,
                            content:"小帅哥"
                        }
                    ]
                ],
                rate:null,
                colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
                showRate:false,
                rejectConfirmInfo:false,
                abolishConfirmInfo:false,


            }



        },

        methods:{
            showPassMessage(){
                this.$message({
                    message: '已通过',
                    type: 'success'
                });
                this.showRate = false;
                this.$router.push({ path: '/checkSubmittedLabel' });
            },
            pass(){
                this.showRate = true;
            },

            showRejectInfo(){
                this.$message({
                    message: '已驳回',
                    type: 'success'
                });
                this.rejectConfirmInfo = false;
                this.$router.push({ path: '/checkSubmittedLabel' });
            },
            reject(){
                this.rejectConfirmInfo = true;
            },

            showAbolishInfo(){
                this.$message({
                    message: '已废弃',
                    type: 'success'
                });

                this.abolishConfirmInfo  =false;
                this.$router.push({ path: '/checkSubmittedLabel' });
            },

            abolish(){
                this.abolishConfirmInfo = true;
            },


            previewImg(){
                if(this.currentIndex>=2) {
                    this.currentIndex--;
                    this.currentImageUrl = this.imgUrl[this.currentIndex-1];
                    this.tagsInShowing = this.tagsInfo[this.currentIndex-1];
                }
                else
                {
                    this.$message({
                        message: '第一张',
                        type: 'warning'
                    });
                }


            },
            nextImg(){
                if(this.currentIndex<=4){
                    this.currentIndex++;
                    this.currentImageUrl = this.imgUrl[this.currentIndex-1];
                    this.tagsInShowing = this.tagsInfo[this.currentIndex-1];
                }
                else
                {
                    this.theLast = true;
                    this.$message({
                        message: '最后一张',
                        type: 'warning'
                    });
                }
            },
            returnToReviewPage(){
                this.$router.push({ path: '/checkSubmittedLabel' });
            }
        },
        mounted() {
            let canvas = document.getElementById("canvas");
            let context = canvas.getContext("2d");
            // context.fillStyle = "#FF0000";
            // context.fillRect(50,50,150,100);

            context.strokeStyle = "#ff0000";

            // context.lineTo(20, 20);
            // context.lineTo(20, 70);
            // context.lineTo(70, 70);
            // context.lineTo(20, 20);
            context.rect(150,60,300,300);
            context.stroke();
        }


    }
</script>

<style scoped>

</style>
<style lang="scss" scoped>

    .buttonPosition{
        top: 450px;
        left: 0;
        position: relative;
    }
    .tagsPosition{
        top: 50px;
        left: 450px;
        position: relative;
    }

    .father{
        /*标签位置设置为相对的*/
        position: relative;
        text-align: center;
        width: 800px;
    }
    /*canvas的大小需要在起标签内设置，否则会拉伸或缩小默认的大小*/
    .canvas{
        border:5px solid black;
        /*位置绝对*/
        position: absolute;
        top: 0;
        left: 50px;
        /*设置所在层数，在上层*/
        z-index: 1;
    }

    /*需要将img背景图的尺寸和canvas的尺寸设置相同*/
    .canvas_bgp{
        width: 650px;
        height: 414px;
        /*位置绝对*/
        position: absolute;
        top: 0;
        left: 50px;
    }
</style>
