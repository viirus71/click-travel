import axios from 'axios'

export default {
  async getDestinations() {
    const url = `http://travel-api.clicksomeone.com/destinations`
    const response = await axios.get(url)
    return {
      destinations: response,
    }
  },
}
