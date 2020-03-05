<template>
    <div class="footer">
        <div v-for="item,index in footerNav" :class="{active: index === currentIndex }" @click="jumpPage(item.path,index)">
            <span> {{ item.title }}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "footera",
        data:function () {
            return{
                footerNav:[{
                    title:'电影',
                    path:'/film'
                },{
                    title:'影院',
                    path:'/cinema'
                },{
                    title:'我的',
                    path:'/mine'
                }],
                currentIndex: ''
            }
        },
        mounted(){
            let path = this.$route.path ;
            switch (path) {
                case "/film":
                    this.currentIndex = 0;
                    break;
                case "/cinema":
                    this.currentIndex = 1;
                    break;
                default:
                    this.currentIndex = 0
            }
        },
        methods:{
            jumpPage(path, index){
                this.currentIndex = index ;
                this.$router.push(path);
            }
        }
    }
</script>

<style scoped lang="scss">
    .footer{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .active{
            color: red;
        }
        div{

        }
    }
</style>