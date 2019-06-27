export const state = () => ({
  all: [],
  gryffindor: [],
  slytherin: [],
  hufflepuff: [],
  ravenclaw: []
})

export const actions = {
  async fetchAllCharacters({ commit }) {
    const characters = await this.$axios.$get('characters')
    commit('setCharacters', characters)
  },

  async fetchHouseCharacters({ commit }, id) {
    const characters = await this.$axios.$get(`characters/house/${id}`)
    commit('setHouseCharacters', { id, characters })
  }
}

export const mutations = {
  setCharacters(state, characters) {
    state.all = characters
  },

  setHouseCharacters(state, { id, characters }) {
    state[id] = characters
  }
}
