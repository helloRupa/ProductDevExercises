<template>
  <section aria-labelledby="counter-heading" aria-describedby="counter-info">
    <h2 id="counter-heading">Counter</h2>
    <p class="subheading" id="counter-info">For those times when you have nothing to do, just click your time away...</p>

    <div class="content counter">
      <button type="button" aria-label="reduce count" @click="changeCount(-1)">-</button>
      <span aria-live="polite" aria-atomic="true">{{ count }}</span>
      <button type="button" aria-label="increase count" @click="changeCount(1)">+</button>
    </div>
  </section>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Counter',
  data () {
    return {
      count: 0
    }
  },
  methods: {
    ...mapActions(['increaseClickCount']),
    changeCount (value) {
      this.count += value
      this.increaseClickCount()
    }
  }
}
</script>
