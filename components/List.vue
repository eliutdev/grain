<template>
  <div class="list">
    <ul v-for="item in items" :key="item.slug">
      <h2>{{ item.title }}</h2>
      <p>{{ item.description }}</p>
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
}
</script>
