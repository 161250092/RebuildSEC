<template>
    <frame-label v-bind:url-after-submit="'/publishTask'"></frame-label>
</template>

<script>
    import FrameLabel from "./workplace/frameLabel";
    export default {
        name: "WorkerFrameLabel",
        components: {FrameLabel}
    }
</script>

<style scoped>

</style>