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
        },

        created() {
            this.$router.push("/main");
        }
    }
</script>

<style scoped>

</style>
