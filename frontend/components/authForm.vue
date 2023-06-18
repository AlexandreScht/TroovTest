<template>
  <v-form v-model="valid">
    <v-text-field
      v-if="displayNameField"
      v-model="userInfo.name"
      label="Name"
      :rules="[required('name')]"
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
      counter="true"
      :rules="displayNameField ? [required('password'), minLength('password', 8), passwordFormat()] : [required()]"
      @click:append="showPassword = !showPassword"
    />

    <v-btn :disabled="!valid" @click="submit(userInfo)">{{ buttonText }}</v-btn>
  </v-form>
</template>

<script>
import validations from "@/utils/validations"
export default {
  props: {
    submit: {
      type: Function,
      required: true
    },
    buttonText: {
      type: String,
      required: true
    },
    displayNameField: {
      type: Boolean,
      required: false
    }
  },
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
}
</script>

<style lang="scss" scoped></style>
