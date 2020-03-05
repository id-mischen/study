<template>
    <div class="footer">
        {{ userName }}
    </div>
</template>

<script>
    export default {
        name: "footer-A",
        data(){
          return{
              userName: 'Rainy'
          }
        },
        mounted() {
            this.test() ;
        },
        methods:{
            async test(){
                let url = this.api.login ;
                let res = await  this.$http.post(url,{
                    account: '13256175619',
                    password: '123456'
                }) ;
                console.log(res) ;
            }
        }
    }
</script>

<style scoped>

</style>