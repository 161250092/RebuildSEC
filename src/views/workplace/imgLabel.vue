<template>
    <div align="center" class="father">
        <canvas id="canvas" width="650" height="414" class="canvas"/>
        <img :src=currentImageUrl  class="canvas_bgp">

        <div class="buttonPosition">
            <el-button class="fa fa-arrow-left" @click="previewImg"></el-button>
            <el-button class="fa fa-arrow-right" @click="nextImg"></el-button>
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
        name: "imgLabel",
        data() {
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
                canSubmit:false

            }

        },

        methods: {
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

              //  console.log(tags);
                if(tags.length===0){
                    this.canSubmit = false;
                }

            },

            submit(){
                this.$message({
                    message: '提交成功',
                    type: 'success'
                });
            },


            previewImg() {
                if (this.currentIndex >= 2) {
                    this.currentIndex--;
                    this.currentImageUrl = this.imgUrl[this.currentIndex - 1];
                    this.tagsInShowing = this.tagsInfo[this.currentIndex - 1];
                } else
                    this.$message({
                        message: '第一张',
                        type: 'warning'
                    });


            },
            nextImg() {
                if (this.currentIndex <= this.imgUrl.length-1) {
                    this.currentIndex++;
                    this.currentImageUrl = this.imgUrl[this.currentIndex - 1];
                    this.tagsInShowing = this.tagsInfo[this.currentIndex - 1];
                } else
                    this.$message({
                        message: '最后一张',
                        type: 'warning'
                    });

            }


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
