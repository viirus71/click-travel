<template>
  <div class="container">
    <div class="toolbar">
      <Logo />
    </div>
    <div class="content">
      <div class="links">
        <a v-for="(item, index) in tickets" :key="index" class="giant-button">
          Passenger : {{ item.passenger }} <br />
          Flight : {{ item.flight }} <br />
          From : {{ item.from }} <br />
          To : {{ item.to }} <br />
          Class : {{ item.class }} <br />
          Gate : {{ item.gate }} <br />
          Time : Time : Time : {{ item.time }} <br />
          Set : {{ item.seat }} <br />
          Number:
          {{ item.number }}
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  async asyncData({ store, route }) {
    await store.dispatch('ticket/loadTickets', route.query.code)
  },
  data() {
    return {}
  },
  computed: mapGetters({
    tickets: 'ticket/getTickets',
  }),
}
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.toolbar {
  height: 80px;
  background-color: #35495e;
  align-self: flex-start;
  width: 100%;
}

.content {
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-image: url('~assets/airplane.jpg');
  background-size: cover;
}

.title {
  font-weight: 500;
  font-size: 58px;
  color: #fff;
  letter-spacing: 1px;
  text-shadow: 1px 1px 4px #000;
  text-align: center;
}

.links {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  padding-top: 15px;
  & > * {
    margin: 5px;
  }
}
</style>
