<template>
  <section>
    <h1 class="title is-1 is-capitalized">{{ $route.params.tier }} ideas</h1>
    <List :items="ideas" />
  </section>
</template>

<script>
export default {
  name: 'Ideas',
  asyncData({ params, store }) {
    const ideas = store.getters.getByTier(params.tier)
    return { ideas }
  },
}
</script>
