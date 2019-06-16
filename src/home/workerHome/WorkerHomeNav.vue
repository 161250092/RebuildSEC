<template>
    <div>
        <NavMenu v-bind:menu-index="menuIndex" v-bind:left-menu-item-list="leftMenuItemList" v-bind:right-menu-item-list="rightMenuItemList"/>
        <router-view></router-view>
    </div>
</template>

<script>
    import NavMenu from '../util/NavMenu';
    export default {
        name: "RequesterHomeNav",
        components: {
            NavMenu
        },
        props: ['menuIndex'],
        data() {
            return {
                leftMenuItemList: [
                    {
                        optionName: '首页',
                        url: '/'
                    },
                    {
                        optionName: '平台介绍',
                        url: '/workerHome'
                    },
                    {
                        optionName: '如何标注',
                        url: '/workerHome/guide'
                    }
                ],
                rightMenuItemList: [],
            }
        },
        methods: {
            isLogin(){
                let worker = localStorage.getItem("worker");
                return worker !== null;
            }
        },
        mounted() {
            const _this = this;
            let loginList = [
                {
                    optionName: '注册',
                    url: '/workerHome/register'
                },
                {
                    optionName: '登录',
                    url: '/workerHome/login'
                }
            ];
            let infoList = [
                {
                    optionName: '任务接受中心',
                    url: '/workerPublishedTasks'
                },
                {
                    optionName: '登出',
                    url: '/workerHome/logout'
                }
            ];
            _this.rightMenuItemList = _this.isLogin()?infoList:loginList;
        }
    }
</script>

<style scoped>

</style>