<template>
    <div>
        <div>
            <WorkerHomeNav v-bind:menu-index="menuIndex"/>
        </div>

        <div class="banner">
            <Banner v-bind:banner="banner"/>
        </div>

        <div class="detail">
            <ContentGroup v-bind:content-group="reward"></ContentGroup>
            <ContentGroup v-bind:content-group="task"></ContentGroup>
        </div>

        <router-view></router-view>
    </div>
</template>

<script>
    import WorkerHomeNav from './WorkerHomeNav';
    import Banner from '../util/Banner';
    import ContentGroup from "../util/ContentGroup";
    export default {
        name: "WorkerHome",
        components: {
            WorkerHomeNav, Banner, ContentGroup
        },
        data() {
            return {
                menuIndex: '1',
                banner:{
                    mode: 2,
                    title: '标注者联盟',
                    content: '零碎时间 无限价值',
                    imgUrl: require("@/assets/home/wk_home_bg.png")
                },
                reward:{
                    id:'reward',
                    mode: 'right',
                    title:'奖励丰厚，就等你来',
                    content: '只要按照要求完成标注任务，就能获得丰厚的奖励',
                    imgUrl: require("@/assets/home/wk_pic_2.png")
                },
                task:{
                    id:'task',
                    mode: 'left',
                    title:'海量任务，由你挑选',
                    content: '每天都会有新的任务，总有适合自己的任务',
                    imgUrl: require("@/assets/home/wk_pic_1.png")
                },

            }
        },
    }
</script>

<style scoped>

</style>