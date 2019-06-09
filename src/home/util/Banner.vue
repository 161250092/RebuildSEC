<template>
    <div>
        <div v-if="banner.mode===1" class="banner banner_mode_1">
            <div class="left-panel">
                <h2>{{ banner.title }}</h2>
                <h3>{{ banner.content }}</h3>
            </div>
            <div style="vertical-align:middle;" class="right-panel">
                <img v-bind:src="banner.imgUrl" alt="banner.title" style="height: 250px">
            </div>
        </div>

        <div v-if="banner.mode===2" class="banner banner_mode_2" v-bind:style="{backgroundImage:'url('+ banner.imgUrl+')'}">
            <div class="left-panel">
                <h2>{{ banner.title }}</h2>
                <h3>{{ banner.content }}</h3>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Banner",
        props: ['banner']
    }
</script>

<style scoped>
    .banner{
        width:100%;height:280px;text-align:center;
    }

    .left-panel{
        display:table-cell;float:left;width:50%
    }

    .right-panel{
        display:table-cell;float:right;width:50%
    }

    .banner_mode_2{
        background-size:cover;
    }

    .banner_mode_1 h2 {
        font-size: 2em;
        font-weight: 500;
        line-height: 150px;
        margin: 0;
        color: #fff;
        text-align: center;
    }

    .banner_mode_1 h3 {
        font-size: 1.25em;
        font-weight: 500;
        color:#83d0f2;;
        opacity: 0.8;
        margin: 0;
    }

    .banner_mode_2 h2 {
        font-size: 3em;
        font-weight: 300;
        line-height: 150px;
        margin: 0;
        color: #000000;
        text-align: center;
    }

    .banner_mode_2 h3 {
        font-size: 2em;
        font-weight: 400;
        color: #0162f4;
        opacity: 0.8;
        margin: 0;
    }

    /* 当屏幕宽度较短时  调整左侧栏布局 */
    @media screen and (max-width: 600px) {
        .left-panel{
            width: auto;
        }
    }
</style>


