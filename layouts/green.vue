<template>
  <div>
    <navbar />
    <div class="flex justify-center h-screen bg-green-600">
      <div class="container p-8">
        <nuxt />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  components: {
    'navbar': Navbar
  }
}
</script>
