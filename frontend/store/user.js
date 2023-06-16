export const actions = {
  async register({ commit, dispatch }, payload) {
    try {
      await this.$axios
        .post(`${this.$axios.defaults.baseURL}register`,payload)
        .then(() => {
          this.$auth.loginWith("local", {
            data: payload,
          })
        });
    } catch (error) {
      throw error
    }
  },
};
