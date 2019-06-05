<template>
    <div style="width:100%;height:300px;text-align:center">
        <div style="display:table-cell;float:left;width:50%">
            <h2>{{ banner.title }}</h2>
            <h3>{{ banner.content }}</h3>
        </div>
        <div style="display:table-cell;float:right;vertical-align:middle;width:50%">
            <img v-bind:src="banner.imgUrl" alt="banner.title" style="height: 280px">
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
    h2 {
        font-size: 2em;
        font-weight: 500;
        line-height: 150px;
        margin: 0;
        color: #fff;
        text-align: center;
    }

    h3 {
        font-size: 1.25em;
        font-weight: 500;
        color:#83d0f2;;
        opacity: 0.8;
        margin: 0;
    }
</style>


