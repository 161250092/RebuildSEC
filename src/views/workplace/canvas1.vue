<template>
<section>

    <div>
        <div id="canvasContainer">
            <canvas id="drawingCanvas" ref="canvas"
                    v-bind:style="{backgroundImage: currentImageUrl}">
            </canvas>
        </div>
    </div>

    <div align="center">
        <el-button class="fa fa-arrow-left"></el-button>
        <el-button class="fa fa-arrow-right"></el-button>
    </div>

    <div>
        <p>标签显示</p>
    </div>

</section>

</template>

<script>
    export default {
        name: "canvas1",
        data(){
            return{
                userId: "",
                username: "",

                labelType: "AreaLabel",
                taskId: "",
                taskImageNum: 0,
                labelList: [],
                filenameList: [],

                currentLabelIndex: 0,
                currentAreaBorder: [],


                canvas: undefined,
                canvasContext: undefined,
                previousX: 0,
                previousY: 0,

                isDrawing: false,
                canDraw: true,
                canInputTag: false,
                currentImageUrl:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3443176063,4021563566&fm=27&gp=0.jpg"

            }
        },

        methods:{

        },


    }
</script>

<style scoped>

</style>
