<template>
    <div class="toast">
        <h1> toast - {{ message }} </h1>
    </div>
</template>

<script>
    export default {
        name: "toast",
        data(){
            return{
                message: ''
            }
        }
    }
</script>

<style scoped>

</style>