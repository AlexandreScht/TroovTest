<template>
  <v-app dark>
    <v-app-bar fixed app>
      <div v-if="$auth.loggedIn">
        <span>Welcome {{ $auth.user.name }}</span>
        <v-btn text @click="$auth.logout()">Logout</v-btn>
      </div>
      <div v-else>
        <v-btn text to="/login">Login</v-btn>
        <v-btn text to="/register">register</v-btn>
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
v-app-bar div{
  display: flex;
  flex-direction: row;
}
</style>
