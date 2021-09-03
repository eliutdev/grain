<template>
  <div class="idea-info mb-2">
    <!-- eslint-disable vue/no-v-html -->
    <p class="mb-2">
      Proposal by
      <a :href="`https://github.com/${idea.author}`" target="_blank">{{
        idea.author
      }}</a>
      on
      {{ getPublishAt(idea) }}・{{ idea.readingTimeText }}
    </p>
    <nuxt-link
      v-for="(tag, index) in parseTags(idea.tags)"
      :key="index"
      :to="tag.path"
      v-html="tag.html"
    />
  </div>
</template>

<script>
export default {
  name: 'IdeaInfo',
  props: {
    idea: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
  methods: {
    parseTags(tags) {
      return tags.map((tag) => {
        return {
          path: `/tags/${tag}`,
          html: `<span class="tag mr-1">#${tag}</span>`,
        }
      })
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
