<template>
    <canvas id="myCanvas" width="400" height="300"/>
</template>

<script>
    export default {
        name: "canvas2",
        data(){
            return {

            }

        },

        methods:{

        },
        mounted() {
            let canvas = document.getElementById("myCanvas");
            let context = canvas.getContext("2d");
            // context.fillStyle = "#FF0000";
            // context.fillRect(50,50,150,100);

            context.strokeStyle = "#ff0000";

            context.lineTo(20, 20);
            context.lineTo(20, 70);
            context.lineTo(70, 70);
            context.lineTo(20, 20);
            context.stroke();
        }


    }
</script>

<style scoped>

</style>
