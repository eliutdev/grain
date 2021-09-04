<template>
  <div class="closed-ideas">
    <h4 class="subtitle">You can also take a look at this...</h4>
    <div class="closed-ideas__content">
      <nuxt-link v-if="prev" :to="prev.slug">
        {{ prev.title }}
      </nuxt-link>

      <nuxt-link v-if="next" :to="next.slug">
        {{ next.title }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClosedIdeas',
  props: {
    idea: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
  data() {
    return { prev: null, next: null }
  },
  async fetch() {
    const [prev, next] = await this.$content(this.idea.type)
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(this.idea.slug)
      .fetch()
    this.prev = prev
    this.next = next
  },
}
</script>

<style scoped>
.closed-ideas__content {
  padding: 1rem;
  background-color: var(--bg-secondary);
}
</style>
