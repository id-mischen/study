<template>
    <div class="cart">
        <div class="goods" v-for="item in goods">
            名称: {{ item.name }}
            价格: {{ item.price }}
            数量：{{ item.count }}
            <button @click="changeCount({ type:0, id: item.id })">减少</button>
            <button @click="changeCount({ type:1, id: item.id })">添加</button>
        </div>
        <button @click="goOrderPage">结算</button>
        <p id="cc"> - </p>
        <button @click="addToast">Toast</button>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex'

    export default {
        name: "cart",
        computed:{
            ...mapState(['goods'])
        },
        mounted(){
          this.show();
        },
        methods:{
            ...mapActions(['initGoods','changeCount']),
            goOrderPage(){
                this.$router.push({
                    path: '/order'
                })
            },
            show(){
                this.initGoods() ;
            },
            addToast(){
                let oC = document.getElementById('cc') ;
                this.$toast('Rainy',oC) ;
            }
        }
    }
</script>

<style scoped>

</style>