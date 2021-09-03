<template>
  <!--  eslint-disable vue/no-v-html  -->
  <div class="list">
    <article v-for="item in items" :key="item.slug">
      <h2 class="subtitle is-4">
        <nuxt-link :to="item.path">
          {{ item.title }}
        </nuxt-link>
      </h2>
      <p>
        <nuxt-link
          v-for="(tag, index) in parseTags(item.tags)"
          :key="index"
          :to="tag.path"
          v-html="tag.html"
        />
      </p>
      <hr />
    </article>
  </div>
</template>

<script>
export default {
  name: 'List',
  props: {
    items: {
      type: Array,
      required: true,
      default: () => {
        return [
          {
            title: '',
            path: '/',
            tags: [],
          },
        ]
      },
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
  },
}
</script>
