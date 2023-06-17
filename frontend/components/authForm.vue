<template>
  <v-form v-model="valid">
    <v-text-field
      v-model="userInfo.name"
      label="Name"
      :rules="[required('name')]"
      v-if="displayNameField"
    />

    <v-text-field
      v-model="userInfo.email"
      label="Email"
      :rules="[required('email'), emailFormat()]"
    />

    <v-text-field
      v-model="userInfo.password"
      label="Password"
      :type="showPassword ? 'text' : 'password'"
      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
      @click:append="showPassword = !showPassword"
      counter="true"
      :rules="displayNameField ? [required('password'), minLength('password', 8), passwordFormat()] : [required()]"
    />

    <v-btn @click="submit(userInfo)" :disabled="!valid">{{ buttonText }}</v-btn>
  </v-form>
</template>

<script>
import validations from "@/utils/validations"
export default {
  data() {
    return {
      valid: false,
      showPassword: false,
      hasName: false,
      userInfo: {
        email: "",
        password: "",
      },
      ...validations,
    }
  },
  props: ["submit", "buttonText", "displayNameField"],
}
</script>

<style lang="scss" scoped></style>
