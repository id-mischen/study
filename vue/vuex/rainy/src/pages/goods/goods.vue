<template>
    <div class="goods">
        <h1>this is goods</h1>
        <ol type="1">
            <li v-for="item in sham_goods" :key="item.id">
                <span>{{ item.name }}: {{ item.price }}元 销量：{{ item.sale }} </span>
                <span>数量：{{ item.count }}</span>
                <div>
                    <button @click="changeCount({id: item.id, num: 100,type: 'add' })">增加</button>
                    <button @click="changeCount({id: item.id, num: 50, type: 'del' })">减少</button>
                </div>

            </li>
        </ol>
    </div>
</template>

<script>
    import  { mapState, mapGetters, mapActions } from 'vuex'
    export default {
        name: "goods",
        computed:{
            ...mapState({
                goods: 'goods'
            }),
            ...mapGetters(['sham_goods'])
        },
        created() {
            console.log(this)
        },
        methods:{
            ...mapActions(['changeCount'])
        }
    }
</script>

<style scoped>

</style>