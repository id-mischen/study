<template>
  <div class="hello">
    <h1>这是Vuex</h1>
    <ul>
      <li v-for="item,index in goodList">
        id: {{ item.id }}----price: {{ item.price }} ---- count: {{ item.count }}
        <button @click="addCount(item.id)">添加</button>
        <button @click="delCount(item.id)">减少</button>
      </li>
    </ul>
    <router-link to="/home">跳转到主页</router-link>
  </div>
</template>

<script>
import { mapState , mapActions} from 'vuex'

export default {
  name: 'HelloWorld',
  data(){
    return{

    }
  },
  computed:{
    ...mapState({
      'goodList':'shop'
    })
  },
  methods:{
    ...mapActions({
      'addCount':'addCount',
      'delCount':'delCount'
    }),



  }
}
</script>

<style scoped>

</style>
