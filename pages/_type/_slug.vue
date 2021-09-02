<template>
  <div class="section">
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
}
</script>