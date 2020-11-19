export default {
  getDestinations({ destinations }) {
    return destinations.filter((r) => r.isDreamDestination === true)
  },
}
