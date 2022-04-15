<template>
  <header>
    <div>
      <h1>Productivity App</h1>
      <historical-data />
    </div>
  </header>
</template>

<script>
import HistoricalData from './HistoricalData.vue'

export default {
  name: 'AppHeader',
  components: {
    HistoricalData
  }
}
</script>
