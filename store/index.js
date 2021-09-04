export const state = () => ({
  ideas: [],
  tags: [],
})

export const actions = {
  async nuxtClientInit({ commit }, { $content }) {
    const ideas = await $content({ deep: true }).fetch()

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
}
