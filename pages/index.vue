<template>
  <section class="section">
    <List :items="ideas" />
  </section>
</template>

<script>
export default {
  name: 'Home',
  async asyncData({ $content }) {
    const fetchContent = async (name) => {
      try {
        const content = await $content(name)
          .only(['title', 'description', 'tags'])
          .limit(10)
          .fetch()
        return content
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error)
      }
    }

    const beginner = await fetchContent('beginner')
    const intermediate = await fetchContent('intermediate')
    const advanced = await fetchContent('advanced')

    return {
      ideas: [...beginner, ...intermediate, ...advanced],
    }
  },
}
</script>
