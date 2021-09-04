<template>
  <section>
    <h1 class="title">"Start with a grain of sand, grow into a mountain."</h1>
    <List :items="ideas" />
  </section>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    ideas() {
      return this.$store.state.ideas
    },
  },
}
</script>
