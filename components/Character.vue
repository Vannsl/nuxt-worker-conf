<template>
  <article class="md:flex bg-white rounded-lg p-6">
    <img
      :src="image"
      :alt="name"
      :title="name"
      class="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6 object-cover"
    >
    <div class="text-center md:text-left">
      <div class="text-lg">
        {{ name }}
      </div>
      <div class="text-gray-600">
        House: {{ house }}
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'Character',
  props: {
    house: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  }
}
</script>
