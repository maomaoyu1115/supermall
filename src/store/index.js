import { createStore } from 'vuex'

export default createStore({
  state: {
    counter:100,
    student:[
      {id:110,name:'cyh',age:21},
      {id:111,name:'cc',age:20},
      {id:112,name:'mps',age:25},
      {id:113,name:'mm',age:18},

    ]
  },
  getters: {
    //乘法
    powerCounter(state){
      return state.counter*state.counter
    },
    //过滤 年龄小于20
    more20stu(state){
      return state.student.filter(s => s.age>20)
    },
    //长度
    more20stulen(state,getters){
      return getters.more20stu.length
    },
    //传入过滤数值
    moreagestu(state){
      return function (age) {
        return state.student.filter(s => s.age > age)

      }
    }

  },
  mutations: {
    //方法
    increment(state){
      state.counter++
    },
    decrement(state){
      state.counter--
    },
    incrementCount(state,count){
      state.counter += count
    },
    addStudent(state,stu){
      state.student.push(stu)
    }
  },
  actions: {
  },
  modules: {
  }
})
