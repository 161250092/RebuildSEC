<template>
    <div :id="contentGroup.id">
        <div class="title">
            {{contentGroup.title}}
        </div>
        <div class="content">
            <p class="text">
                {{contentGroup.content}}
            </p>
        </div>
        <div class="image-container" id="abc">
            <img :src="contentGroup.imgUrl" style="width: 100%">
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
    .title{
        margin: 40px 0 30px 0;
        font-size: 24px;
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

    .content{
        margin: 1.25em 0;
    }

    .text{
        font-size: 18px;
        line-height: 24px;
        color: #333;
        margin: 1.5em 0;
    }
</style>