<template>
  <div class="container is-fluid">
    <Nav />
    <main class="columns is-desktop">
      <div class="column is-one-quarter"></div>
      <div class="column">
        <Nuxt />
      </div>
      <div class="column is-one-quarter has-text-centered">
        <h2 class="subtitle is-4">Our amazing contributors</h2>
        <p>
          <img
            src="https://contributors-svg.vercel.app/api/svg?user=reliut-g&repo=grain"
            alt="Contributors"
          />
        </p>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Layout',
}
</script>
