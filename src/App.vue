<template>
  <div id="app">
    <app-header />

    <main>
      <counter />
      <to-do />
      <calculator />
    </main>
  </div>
</template>

<script>
import Counter from './components/Counter.vue'
import ToDo from './components/ToDo.vue'
import Calculator from './components/Calculator.vue'
import AppHeader from './components/AppHeader.vue'

export default {
  name: 'App',
  components: {
    Counter,
    ToDo,
    Calculator,
    AppHeader
  }
}
</script>

<style lang="scss">
@import 'style.scss';
</style>
