<template>
    <div class="home">
        this is home - {{ name }}
    </div>
</template>

<script>
    export default {
        name: "home",
        data(){
            return{
                name: '外部引入'
            }
        }

    }
</script>

<style scoped>

</style>