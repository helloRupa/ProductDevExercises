<template>
  <form @submit.prevent="submit" autocomplete="off">
    <label for="task-input">Task Title:</label>
    <input type="text" id="task-input" placeholder="Enter task title" v-model="taskTitle" @input="clearError" />
    <span v-if="showError" aria-live="polite">The art of doing nothing is not allowed.</span>
    <input type="submit" value="Add Task" />
  </form>
</template>

<script>
export default {
  name: 'ToDoForm',
  data () {
    return {
      taskTitle: '',
      showError: false
    }
  },
  methods: {
    submit () {
      if (!this.taskTitle) {
        this.showError = true
        return
      }

      this.$emit('submit', this.taskTitle)
      this.taskTitle = ''
    },
    clearError () {
      this.showError = false
    }
  }
}
</script>
