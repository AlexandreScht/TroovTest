<template>
  <v-container>
    <h1>Register</h1>

    <authForm
      button-text="Register"
      :submit="registerUser"
      display-name-field="true"
    />
  </v-container>
</template>

<script>
import authForm from "@/components/authForm"

export default {
  components: {
    authForm,
  },
  methods: {
    registerUser(values) {
      this.$store.dispatch("user/register", values)
    },
  }, 
}
</script>

<style lang="scss" scoped></style>
