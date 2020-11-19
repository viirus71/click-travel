import service from './service'

export default {
  async loadDestinations({ commit }) {
    try {
      const data = await service.getDestinations()
      commit('setDestinations', data.destinations.data)
    } catch (e) {
      commit('setDestinations', [])
    }
  },
}
