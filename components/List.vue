<template>
  <div class="list">
    <ul v-for="item in items" :key="item.slug">
      <nuxt-link :to="item.path">
        <h2 class="subtitle is-4">
          {{ item.title }}
        </h2>
      </nuxt-link>
      <p class="my-3">{{ item.description }}</p>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <p v-html="parseTags(item.tags)"></p>
      <hr />
    </ul>
  </div>
</template>

<script>
export default {
  name: 'List',
  props: {
    items: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  methods: {
    parseTags(tags) {
      return tags.map((tag) => `<span class="tag">${tag}</span>`).join(' ')
    },
  },
}
</script>
