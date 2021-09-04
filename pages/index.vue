<template>
  <section>
    <h1 class="title">Ideas</h1>
    <blockquote :cite="quote.url">
      <p>{{ quote.text }}</p>
      <figcaption>
        <a :href="quote.url" target="_blank">—{{ quote.author }}</a>
      </figcaption>
    </blockquote>
    <hr />
    <List :items="ideas" />
  </section>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      quote: {
        author: '',
        text: '',
        url: '',
      },
    }
  },
  async fetch() {
    const url = 'https://quotes.rest/qod?category=inspire&language=en'
    const result = await fetch(url)
    const data = await result.json()
    this.quote = {
      author: data.contents.quotes[0].author,
      text: data.contents.quotes[0].quote,
      url: data.contents.quotes[0].permalink,
    }
  },
  fetchOnServer: false,
  computed: {
    ideas() {
      return this.$store.state.ideas
    },
  },
}
</script>
