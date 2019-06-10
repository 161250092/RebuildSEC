<template>
    <div>
        <RequesterHomeNav v-bind:menu-index="menuIndex"/>
        <Register v-bind:mode="mode"/>
    </div>
</template>

<script>
    import RequesterHomeNav from "./RequesterHomeNav";
    import Register from "../util/Register";
    export default {
        name: "RequesterRegister",
        components: {
            RequesterHomeNav, Register
        },
        data() {
            return {
                menuIndex: '5',
                mode: 'requester'
            }
        }
    }
</script>

<style scoped>

</style>