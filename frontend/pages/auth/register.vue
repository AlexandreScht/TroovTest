<template>
  <v-container>
    <h1>Register</h1>

    <authForm
      buttonText="Register"
      :submit="registerUser"
      displayNameField="true"
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
    async registerUser(values) {
      await this.$store.dispatch('user/register', values)
    },
  },
}
</script>

<style lang="scss" scoped></style>
