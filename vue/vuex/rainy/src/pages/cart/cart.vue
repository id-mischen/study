 <template>
    <div class="cart">
        <h1>this is goods</h1>
        <ol type="1">
            <li v-for="item in sham_goods" :key="item.id">
                <span>{{ item.name }}: {{ item.price }}元 销量：{{ item.sale }} </span>
                <span>数量：{{ item.count }}</span>
            </li>
        </ol>
    </div>
</template>

<script>
    import  { mapState, mapGetters} from 'vuex'
    export default {
        name: "cart",
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
        }
    }
</script>

<style scoped>

</style>