import Vue from 'vue'
import Vuex from 'vuex'
import { INCREASE_CLICK_COUNT, INCREASE_CALCULATIONS, ADD_TASK, REMOVE_TASK } from './mutation-types'

Vue.use(Vuex)

const state = {
  counterClicks: 0,
  calculations: 0,
  completedTasks: []
}

const getters = {
  completedTasks (state) {
    return state.completedTasks.length
  }
}

const actions = {
  // track total clicks on counter buttons
  increaseClickCount ({ commit }) {
    commit(INCREASE_CLICK_COUNT)
  },
  // track total clicks on = on calculator
  increaseCalculations ({ commit }) {
    commit(INCREASE_CALCULATIONS)
  },
  // add completed task id to state
  addTask ({ commit }, id) {
    commit(ADD_TASK, id)
  },
  // remove task when unticked
  removeTask ({ commit }, id) {
    commit(REMOVE_TASK, id)
  }
}

const mutations = {
  [INCREASE_CLICK_COUNT] (state) {
    ++state.counterClicks
  },
  [INCREASE_CALCULATIONS] (state) {
    ++state.calculations
  },
  [ADD_TASK] (state, id) {
    // Set() is not reactive in Vue :( so we'll mutate an array
    const itemIndex = state.completedTasks.indexOf(id)

    if (itemIndex < 0) {
      state.completedTasks.push(id)
    }
  },
  [REMOVE_TASK] (state, id) {
    const itemIndex = state.completedTasks.indexOf(id)

    if (itemIndex > -1) {
      state.completedTasks.splice(itemIndex, 1)
    }
  }
}

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

export default store
