<template>
  <div class="flex items-center bg-white">
    <nuxt-link
      to="/"
      class="logo bg-cover block"
    />
    <nuxt-link to="/characters">
      Characters
    </nuxt-link>
    <nuxt-link to="/houses/gryffindor" class="px-1">
      gryffindor
    </nuxt-link>
    <nuxt-link to="/houses/ravenclaw" class="px-1">
      ravenclaw
    </nuxt-link>
    <nuxt-link to="/houses/slytherin" class="px-1">
      slytherin
    </nuxt-link>
    <nuxt-link to="/houses/hufflepuff" class="px-1">
      hufflepuff
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
.logo {
  background-image: url('~assets/img/logo-navbar.png');
  height: 80px;
  width: 80px;
}

.nuxt-link-exact-active {
  font-weight: bold;
}
</style>
