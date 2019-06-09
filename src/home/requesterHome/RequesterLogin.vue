<template>
    <div>
        <RequesterHomeNav v-bind:menu-index="menuIndex"/>
        <Login/>
    </div>
</template>

<script>
    import RequesterHomeNav from "./RequesterHomeNav";
    import Login from "../util/Login";
    export default {
        name: "RequesterLogin",
        components: {
            RequesterHomeNav, Login
        },
        data() {
            return {
                menuIndex: '4'
            }
        }
    }
</script>

<style scoped>

</style>