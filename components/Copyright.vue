<template>
  <div class="has-text-centered">
    <p>
      Released under the
      <a
        href="https://github.com/reliut-g/grain/blob/main/LICENSE"
        target="_blank"
        >MIT License</a
      >
    </p>
    <p>Copyright © {{ copyryghtYear }} Eliut González</p>
  </div>
</template>

<script>
export default {
  name: 'Copyright',
  computed: {
    copyryghtYear() {
      const initYear = 2021
      const currentYear = new Date().getFullYear()
      return currentYear > initYear ? `${initYear}-${currentYear}` : initYear
    },
  },
}
</script>
