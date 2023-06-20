<template>
  <v-app dark>
    <v-app-bar fixed app>
        <nuxt-link id="homeLink" to="/">Home</nuxt-link>
        <span v-if="$auth.loggedIn" id="userName">Welcome {{ $auth.user.name.charAt(0).toUpperCase() + $auth.user.name.slice(1) }}</span>
        <div v-if="$auth.loggedIn" class="Menu">
          <nuxt-link to="/list">My List</nuxt-link>
        </div>
      <div class="ml-auto">
        <div v-if="$auth.loggedIn">
          <v-btn text @click="$auth.logout()">Logout</v-btn>
        </div>
        <div v-else>
          <v-btn text to="/login">Login</v-btn>
          <v-btn text to="/register">Register</v-btn>
        </div>
      </div>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  data() {
    return {
      title: "strach.js",
    }
  },
}
</script>

<style lang="scss" scoped>
.Menu{
  width: 100%; height: 100%;
  display: flex;
  top: 0; left: 0;
  justify-content: center;
  align-items: center;
  position: absolute;
}
a{
  text-decoration: none;
  color: white;
  padding: 0 1em;
}
#homeLink{
  z-index: 1;
}
#userName{
  color: darkgrey;
}
</style>
