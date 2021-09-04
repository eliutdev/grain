import { kebabCase } from '~/utils/string'

export const state = () => ({
  ideas: [],
  tags: [],
})

export const actions = {
  async nuxtClientInit({ commit }, { $content }) {
    const ideas = await $content({ deep: true })
      .sortBy('createdAt', 'desc')
      .fetch()

    const tags = ideas.map((idea) => idea.tags).flat()

    commit('setTags', tags)

    commit('setIdeas', ideas)
  },
}

export const mutations = {
  setIdeas(state, ideas) {
    state.ideas = ideas
  },
  setTags(state, tags) {
    state.tags = tags
  },
}

export const getters = {
  topTags(state) {
    const result = {}
    state.tags.forEach((tag) => {
      if (!result[tag]) {
        result[tag] = 0
      }
      result[tag]++
    })
    return Object.keys(result).sort((a, b) => result[b] - result[a])
  },
  getByTag: (state) => (tag) => {
    return state.ideas.filter((idea) => idea.tags.includes(tag))
  },
  getByTitle: (state) => (title) => {
    return state.ideas.find((idea) => kebabCase(idea.title) === title)
  },
}
