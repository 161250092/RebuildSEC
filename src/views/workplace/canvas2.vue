<template>
<!--方框标注的显示-->
    <section>

    <div align="center" class="father">
        <canvas id="canvas" width="650" height="414" class="canvas"/>
        <img :src=currentImageUrl  class="canvas_bgp">

        <div class="buttonPosition">
            <el-button class="fa fa-arrow-left" @click="previewImg"></el-button>
            <el-button class="fa fa-arrow-right" @click="nextImg"></el-button>
            <p>{{currentIndex}}/{{totalNum}}</p>
        </div>

        <div class="tagsPosition" align="center">
            <el-table :data="tagsInShowing"  style="width: 30%" >
                <el-table-column label="标签" prop="content">
                </el-table-column>
            </el-table>
        </div>

    </div>

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

            }

        },

        methods:{
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
                    this.$message({
                        message: '最后一张',
                        type: 'warning'
                    });
                }
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
