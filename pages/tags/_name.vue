<template>
  <section>
    <h1 class="title is-1"><span class="tag is-large">#</span> {{ tag }}</h1>
    <p>{{ matchText }}</p>
    <hr />
    <List :items="ideas" />
  </section>
</template>

<script>
export default {
  name: 'TagExplorer',
  async asyncData({ params, store }) {
    const ideas = await store.getters.getByTag(params.name)
    return {
      ideas, // ideas is an array of objects
      tag: params.name, // current tag
    }
  },
  computed: {
    matchText() {
      return this.ideas.length === 0
        ? 'No ideas found'
        : this.ideas.length === 1
        ? '1 idea found'
        : `${this.ideas.length} ideas found`
    },
  },
}
</script>
