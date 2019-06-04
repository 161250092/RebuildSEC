<template>
    <div>
        <div>
            <el-row type="flex" justify="center" class="info-row">
                <el-col :span="10"><p>工人ID：{{worker.ID}}</p></el-col>
                <el-col :span="10"><p>账户余额：{{worker.balance}}</p></el-col>
                <el-col :span="10"><p>声望：{{worker.prestige}}</p></el-col>
                <el-col :span="5"><p>你好，{{worker.name}}</p></el-col>
            </el-row>
        </div>
        <div>
            <NavMenu id="navMenu"
                     v-bind:routes="workerRoutes"/>
        </div>
    </div>
</template>

<script>
    import NavMenu from "../components/NavMenu";
    import routes from "../common/js/workerRoutes"

    // worker: {
    //    ID: 'A2GCPZ6HVH27EN',
    //    name: '工人1'，
    //    balance: 500,
    //    prestige: 100,
    // }
    export default {
        name: "WorkerNavMenu",
        components: {NavMenu},
        data () {
            return {
                workerRoutes: routes,
                worker: {
                    ID: 'A2GCPZ6HVH27EN',
                    name: '工人1',
                    balance: 500,
                    prestige: 100,
                },
            }
        }
    }
</script>

<style scoped>
    #navMenu {
        margin-top: 50px;
    }
</style>