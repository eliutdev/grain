<template>
  <header class="py-3">
    <b-navbar>
      <template #brand>
        <b-navbar-item tag="nuxt-link" to="/">🏖️ Grain</b-navbar-item>
      </template>
      <template #end>
        <Search />
        <ColorModePicker />
      </template>
    </b-navbar>
  </header>
</template>

<script>
export default {
  name: 'Nav',
}
</script>