<template>
<section>

    <div>
        <div id="canvasContainer" align="center">
<!--            <canvas id="drawingCanvas">-->
<!--            </canvas>-->
            <img :src=currentImageUrl>
        </div>
    </div>

    <div align="center">
        <el-button class="fa fa-arrow-left" @click="previewImg"></el-button>
        <el-button class="fa fa-arrow-right" @click="nextImg"></el-button>
    </div>
    <div align="center">
        <p>{{currentIndex}}/{{totalNum}}</p>
        <p align="center">标签</p>
        <el-table :data="tagsInShowing"  style="width: 80%" >
            <el-table-column label="Id" prop="tagsId">
            </el-table-column>
            <el-table-column label="标签" prop="content">
            </el-table-column>
        </el-table>
    </div>

</section>

</template>

<script>

    export default {
        name: "canvas1",
        data(){
            return{
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


                currentImageUrl:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3443176063,4021563566&fm=27&gp=0.jpg"

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
                    alert("已经是第一张");


            },
            nextImg(){
                if(this.currentIndex<=4){
                    this.currentIndex++;
                    this.currentImageUrl = this.imgUrl[this.currentIndex-1];
                    this.tagsInShowing = this.tagsInfo[this.currentIndex-1];
                }
                else
                    alert("已经是最后一张");
            }

        },

        created(){

        }


    }
</script>

<style scoped>

</style>
