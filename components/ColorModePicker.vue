<template>
  <div class="color-mode-picker">
    <component :is="`icon-${color}`" @click="toggleColor" />
  </div>
</template>

<script>
import IconLight from '@/assets/icons/light.svg?inline'
import IconDark from '@/assets/icons/dark.svg?inline'

export default {
  name: 'ColorModePicker',
  components: {
    IconLight,
    IconDark,
  },
  data() {
    return {
      color: 'light',
    }
  },
  methods: {
    toggleColor() {
      this.$colorMode.preference =
        this.$colorMode.value === 'light' ? 'dark' : 'light'
      this.color = this.$colorMode.value
    },
  },
}
</script>

<style scoped>
ul {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}
.feather {
  position: relative;
  top: 0;
  cursor: pointer;
  background-color: var(--bg-secondary);
  margin: 0;
  border-radius: 5px;
  transition: all 0.1s ease;
}
</style>
