<template>
    <div align="center" class="father">
<!--        <div class="toolBar">-->
<!--            <el-button>1</el-button>-->
<!--            <el-button>1</el-button>-->
<!--            <el-button>1</el-button>-->
<!--            <el-button>1</el-button>-->
<!--            <el-button>1</el-button>-->
<!--        </div>-->
        <canvas id="canvas" width="650" height="414" class="canvas"/>
        <img :src=currentImageUrl  class="canvas_bgp">

        <div class="buttonPosition">
            <el-button class="fa fa-arrow-left" @click="previewImg"></el-button>
            <el-button class="fa fa-arrow-right" @click="nextImg"></el-button>
            <el-button  @click="saveRect" type="warning">保存</el-button>
            <el-button  @click="clear" type="danger">清空</el-button>
            <el-button @click="submit" type="success" v-if="canSubmit">提交</el-button>
            <p>{{currentIndex}}/{{imgUrl.length}}</p>
        </div>

        <div class="tagsPosition" align="center">
            <div>
                <el-input v-model="tag" style="width:190px"></el-input>
                <el-button @click="addTags">添加标签</el-button>
            </div>
            <el-table :data="tagsInShowing"  style="width: 35%" >
                <el-table-column label="标签" prop="content">
                </el-table-column>

                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button
                                size="mini"
                                type="danger"
                                icon="el-icon-delete"
                                @click="deleteTag(scope.row)">删除
                        </el-button>
                    </template>
                </el-table-column>

            </el-table>
        </div>

    </div>

</template>

<script>
    export default {
        name: "frameLabel",
        data(){
            return {
                currentImageUrl:   "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2922170376,2371336021&fm=27&gp=0.jpg",
                currentIndex: 1,
                imgUrl: [
                    "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2922170376,2371336021&fm=27&gp=0.jpg",
                    "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4117698333,1699709581&fm=27&gp=0.jpg",
                ],
                //当前页的tags
                tagsInShowing:[],
                // 各个页的tags
                tagsInfo:[
                ],
                tag:"",

                canSubmit:false,

                rectInShow:{},
                rectsInfo:[]


            }

        },
        methods: {

            clear(){
                let canvas = document.getElementById("canvas");
                //获得2维绘图的上下文
                let ctx = canvas.getContext("2d");
                canvas.height = canvas.height;
                ctx.lineWidth = 1;
                ctx.strokeStyle = "red";
                this.rectInShow = {};

            },

            saveRect(){
             //   console.log(this.rectInShow);
                this.rectsInfo[this.currentIndex-1]  = this.rectInShow;
              //  console.log(this.rectsInfo);
                alert("已保存");
            },

            addTags(){
                if(this.tagsInfo.length<this.currentIndex){
                    this.tagsInfo.push([]);
                }

                let tags = this.tagsInfo[this.currentIndex-1];

                tags.push({content:this.tag});

                this.tagsInfo[this.currentIndex-1] = tags;
                this.tagsInShowing =  this.tagsInfo[this.currentIndex - 1];
                this.tag = "";

                if(this.tagsInfo.length===this.imgUrl.length){
                    for(let i=0;i<this.imgUrl.length;i++){
                        if(this.tagsInfo[i]===[])
                            return;
                    }
                    this.canSubmit = true;
                }
            },

            deleteTag(tag){
                let tags = this.tagsInfo[this.currentIndex-1];
                for(let i=0;i<tags.length;i++){
                    if(tags[i].content===tag.content) {
                        tags.splice(i, 1);
                        break;
                    }
                }

                if(tags.length===0){
                    this.canSubmit = false;
                }

            },

            submit(){
                alert("已提交");
            },


            previewImg() {
                this.clear();
                if (this.currentIndex >= 2) {
                    this.currentIndex--;
                    this.currentImageUrl = this.imgUrl[this.currentIndex - 1];
                    this.tagsInShowing = this.tagsInfo[this.currentIndex - 1];
                    this.rectInShow = this.rectsInfo[this.currentIndex - 1];
                    this.drawRect();
                } else
                    alert("已经是第一张");
            },


            nextImg() {
                this.clear();
                if (this.currentIndex <= this.imgUrl.length-1) {
                    this.currentIndex++;
                    this.currentImageUrl = this.imgUrl[this.currentIndex - 1];
                    this.tagsInShowing = this.tagsInfo[this.currentIndex - 1];
                    this.rectInShow = this.rectsInfo[this.currentIndex - 1];
                    this.drawRect();
                } else
                    alert("已经是最后一张");

            },

            drawRect(){
                let canvas = document.getElementById("canvas");
                //获得2维绘图的上下文
                let ctx = canvas.getContext("2d");
                //设置线宽
                ctx.lineWidth = 1;
                //设置线的颜色
                ctx.strokeStyle = "red";
                ctx.rect(this.rectInShow.leftTopX,this.rectInShow.leftTopY,this.rectInShow.width,this.rectInShow.hight);
                ctx.stroke();
            }

        },

        mounted(){
            for(let i=0;i<this.imgUrl.length;i++){
                this.rectsInfo.push({});
            }

            let canvas = document.getElementById("canvas");
            //获得2维绘图的上下文
            let ctx = canvas.getContext("2d");
            //设置线宽
            ctx.lineWidth = 1;
            //设置线的颜色
            ctx.strokeStyle = "red";
            let _this = this;
            canvas.onmousedown = function(e){
                _this.rectInShow.leftTopX = e.clientX-300;
                _this.rectInShow.leftTopY = e.clientY-100;
                //
                document.onmousemove = function(e){
                    canvas.height = canvas.height;

                    _this.rectInShow.rightDownX = e.clientX-300;
                    _this.rectInShow.rightDownY = e.clientY-100;

                    _this.rectInShow.hight = Math.abs(_this.rectInShow.rightDownY - _this.rectInShow.leftTopY);
                    _this.rectInShow.width  =Math.abs( _this.rectInShow.leftTopX-_this.rectInShow.rightDownX);

                    ctx.rect(_this.rectInShow.leftTopX,_this.rectInShow.leftTopY,_this.rectInShow.width,_this.rectInShow.hight);

                    ctx.stroke();
                };

                document.onmouseup = function(e){
                    _this.rectInShow.rightDownX = e.clientX-300;
                    _this.rectInShow.rightDownY = e.clientY-100;

                    _this.rectInShow.hight = Math.abs(_this.rectInShow.rightDownY - _this.rectInShow.leftTopY);
                    _this.rectInShow.width  =Math.abs( _this.rectInShow.leftTopX-_this.rectInShow.rightDownX);

                    ctx.rect(_this.rectInShow.leftTopX,_this.rectInShow.leftTopY,_this.rectInShow.width,_this.rectInShow.hight);
                    _this.rectsInfo[_this.currentIndex-1] = _this.rectInShow;

                    document.onmousemove = null;
                    document.onmouseup = null;
                }
            };

        }
    }
</script>

<style scoped>

</style>
<style lang="scss" scoped>


    .buttonPosition{
        top: 500px;
        left: 0;
        position: relative;
    }
    .tagsPosition{
        top: 100px;
        left: 460px;
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
        top: 50px;
        left: 50px;
        /*设置所在层数，在上层*/
        z-index: 1;
    }

    .toolBar{
        border:5px solid black;
        position: absolute;
        top: 0;
        left: 50px;

    }
    /*需要将img背景图的尺寸和canvas的尺寸设置相同*/
    .canvas_bgp{
        width: 650px;
        height: 414px;
        /*位置绝对*/
        position: absolute;
        top: 50px;
        left: 50px;
    }
</style>
