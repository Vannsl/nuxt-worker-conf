<template>
  <div>
    <h1 class="text-5xl">
      Harry Potter Characters
    </h1>
    <div class="flex flex-wrap justify-around">
      <character
        v-for="character in characters"
        :key="character.name"
        :name="character.name"
        :image="character.image"
        :house="character.house"
        class="w-5/12 mx-1 my-2"
      />
    </div>
  </div>
</template>

<script>
import Character from '@/components/Character'

export default {
  name: 'Houses',
  layout: ({ params }) => params.id === 'slytherin' ? 'green' : 'default',
  head() {
    return {
      title: `${this.capitalizeId} Characters`,
      meta: [
        {
          name: 'twitter:title', content: 'My first nuxtjs app'
        },
        {
          name: 'twitter:description', content: 'Nuxtjs application containing all of the awesome HP characters'
        }
      ]
    }
  },
  components: {
    'character': Character
  },
  data() {
    return {
      id: this.$route.params.id
    }
  },
  computed: {
    characters() {
      return this.$store.state.characters[this.id]
    },
    capitalizeId() {
      return `${this.id.charAt(0).toUpperCase()}${this.id.substring(1)}`
    }
  },
  async fetch({ store, params }) {
    await store.dispatch('characters/fetchHouseCharacters', params.id)
  },
  validate({ params }) {
    const { id } = params
    return ['gryffindor', 'slytherin', 'hufflepuff', 'ravenclaw'].includes(id)
  }
}
</script>
