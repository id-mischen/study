<template>
    <div class="home">
            这是 home页
        <ul>
            <li v-for="item,index in goodList">
                id: {{ item.id}} --- price: {{ item.price }} --- count -- {{ item.count }}
            </li>
        </ul>
    </div>
</template>

<script>
    import { mapState} from 'vuex'
    export default {
        name: "index",
        computed:{
            ...mapState({
                'goodList':'shop'
            })
        }
    }
</script>

<style scoped>

</style>