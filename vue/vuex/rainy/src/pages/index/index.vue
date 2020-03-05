<template>
    <div class="index">
            this is index
        <router-link to="/goods">go to Goods</router-link>
        <router-link to="/cart">go to Cart</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>

</style>