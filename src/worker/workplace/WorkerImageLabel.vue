<template>
    <img-label v-bind:url-after-submit="'/workerTasks'"></img-label>
</template>

<script>
    import ImgLabel from "../../views/workplace/imgLabel";
    export default {
        name: "WorkerImageLabel",
        components: {ImgLabel}
    }
</script>

<style scoped>

</style>