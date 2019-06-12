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
                        optionName: '服务介绍',
                        url: '/requesterHome'
                    },
                    {
                        optionName: '整体标注',
                        url: '/requesterHome#ancher-imgMark'
                    },
                    {
                        optionName: '方框标注',
                        url: '/requesterHome#ancher-frameMark'
                    },
                    {
                        optionName: '区域标注',
                        url: '/requesterHome#ancher-areaMark'
                    },
                    // {
                    //     optionName: '服务协议',
                    //     url: '/requesterHome'
                    // }
                ],
                rightMenuItemList: [],
            }
        },
        methods: {
            isLogin(){
                let requester = localStorage.getItem("requester");
                return requester !== null;
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
                    url: '/request'
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