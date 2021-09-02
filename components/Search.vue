<template>
  <b-field>
    <b-autocomplete
      v-model="idea"
      group-field="type"
      group-options="items"
      placeholder="Find an amazing idea..."
      icon="magnify"
      :data="filteredDataArray"
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
  props: {
    items: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  data() {
    return {
      idea: '',
    }
  },
  computed: {
    parsedList() {
      const result = []
      this.items.forEach((item) => {
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
      return result
    },
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
    handleSelectedIdea(option) {
      this.$router.push(option.path)
    },
  },
}
</script>
