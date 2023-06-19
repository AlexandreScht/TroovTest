const planning = {
  state() {
    return {
      objects: [],
      object: {},
    }
  },
  mutations: {
    GET_ALL(state, props) {
      state.objects = props
    },
    GET_ONE(state, props) {
      state.object = props
    },
  },
  actions: {
    async findAll({ commit }) {
      try {
        await this.$axios.get(`${this.$axios.defaults.baseURL}objects`).then((res) => {
          commit("GET_ALL", res.data.data)
        })
      } catch (error) {}
    },

    async findOne({ commit }, { id }) {
      try {
        await this.$axios.get(`${this.$axios.defaults.baseURL}object/${id}`).then((res) => {
          commit("GET_ONE", res.data.data)
        })
      } catch (error) {}
    },

    async create({ commit }, { payload }) {
      try {
        const response = await this.$axios.post(`${this.$axios.defaults.baseURL}object`, payload)

        return response
      } catch (error) {
        throw error.response
      }
    },

    async update({ commit }, { id }) {
      try {
        const response = await this.$axios.patch(`${this.$axios.defaults.baseURL}object/${id}`)

        return response
      } catch (error) {
        throw error.response
      }
    },

    async delete({ commit }, { id }) {
      try {
        const response = await this.$axios.delete(`${this.$axios.defaults.baseURL}object/${id}`)

        return response
      } catch (error) {
        throw error.response
      }
    }
  },
}
export default planning
