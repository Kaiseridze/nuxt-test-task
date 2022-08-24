import axios from 'axios'

export const state = () => ({
  isLoading: true,
  comments: [],
})

export const actions = {
  async fetchComments({ commit }) {
    await axios
      .get('https://jsonplaceholder.typicode.com/comments/')
      .then(({ data }) => commit('updateComments', data))
  },
  sortById({ commit }) {
    commit('updateSortById')
  },
}

export const mutations = {
  updateComments(state, data) {
    state.comments = data
    state.isLoading = false
  },
  updateSortById(state) {
    state.comments.sort((a, b) => (a.id > b.id ? b.id - a.id : a.id - b.id))
  },
}

export const getters = {
  getComments(state) {
    return state.comments
  },
  getLoadingStatus(state) {
    return state.isLoading
  },
}
