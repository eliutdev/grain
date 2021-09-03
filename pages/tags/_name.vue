<template>
  <section class="section">
    <h1 class="title is-1"><span class="tag is-large">#</span> {{ tag }}</h1>
  </section>
</template>

<script>
export default {
  name: 'Tag',
  asyncData({ params }) {
    return {
      tag: params.name,
    }
  },
}
</script>
