<template>
    <div>
        <WorkerHomeNav v-bind:menu-index="menuIndex"/>
        <Register v-bind:mode="mode"/>
    </div>
</template>

<script>
    import WorkerHomeNav from "./WorkerHomeNav";
    import Register from "../util/Register";
    export default {
        name: "WorkerRegister",
        components: {
            WorkerHomeNav, Register
        },
        data() {
            return {
                menuIndex: '2',
                mode: 'worker'
            }
        }
    }
</script>

<style scoped>

</style>