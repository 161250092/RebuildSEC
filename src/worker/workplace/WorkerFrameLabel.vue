<template>
    <frame-label v-bind:url-after-submit="'/workerTasks'"></frame-label>
</template>

<script>
    import FrameLabel from "../../views/workplace/frameLabel";
    export default {
        name: "WorkerFrameLabel",
        components: {FrameLabel}
    }
</script>

<style scoped>

</style>