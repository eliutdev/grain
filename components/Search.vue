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
import { capitalize, kebabCase } from '../utils/string'

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
      const list = await this.$store.state.ideas

      const result = []

      list.forEach((item) => {
        const items = result.find(
          (i) => i.type.toLowerCase() === item.type.toLowerCase()
        )
        if (items) {
          items.items.push(item)
        } else {
          result.push({ type: capitalize(item.type), items: [item] })
        }
      })

      this.parsedList = result
    },
    handleSelectedIdea(option) {
      this.$router.push(`/${kebabCase(option.title)}`)
    },
  },
}
</script>
