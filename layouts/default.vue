<template>
  <div class="container is-fullhd px-4">
    <Nav />
    <main class="columns is-desktop">
      <div class="column is-one-quarter">
        <h2 class="subtitle is-4">Tiers</h2>
        <ul class="tier-list">
          <li
            v-for="(level, index) in levels"
            :key="level.slug"
            :class="{ 'mb-5': index === levels.length - 1 }"
          >
            <nuxt-link :to="`/ideas/${level.slug}`">{{ level.name }}</nuxt-link>
          </li>
        </ul>
        <h2 class="subtitle is-4">Top tags</h2>
        <u class="tag-list">
          <li
            v-for="(tag, index) in topTags"
            :key="tag"
            :class="{ 'mb-5': index === topTags.length - 1 }"
          >
            <nuxt-link :to="`/tags/${tag}`"> #{{ tag }} </nuxt-link>
          </li>
        </u>
        <SocialIcons />
      </div>
      <div class="column">
        <Nuxt />
      </div>
      <div class="column is-one-quarter has-text-centered">
        <h2 class="subtitle is-4">Our amazing contributors</h2>
        <p class="mb-5">
          <img
            src="https://contributors-svg.vercel.app/api/svg?user=reliut-g&repo=grain"
            alt="Contributors"
          />
        </p>
        <Copyright />
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  data() {
    return {
      levels: [
        {
          name: 'Beginner',
          slug: 'beginner',
        },
        {
          name: 'Intermediate',
          slug: 'intermediate',
        },
        {
          name: 'Advanced',
          slug: 'advanced',
        },
      ],
    }
  },
  computed: {
    topTags() {
      return this.$store.getters.topTags
    },
  },
}
</script>
