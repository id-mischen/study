<template>
    <div class="index">
        <Footer></Footer>
        <router-view></router-view>
    </div>
</template>

<script>
    import Footer from '@/components/footer/footer'
    export default {
        name: "index",
        components:{
            Footer,
        }
    }
</script>

<style scoped lang="scss">

</style>