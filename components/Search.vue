<template>
  <b-field>
    <b-autocomplete
      v-model="idea"
      group-field="type"
      group-options="items"
      placeholder="Find an amazing idea..."
      icon="magnify"
      :data="filteredDataArray"
      @input="getData"
      @select="handleSelectedIdea"
    >
      <template slot-scope="props">
        <div class="media">
          <div class="media-body">
            <h4 class="media-heading">{{ props.option.title }}</h4>
            <p>{{ props.option.description }}</p>
          </div>
        </div>
      </template>
      <template #empty>No results found</template>
    </b-autocomplete>
  </b-field>
</template>

<script>
const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export default {
  name: 'Search',
  data() {
    return {
      idea: '',
      parsedList: [],
    }
  },
  computed: {
    filteredDataArray() {
      // return empty array if no search term
      if (!this.idea) return []

      return this.parsedList.filter((idea) => {
        return idea.items.find((i) =>
          i.title.toLowerCase().includes(this.idea.toLowerCase())
        )
      })
    },
  },
  methods: {
    async getData() {
      const beginner = await this.fetchContent('beginner')
      const intermediate = await this.fetchContent('intermediate')
      const advanced = await this.fetchContent('advanced')

      const list = [...beginner, ...intermediate, ...advanced]

      const result = []

      list.forEach((item) => {
        const type = item.path.split('/')[1]
        const items = result.find(
          (i) => i.type.toLowerCase() === type.toLowerCase()
        )
        if (items) {
          items.items.push(item)
        } else {
          result.push({ type: capitalize(type), items: [item] })
        }
      })

      this.parsedList = result
    },
    async fetchContent(name) {
      try {
        const content = await this.$content(name).only(['title']).fetch()
        return content
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error)
      }
    },
    handleSelectedIdea(option) {
      this.$router.push(option.path)
    },
  },
}
</script>
