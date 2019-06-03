<template>
    <NavMenu v-bind:routes="workerRoutes"/>
</template>

<script>
    import NavMenu from "../components/NavMenu";
    import routes from "../common/js/workerRoutes"
    export default {
        name: "WorkerHome",
        components: {NavMenu},
        data () {
            return {
                workerRoutes: routes
            }
        }
    }
</script>

<style scoped>

</style>