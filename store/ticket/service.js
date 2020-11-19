import axios from 'axios'

export default {
  async getTickets(code) {
    const url = `http://travel-api.clicksomeone.com/tickets`
    const response = await axios.get(url, {
      params: { filter: { where: { to: code } } },
    })
    return {
      tickets: response,
    }
  },
}
