<template>
<div>
  <h2>{{$store.state.counter}}</h2>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    counter:0
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
