<template>
    <div>
        <RequesterHomeNav v-bind:menu-index="menuIndex"/>
        <Login v-bind:mode="mode"/>
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
                menuIndex: '6',
                mode: 'requester'
            }
        }
    }
</script>

<style scoped>

</style>