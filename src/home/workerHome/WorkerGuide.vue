<template>
    <div>
        <div>
            <WorkerHomeNav v-bind:menu-index="menuIndex"/>
        </div>

        <div class="banner">
            <Banner v-bind:banner="banner"/>
        </div>

        <div class="detail">
            <ContentGroup v-bind:content-group="imgMark"></ContentGroup>
            <ContentGroup v-bind:content-group="frameMark"></ContentGroup>
            <ContentGroup v-bind:content-group="areaMark"></ContentGroup>
        </div>

        <router-view></router-view>
    </div>
</template>

<script>
    import WorkerHomeNav from './WorkerHomeNav';
    import Banner from '../util/Banner';
    import ContentGroup from "../util/ContentGroup";
    export default {
        name: "WorkerGuide",
        components: {
            WorkerHomeNav, Banner, ContentGroup
        },
        data() {
            return {
                menuIndex: '2',
                banner:{
                    mode: 2,
                    title: '标注者指引',
                    content: '请根据任务描述，结合任务类型 进行具体的标注',
                    imgUrl: require("@/assets/bg1.jpg")
                },
                imgMark:{
                    id:'imgMark',
                    mode: 'right',
                    title:'整体标注',
                    content: '对图像整体进行描述，添加指定类型的标签\n',
                    imgUrl: require("@/assets/home/img_mark_eg.png")
                },
                frameMark:{
                    id:'frameMark',
                    mode: 'left',
                    title:'方框标注',
                    content: '对图像特定元素进行标注，划分方框标识出需要识别的元素',
                    imgUrl: require("@/assets/home/frame_mark_eg.png")
                },
                areaMark:{
                    id:'areaMark',
                    mode: 'right',
                    title:'区域标注',
                    content: '对图像特定元素进行标注，描点连线标识出需要识别的元素',
                    imgUrl: require("@/assets/home/area_mark_eg.png")
                }
            }
        },
    }
</script>

<style scoped>

</style>