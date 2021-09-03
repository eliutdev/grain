<template>
  <div class="section">
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div v-html="parseTags(idea.tags)"></div>
    <nuxt-content :document="idea" />
  </div>
</template>

<script>
export default {
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
  },
}
</script>
