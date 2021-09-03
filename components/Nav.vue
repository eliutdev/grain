<template>
  <header class="section py-3">
    <b-navbar>
      <template #start>
        <b-navbar-item tag="nuxt-link" to="/">🏖️ Arena Grain</b-navbar-item>
      </template>
      <template #end>
        <Search />
      </template>
    </b-navbar>
  </header>
</template>

<script>
export default {
  name: 'Nav',
}
</script>
