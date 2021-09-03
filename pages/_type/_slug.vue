<template>
  <section class="section">
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div v-html="parseTags(idea.tags)"></div>
    <p class="my-2">
      Proposal by
      <a :href="`https://github.com/${idea.author}`" target="_blank">{{
        idea.author
      }}</a>
      on
      {{ getPublishAt(idea) }}・{{ idea.readingTimeText }}
    </p>
    <nuxt-content :document="idea" />
  </section>
</template>

<script>
export default {
  name: 'Idea',
  async asyncData({ params, $content }) {
    const path = `/${params.type}/${params.slug}`
    const result = await $content(params.type).where({ path }).fetch()
    if (result.length === 0) {
      throw new Error(`Not found: ${path}`)
    }
    return {
      idea: result[0],
    }
  },
  methods: {
    parseTags(tags) {
      return tags.map((tag) => `<span class="tag">#${tag}</span>`).join(' ')
    },
    getPublishAt(idea) {
      const date = new Date(idea.createdAt)
      // return day and month name
      return `${date.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
      })}`
    },
  },
}
</script>
