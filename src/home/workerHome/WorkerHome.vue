<template>
    <div>
        <div>
            <NavMenu v-bind:menu-index="menuIndex" v-bind:left-menu-item-list="leftMenuItemList" v-bind:right-menu-item-list="rightMenuItemList"/>
        </div>

        <div class="banner">
            <Banner v-bind:banner="banner"/>
        </div>
    </div>
</template>

<script>
    import Banner from '../util/Banner';
    import NavMenu from '../util/NavMenu';
    import ContentGroup from "../util/ContentGroup";
    export default {
        name: "WorkerHome",
        components: {
            ContentGroup,
            NavMenu, Banner
        },
        methods: {
            isLogin() {
                return false;
            }
        },
        data() {
            return {
                menuIndex: '0',
                leftMenuItemList: [
                    {
                        optionName: '平台介绍',
                        url: '/workerHome'
                    },
                    {
                        optionName: '关于报酬',
                        url: '/workerHome'
                    },
                    {
                        optionName: '标注者平台',
                        url: '/workerHome'
                    }
                ],
                rightMenuItemList: [],
                banner:{
                    mode: 2,
                    title: '标注者联盟',
                    content: '零碎时间 无限价值',
                    imgUrl: require("@/assets/home/wk_home_bg.png")
                }
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

</style>