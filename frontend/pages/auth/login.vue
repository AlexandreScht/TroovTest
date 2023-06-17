<template>
  <div>
    <v-container>
      <h1>Login</h1>
      <authForm buttonText="Login" :submit="loginUser" />
    </v-container>
    <span class="errorMessage">{{ error }}</span>
  </div>

</template>

<script>
import authForm from "@/components/authForm"

export default {
  components: {
    authForm,
  },
  data() {
    return {
      error: '',
    }
  },
  methods: {
    async loginUser(values) {
      try {
        await this.$auth.loginWith("local", {
        data: values,
        })
      this.$router.push('/')
      } catch (error) {
        this.error = 'Email or Password incorrect';
      }
      
    },
  },
}
</script>

<style lang="scss" scoped>
.errorMessage{
  color: red;
  margin-top: 3em;
}
</style>
