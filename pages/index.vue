<template>
  <section>
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
