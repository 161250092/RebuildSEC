<template>
    <div align="center" class="father">
        <div class="toolBar">
            <span class="demonstration">颜色选择器</span>
            <el-color-picker v-model="color" @change="changeColor"></el-color-picker>
        </div>
<!--        <div class="toolBar">-->
<!--            <el-row type="flex" class="row-bg" justify="space-between">-->
<!--                <el-col><span class="demonstration">颜色选择器</span></el-col>-->
<!--                <el-col><el-color-picker v-model="color" @change="changeColor"></el-color-picker></el-col>-->
<!--                <el-col><span class="demonstration">颜色选择器</span></el-col>-->
<!--                <el-col><el-slider class="block" v-model="thickness" @change="changeThickness"></el-slider></el-col>-->
<!--            </el-row>-->
<!--        </div>-->
        <canvas id="canvas" width="650" height="414" class="canvas"
                v-on:mousedown="startDrawing"
                v-on:mouseup="stopDrawing"
                v-on:mouseout="stopDrawing"
                v-on:mousemove="draw"
        />
        <img :src=currentImageUrl  class="canvas_bgp">

        <div class="buttonPosition">
            <div class="block" style="margin-bottom: 15px">
                <el-progress :percentage="thickness"></el-progress>
            </div>
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
        props: ['urlAfterSubmit'],
        data(){
            return {
                currentImageUrl:   "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2922170376,2371336021&fm=27&gp=0.jpg",
                currentIndex: 1,
                imgUrl: [
                    "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2922170376,2371336021&fm=27&gp=0.jpg",
                    "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4117698333,1699709581&fm=27&gp=0.jpg",
                    "http://static.runoob.com/images/demo/demo3.jpg",
                    "http://static.runoob.com/images/demo/demo4.jpg",
                ],
                //当前页的tags
                tagsInShowing:[],
                // 各个页的tags
                tagsInfo:[
                ],
                tag:"",

                canSubmit:false,

                rectsInShow:[],
                rectsInfo:[],
                color:'#409EFF',
                thickness: 0,

                canvas:undefined,
                canvasContext:undefined,

                isDrawing:false,

                startX:0,
                startY:0,

            }

        },
        methods: {

            startDrawing:function(ev){
                if(this.isDrawing === false){
                   // this.canvasContext.beginPath();
                    this.startX =this.getX(ev);
                    this.startY = this.getY(ev);
                    this.isDrawing = true;
                    //this.canvasContext.moveTo(this.previousX, this.previousY);
                }

            },
            stopDrawing: function (ev) {
                //防止鼠标只是经过canvas
                if(this.isDrawing === true){
                    let currentStartX = this.getX(ev);
                    let currentStartY = this.getY(ev);
                    //  this.canvasContext.lineTo(currentStartX, currentStartY);
                    let w = Math.abs(this.startX-currentStartX);
                    let h= Math.abs(this.startY-currentStartY);

                    //当前页添加新矩形
                    let newRect = {x:this.startX,y:this.startY,width:w,height:h};
                    this.rectsInShow.push(newRect);

                    this.isDrawing = false;
                    this.canvasContext.stroke();
                }
            },

            draw(ev){
                if(this.isDrawing===true) {
                    this.canvas.height = this.canvas.height;
                    let currentStartX = this.getX(ev);
                    let currentStartY = this.getY(ev);
                  //  this.canvasContext.lineTo(currentStartX, currentStartY);
                    let width = Math.abs(this.startX-currentStartX);
                    let height = Math.abs(this.startY-currentStartY);

                    for(let i=0;i<this.rectsInShow.length;i++){
                        this.canvasContext.rect(this.rectsInShow[i].x,this.rectsInShow[i].y,this.rectsInShow[i].width,this.rectsInShow[i].height);
                    }
                    this.canvasContext.rect(this.startX,this.startY,width,height);
                    this.canvasContext.stroke();
                }
            },

            getX(ev) {
                const rect = this.canvas.getBoundingClientRect();
                return ev.clientX - rect.left;
            },
            getY(ev) {
                const rect = this.canvas.getBoundingClientRect();
                return ev.clientY - rect.top;
            },

            changeColor(){
                this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
                this.canvasContext.strokeStyle = this.color;
                this.drawRects();
            },
            changeThickness(){
                this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
                this.canvasContext.lineWidth = this.thickness;
                this.drawRects();
            },

            clear(){
                this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
                this.canvasContext.strokeStyle = this.color;
                this.rectsInShow = [];
            },

            saveRect(){

                this.rectsInfo[this.currentIndex-1]  = this.rectsInShow;
              //  console.log(this.rectsInfo);
                this.$message({
                    message: '已保存',
                    type: 'success'
                });
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
                this.$message({
                    message: '提交成功',
                    type: 'success'
                });
                this.$router.push(this.urlAfterSubmit);
            },


            previewImg() {
               // this.canvas.height =  this.canvas.height;
                this.canvas.height = this.canvas.height;
                this.rectsInShow = [];
                if (this.currentIndex >= 2) {
                    this.currentIndex--;
                    this.currentImageUrl = this.imgUrl[this.currentIndex - 1];
                    this.tagsInShowing = this.tagsInfo[this.currentIndex - 1];
                    this.rectsInShow = this.rectsInfo[this.currentIndex - 1];
                    this.drawRects();
                }
                else
                {
                    this.$message({
                        message: '第一张',
                        type: 'warning'
                    });
                }

                this.thickness = this.currentIndex * 100 / this.imgUrl.length;
            },


            nextImg() {
                this.canvas.height = this.canvas.height;
                this.rectsInShow = [];
                if (this.currentIndex <= this.imgUrl.length-1) {
                    this.currentIndex++;
                    this.currentImageUrl = this.imgUrl[this.currentIndex - 1];
                    this.tagsInShowing = this.tagsInfo[this.currentIndex - 1];
                    this.rectsInShow = this.rectsInfo[this.currentIndex - 1];
                    this.drawRects();
                }
                else
                {
                    this.$message({
                        message: '最后一张',
                        type: 'warning'
                    });
                }

                this.thickness = this.currentIndex * 100 / this.imgUrl.length;
            },

            drawRects(){
                this.canvasContext.lineWidth = this.thickness/20;
                //设置线的颜色
                this.canvasContext.strokeStyle = this.color;
                for(let i=0;i<this.rectsInShow.length;i++){
                    this.canvasContext.rect(this.rectsInShow[i].x,this.rectsInShow[i].y,this.rectsInShow[i].width,this.rectsInShow[i].height);
                }
                this.canvasContext.stroke();
            }

        },

        mounted(){
            this.$nextTick(function () {
                for(let i=0;i<this.imgUrl.length;i++){
                    this.rectsInfo.push([]);
                }

                this.canvas = document.getElementById("canvas");
                //获得2维绘图的上下文
                this.canvasContext = this.canvas.getContext("2d");
                // //设置线宽
                // this.canvasContext.lineWidth = this.thickness/20;
                //设置线的颜色
                this.canvasContext.strokeStyle = this.color;

                this.thickness = this.currentIndex * 100 / this.imgUrl.length;
            });
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
        cursor:crosshair;
        /*位置绝对*/
        position: absolute;
        top: 50px;
        left: 50px;
        /*设置所在层数，在上层*/
        z-index: 1;
    }

    .toolBar{
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
