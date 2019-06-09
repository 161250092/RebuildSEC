<template>
    <div>
        <div>
            <NavMenu v-bind:menu-index="menuIndex" v-bind:left-menu-item-list="leftMenuItemList" v-bind:right-menu-item-list="rightMenuItemList"/>
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

    </div>
</template>

<script>
    import Banner from '../util/Banner';
    import NavMenu from '../util/NavMenu';
    import ContentGroup from "../util/ContentGroup";
    export default {
        name: "RequesterHome",
        components: {
            ContentGroup,
            NavMenu, Banner
        },
        data() {
            return {
                menuIndex: '0',
                leftMenuItemList: [
                    {
                        optionName: '产品介绍',
                        url: '/requesterHome'
                    },
                    {
                        optionName: '功能',
                        url: '/requesterHome'
                    },
                    {
                        optionName: '标注者平台',
                        url: '/workerHome'
                    }
                ],
                rightMenuItemList: [],
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
        },
        methods: {
            isLogin() {
                return false;
            }
        },
        mounted() {
            const _this = this;
            let loginList = [
                {
                    optionName: '注册',
                    url: '/requesterHome/register'
                },
                {
                    optionName: '登录',
                    url: '/requesterHome/login'
                }
            ];
            let infoList = [
                {
                    optionName: '个人中心',
                    url: '/requesterHome/center'
                },
                {
                    optionName: '登出',
                    url: '/requesterHome/logout'
                }
            ];
            _this.rightMenuItemList = _this.isLogin()?infoList:loginList;
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