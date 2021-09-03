<template>
  <section class="section">
    <p v-if="!$fetchState.pendin && $fetchState.error">An error occured :(</p>
    <List v-else :items="ideas" />
  </section>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      ideas: [],
    }
  },
  async fetch() {
    const beginner = await this.fetchContent('beginner')
    const intermediate = await this.fetchContent('intermediate')
    const advanced = await this.fetchContent('advanced')
    this.ideas = [...beginner, ...intermediate, ...advanced]
  },
  // call fetch only on client-side
  fetchOnServer: false,
  methods: {
    async fetchContent(name) {
      try {
        const content = await this.$content(name)
          .only([
            'title',
            'description',
            'tags',
            'author',
            'createdAt',
            'readingTimeText',
          ])
          .limit(10)
          .fetch()
        return content
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error)
      }
    },
  },
}
</script>
