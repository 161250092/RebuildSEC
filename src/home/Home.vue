<template>
    <div>
        <div>
            <NavMenu v-bind:menu-index="menuIndex" v-bind:left-menu-item-list="leftMenuItemList" v-bind:right-menu-item-list="rightMenuItemList"/>
        </div>

        <div class="banner-carousel">
            <el-carousel :interval="5000" :autoplay="false" arrow="always" height="280px">
                <el-carousel-item v-for="(item,index) in carouselList" :key="index">
                    <Banner v-bind:banner="item"/>
                </el-carousel-item>
            </el-carousel>
        </div>

        <div class="card-container">
            <el-row :gutter="20" type="flex" justify="center">
                <el-col :span="6" v-for="(item, index) in cardList" :key="index" style="margin: 1em">
                    <el-card class="box-card" style="text-align:center;">
                        <div slot="header">
                            <h3 v-if="!item.imgUrl" class="card-title">{{item.title}}</h3>
                            <div v-if="item.imgUrl" style="display:table; width: -webkit-fill-available">
                                <div style="display: table-cell; float: left;width: 35%">
                                    <img class="card-image" :src="item.imgUrl">
                                </div>
                                <div style="display: table-cell; float: right; width: 65%">
                                    <h3 class="card-title">{{item.title}}</h3>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p style="white-space:pre-wrap; line-height:1.5; font-size: 16px;">{{item.content}}</p>
                            <el-button style="margin: 0.25em 1em" type="text" v-on:click="toPage(item.url)">查看详情</el-button>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
        </div>

        <div class="foot">
            <p class="text">
              南京大学  软件学院  人机交互作业小组 &nbsp;&nbsp;&nbsp; CopyRight @2019 All Rights Reserved.
            </p>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    import NavMenu from './util/NavMenu';
    import Banner from './util/Banner';
    export default {
        name: "Home",
        components: {
            NavMenu, Banner
        },
        data() {
            return {
                menuIndex : '0',
                leftMenuItemList: [
                    {
                        optionName: '首页',
                        url: '/'
                    },
                    {
                        optionName: '发布者平台',
                        url: '/requesterHome'
                    },
                    {
                        optionName: '标注者平台',
                        url: '/workerHome'
                    },
                    // {
                    //     optionName: '关于我们',
                    //     url: '/about'
                    // }
                ],
                rightMenuItemList:[
                    {
                        optionName: '标注者登录',
                        url: '/workerHome/login'
                    },
                    {
                        optionName: '发布者登录',
                        url: '/requesterHome/login'
                    }
                ],
                carouselList:[
                    {mode:1, title: '众包标注', content: '为您带来最优质的图像标注服务', imgUrl: require("@/assets/home/home_bg_1.png")},
                    {mode:1, title: '随时发布需求', content: '全国 10000+ 专业标注者为您服务', imgUrl: require("@/assets/home/home_bg_2.png")}
                ],
                cardList:[
                    {title: '整体标注',  content: '对图像整体进行描述\n添加指定类型的标签', url:'/requesterHome#ancher-imgMark', imgUrl:''},
                    {title: '方框标注',  content: '对图像特定元素进行标注\n划分方框标识出需要识别的元素', url:'/requesterHome#ancher-frameMark', imgUrl:require("@/assets/home/frame_logo.png")},
                    {title: '区域标注',  content: '对图像特定元素进行标注\n描点连线标识出需要识别的元素', url:'/requesterHome#ancher-areaMark', imgUrl:require("@/assets/home/area_logo.png")}
                ]
            }
        },
        methods: {
            toPage(url) {
                this.$router.push(({path: url}));
            }
        }
    }
</script>

<style scoped>
    .banner-carousel{
        background-color: #110233;
        width: 100%;
        height: 280px;
        padding-top: 20px;
    }

    .card-title{
        font-size:1.5em;
        font-weight:500;
        margin: 0.75em 0;
    }

    .card-container{
        margin: 2em 1em;
    }

    .card-image{
        width: 60px;
        height: 60px;
        /*float: right;*/
    }

    .foot{
        position: fixed;
        bottom: 0;
        background-color: #110233;
        width: 100%;
        padding: 0 4em;
    }

    .text{
        color: #ffffff;
        font-size: 12px;
        text-align: center;
    }

    @media screen and (max-width: 800px){
        .card-container{
            margin: 2em 0;
        }
    }

</style>