<template>
    <area-label v-bind:url-after-submit="'/publishTask'"></area-label>
</template>

<script>
    import AreaLabel from "./workplace/areaLabel";
    export default {
        name: "WorkerAreaLabel",
        components: {AreaLabel}
    }
</script>

<style scoped>

</style>