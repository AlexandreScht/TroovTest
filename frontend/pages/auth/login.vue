<template>
  <v-container>
    <h1>Login</h1>

    <authForm buttonText="Login" :submit="loginUser" />
  </v-container>
</template>

<script>
import authForm from "@/components/authForm"

export default {
  components: {
    authForm,
  },
  methods: {
    loginUser(values) {
      this.$auth.loginWith("local", {
        data: values,
      })
    },
  },
}
</script>

<style lang="scss" scoped></style>
