<template>
  <section class="section">
    <IdeaInfo :idea="idea" />
    <nuxt-content :document="idea" />
  </section>
</template>

<script>
export default {
  name: 'Idea',
  async asyncData({ params, $content }) {
    const result = await $content({ deep: true })
      .where({ path: { $contains: [params.idea] } })
      .fetch()
    if (result.length === 0) {
      throw new Error(`Not found`)
    }
    return {
      idea: result[0],
    }
  },
}
</script>
