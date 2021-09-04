<template>
  <section>
    <IdeaInfo :idea="idea" />
    <nuxt-content :document="idea" />
  </section>
</template>

<script>
export default {
  name: 'Idea',
  async asyncData({ params, store }) {
    const idea = await store.getters.getByTitle(params.idea)
    return { idea }
  },
}
</script>
