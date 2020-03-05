<template>
    <div class="order">
        <div class="goods" v-for="item in goods">
            名称: {{ item.name }}
            价格: {{ item.price }}
            数量：{{ item.count }}
        </div>
        <h1>订单页</h1>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: "order",
        computed:{
            ...mapState(['goods'])
        }
    }
</script>

<style scoped>

</style>