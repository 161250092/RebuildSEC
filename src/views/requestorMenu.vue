<template>
    <div>
        <NavMenu v-bind:routes="routes"/>
    </div>
</template>

<script>
    import  NavMenu from '../components/NavMenu'
    import  routes from '../common/js/routes/requesterRoutes'
    export default {
        name: "requestorMenu",
        components: {NavMenu},
        data() {
            return {
                routes: routes,
            }
        }
    }
</script>

<style scoped>

</style>
