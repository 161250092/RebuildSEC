<template>
    <div class="nav-container">
        <div class="img-container">
            <div class="logo">
                <a href="/">
                    <img class="img" v-bind:src="logoUrl" alt="众包标注"/>
                </a>
            </div>
            <div class="collapse-button-container">
                <button type="button" class="collapse-button" v-on:click="pressCollapseButton">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
            </div>

        </div>
        <div class="menu-container">
            <el-menu 
                v-if="seen"
                :mode="mode"
                :default-active="menuIndex"
                background-color="#222"
                text-color="#fff"
                active-text-color="#ffd04b">
                <el-menu-item
                    v-for="(menuItem,index) in leftMenuItemList"
                    v-bind:key="index + ''"
                    v-on:click="toPage(menuItem.url)"
                    v-bind:index="index + ''">
                    {{menuItem.optionName}}
                </el-menu-item>
                <el-menu-item class="right-menu-item"
                    v-for="(menuItem,index) in rightMenuItemList"
                    v-bind:key="(index+leftMenuItemList.length)+ ''"
                    v-on:click="toPage(menuItem.url)"
                    v-bind:index="(index+leftMenuItemList.length) + ''">
                    {{menuItem.optionName}}
                </el-menu-item>
            </el-menu>
        </div>
    </div>
</template>

<script>
    // 从父组件传入menuItemList，一个menuItem的数组
    //  menuItem: {
    //     optionName = '选项一',
    //     url = '/worker'
    //  }
    export default {
        name: "NavMenu",
        props: ['menuIndex', 'leftMenuItemList', 'rightMenuItemList'],
        data() {
            return {
                seen: !this.isCollapsed(),
                mode: this.isCollapsed() ? "vertical":"horizontal",
                backgroundColor: '#222',
                logoUrl: require("@/assets/logo.png")
            }
        },
        methods: {
            toPage(url) {
                // 检测到动作为登出
                if(url.indexOf("logout") !== -1){
                    localStorage.clear();
                    // 刷新当前页面
                    this.$router.go(0);
                }
                else{
                    this.$router.push(({path: url}));
                    if(url.indexOf("#ancher-") !== -1) {
                        let target = url.substring(url.indexOf("#ancher-") + 8);
                        let anchor = document.getElementById(target);
                        document.documentElement.scrollTop = anchor.offsetTop;
                    }
                }
            },
            isCollapsed() {
                return parseInt(document.documentElement.clientWidth/800)>0 ? 0:1;
            },
            pressCollapseButton() {
                this.seen = !this.seen;
            }
        },
        mounted() {
            const _this = this;
            window.onresize = function checkCollapsed() {
                if(parseInt(document.documentElement.clientWidth/800)>0){
                    _this.seen = 1;
                }else{
                    _this.seen = 0;
                }
            };
        }
    }
</script>

<style scoped>
    a{
        text-decoration: none;
    }

    .nav-container{
        margin: 0;
        padding-left: 1em;
        padding-right: 1em;
        background-color:#222;
        /* background: #545c64; */
        color: #fff;
        z-index: 100;
    }

    .menu-container ul{
        border-bottom: none !important;
        border-right: none !important;
    }

    .img-container{
        display: table;
        width: 100%;
    }

    .logo{
        width: 120px;
        height: 60px;
        vertical-align:middle;
        display:table-cell;
    }

    .img{
        height: 48px;
        vertical-align:middle;
        text-align: center;
    }

    .collapse-button-container{
        text-align: right;
        display: table-cell;
    }

    .collapse-button{
        position: relative;
        float: right;
        padding-top: 0.3em;
        padding-bottom: 0.4em;
        margin-top: 1.25em;
        margin-right: 1em;
        margin-bottom: 0.5em;
        background-color: transparent;
        background-image: none;
        border: 0.125em solid #333;
        border-radius: 0.25em;
        cursor:pointer;
    }
    
    .icon-bar{
        background-color: #fff;
        display: block;
        width: 1.4em;
        height: 0.15em;
        border-radius: 0.1em;
        margin-top: 0.2em;
    }

    .el-menu{
        background-color: #222;
    }

    .el-menu-item{
        opacity: 0.9;
        color: #fff;
    }

    .el-menu-item:hover{
        opacity: 1;
        background-color: #000;
        border-bottom-color: #000;
    }

    .is-active{
        color: #ffd04b;
        border-bottom-color: #ffd04b;
    }


    /* 当屏幕宽度较长时  不需要压缩导航栏 */
    @media screen and (min-width: 800px){
        .collapse-button{
            display: none;
        }

        .img-container{
            align-items: center;
            float: left;
            width: auto;
        }

        .logo{
            display:table-cell;
        }
    
        .menu-container{
            margin-left: 150px;
        }

        .right-menu-item{
            float: right !important;
        }
    }
</style>