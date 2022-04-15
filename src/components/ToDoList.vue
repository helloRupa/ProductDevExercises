<template>
  <ul>
    <li v-for="({ title, id }, index) in tasks" :key="setAttr(title, index)" aria-live="polite" aria-relevant="additions removals">
      <input type="checkbox" :id="setAttr(title, index)" @change="toggleDone($event, id)" />
      <label :for="setAttr(title, index)">{{ title }}</label>
      <button type="button" :aria-label="`Delete ${title}`" @click="deleteTask(index)">X</button>
    </li>
  </ul>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'ToDoList',
  props: {
    tasks: Array
  },
  methods: {
    ...mapActions(['addTask', 'removeTask']),
    setAttr (taskTitle, index) {
      return `${taskTitle}-${index}`
    },
    toggleDone (event, id) {
      if (event.target.checked) {
        this.addTask(id)
      } else {
        this.removeTask(id)
      }
    },
    deleteTask (index) {
      this.$emit('deleteTask', index)
    }
  }
}
</script>
