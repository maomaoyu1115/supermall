<template>
<div id="app">
  <h2>{{message}}</h2>
  <h2>{{$store.state.counter}}</h2>
  <button @click="sub">-</button>
  <button @click="add">+</button>
  <button @click="counteradd(5)">+5</button>
  <button @click="counteradd(10)">+10</button>
  <button @click="addStudent">添加学生</button>
  <h2>--------getters------</h2>
  <h2>{{$store.getters.powerCounter}}</h2>
  <h2>{{$store.getters.more20stu}}</h2>
  <h2>{{$store.getters.more20stulen}}</h2>
  <h2>{{$store.getters.moreagestu(21)}}</h2>
  <h2>-------------</h2>
  <HelloWorld></HelloWorld>
</div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
export default {
  name: 'App',
  data(){
    return{
      message:'我是app组件',
      counter: 0
    }
  },
  methods:{
    add(){
      this.$store.commit('increment')
    },
    sub(){
      this.$store.commit('decrement')
    },
    counteradd(count){
      this.$store.commit('incrementCount',count)
    },
    addStudent(){
      const stu = {id: 114, name: 'lovecyh', age:53}
      this.$store.commit('addStudent',stu)
    }
  },
  components: {
    HelloWorld
  }
}
</script>

<style>

</style>
