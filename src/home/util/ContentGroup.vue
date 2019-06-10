<template>
    <div>
        <div :id="contentGroup.id" v-if="contentGroup.mode==='full'">
            <div class="title">
                {{contentGroup.title}}
            </div>
            <div>
                <p class="text">
                    {{contentGroup.content}}
                </p>
            </div>
            <div class="image-container">
                <img :src="contentGroup.imgUrl" width="80%">
            </div>
            <br>
            <br>
        </div>

        <div :id="contentGroup.id" v-if="contentGroup.mode==='left'" class="box">
            <div class="right-panel content">
                <p class="title title-large">
                    {{contentGroup.title}}
                </p>
                <p class="text text-large">
                    {{contentGroup.content}}
                </p>
            </div>
            <div class="left-panel image-container">
                <img :src="contentGroup.imgUrl">
            </div>
            <br>
        </div>

        <div :id="contentGroup.id" v-if="contentGroup.mode==='right'" class="box">
            <div class="left-panel content">
                <p class="title title-large">
                    {{contentGroup.title}}
                </p>
                <p class="text text-large">
                    {{contentGroup.content}}
                </p>
            </div>
            <div class="right-panel image-container">
                <img :src="contentGroup.imgUrl">
            </div>
            <br>
        </div>
    </div>

</template>

<script>
    export default {
        name: "ContentGroup",
        props: ['contentGroup']
    }
</script>

<style scoped>
    .box{
        width: 100%;
        display: table;
        margin: 100px 0;
    }

    img{
        width: 100%;
    }

    .left-panel{
        display:table-cell;float:left;width:50%;
    }

    .right-panel{
        display:table-cell;float:right;width:50%;
    }

    .content{
        width: 40%;
    }

    .title{
        margin: 40px 0 30px 0;
        font-size: 28px;
        color: #141a24;
        padding-left: 14px;
        position: relative;
    }

    .title::before {
        content: "";
        display: block;
        position: absolute;
        width: 4px;
        bottom: 3px;
        top: 6px;
        left: 0;
        background: #108cee;
    }

    .title-large{
        font-size: 32px;
    }

    .title-large::before{
        background: #13ce66;
    }

    .content{
        margin: 1.25em 0;
    }

    .text{
        font-size: 22px;
        line-height: 24px;
        color: #333;
        margin: 1.5em 0;
    }

    .text-large{
        font-size: 24px;
        line-height: 30px;
    }
</style>