import service from './service'

export default {
  async loadTickets({ commit }, code) {
    try {
      const data = await service.getTickets(code)
      commit('setTickets', data.tickets.data)
    } catch (e) {
      commit('setTickets', [])
    }
  },
}
