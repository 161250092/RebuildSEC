<template>
    <div>
        <div>
            <RequesterHomeNav v-bind:menu-index="menuIndex"/>
        </div>

        <div class="banner">
            <Banner v-bind:banner="banner"/>
        </div>

        <div class="detail">
            <ContentGroup v-bind:content-group="introduction"></ContentGroup>
            <ContentGroup v-bind:content-group="imgMark"></ContentGroup>
            <ContentGroup v-bind:content-group="frameMark"></ContentGroup>
            <ContentGroup v-bind:content-group="areaMark"></ContentGroup>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    import Banner from '../util/Banner';
    import RequesterHomeNav from "./RequesterHomeNav";
    import ContentGroup from "../util/ContentGroup";
    export default {
        name: "RequesterHome",
        components: {
            RequesterHomeNav, Banner, ContentGroup
        },
        data() {
            return {
                menuIndex: '0',
                banner:{
                    mode: 2,
                    title: '图像标注服务',
                    content: '专业 高效 实惠',
                    imgUrl: require("@/assets/home/req_home_bg.png")
                },
                introduction:{
                    id:'introduction',
                    title:'产品概况',
                    content: '在这里您可以发布不同种类的标注任务，平台会将其分发给专业标注者团队，为您提供标准化、结构化的可用标注数据。',
                    imgUrl: require("@/assets/home/procedure.png")
                },
                imgMark:{
                    id:'imgMark',
                    title:'整体标注',
                    content: '对图像整体进行描述，添加指定类型的标签',
                    imgUrl: require("@/assets/home/img_mark_eg.png")
                },
                frameMark:{
                    id:'frameMark',
                    title:'方框标注',
                    content: '对图像特定元素进行标注，划分方框标识出需要识别的元素',
                    imgUrl: require("@/assets/home/frame_mark_eg.png")
                },
                areaMark:{
                    id:'areaMark',
                    title:'区域标注',
                    content: '对图像特定元素进行标注，描点连线标识出需要识别的元素',
                    imgUrl: require("@/assets/home/area_mark_eg.png")
                },
            }
        }

    }
</script>

<style scoped>

    .detail{
        margin: 0 4em;
    }

    /*.image-container{*/
        /*display: flex;*/
        /*flex-direction: column;*/
        /*flex: 0 1 auto;*/
        /*justify-content: center;*/
        /*align-items: center;*/
    /*}*/

</style>