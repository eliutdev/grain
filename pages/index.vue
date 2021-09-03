<template>
  <section class="section">
    <List :items="ideas" />
  </section>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      beginner: [],
      intermediate: [],
      advanced: [],
      ideas: [],
    }
  },
  async fetch() {
    this.beginner = await this.fetchContent('beginner')
    this.intermediate = await this.fetchContent('intermediate')
    this.advanced = await this.fetchContent('advanced')
    this.ideas = this.setupList()
  },
  // call fetch only on client-side
  fetchOnServer: false,
  methods: {
    async fetchContent(name) {
      try {
        const content = await this.$content(name)
          .only(['title', 'description', 'tags'])
          .limit(10)
          .fetch()
        return content
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error)
      }
    },
    setupList() {
      return [...this.beginner, ...this.intermediate, ...this.advanced]
    },
  },
}
</script>
