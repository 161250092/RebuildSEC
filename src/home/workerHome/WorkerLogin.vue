<template>
    <div>
        <WorkerHomeNav v-bind:menu-index="menuIndex"/>
        <Login v-bind:mode="mode"/>
    </div>
</template>

<script>
    import WorkerHomeNav from "./WorkerHomeNav";
    import Login from "../util/Login";
    export default {
        name: "WorkerLogin",
        components: {
            WorkerHomeNav, Login
        },
        data() {
            return {
                menuIndex: '4',
                mode: 'worker'
            }
        }
    }
</script>

<style scoped>

</style>