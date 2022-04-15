<template>
  <ul class="metadata">
    <li aria-live="polite" aria-atomic="true">
      Total counter clicks: <span>{{ counterClicks }}</span>
    </li>
    <li aria-live="polite" aria-atomic="true">
      Tasks completed: <span>{{ completedTasks }}</span>
    </li>
    <li aria-live="polite" aria-atomic="true">
      Total calculations: <span>{{ calculations }}</span>
    </li>
  </ul>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'HistoricalData',
  computed: {
    ...mapState({
      counterClicks: state => state.counterClicks,
      calculations: state => state.calculations
    }),
    ...mapGetters(['completedTasks'])
  }
}
</script>
