<template>
    <img-label v-bind:url-after-submit="'/publishTask'"></img-label>
</template>

<script>
    import ImgLabel from "./workplace/imgLabel";
    export default {
        name: "WorkerImageLabel",
        components: {ImgLabel}
    }
</script>

<style scoped>

</style>