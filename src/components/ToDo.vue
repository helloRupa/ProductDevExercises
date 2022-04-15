<template>
  <section aria-labelledby="todo-heading" aria-describedby="todo-info">
    <h2 id="todo-heading">To Do List</h2>
    <p class="subheading" id="todo-info">Track all of the things you need to do! Save that ink for another day!</p>

    <div class="content todo">
      <to-do-form @submit="submit" />
      <to-do-list :tasks="tasks" @deleteTask="deleteTask" />
    </div>
  </section>
</template>

<script>
import ToDoForm from './ToDoForm.vue'
import ToDoList from './ToDoList.vue'

export default {
  components: { ToDoForm, ToDoList },
  name: 'ToDo',
  data () {
    return {
      tasks: [],
      id: 0
    }
  },
  methods: {
    submit (taskTitle) {
      this.tasks.push({ title: taskTitle, id: this.id })
      ++this.id
    },
    deleteTask (index) {
      this.tasks.splice(index, 1)
    }
  }
}
</script>
