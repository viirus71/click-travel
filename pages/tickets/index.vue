<template>
  <div class="container">
    <div class="toolbar">
      <Logo />
    </div>
    <div class="content">
      <div class="links">
        <button
          v-for="(item, index) in tickets"
          :key="index"
          class="giant-button"
          @click="setBoardingPass(item)"
        >
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
        </button>
      </div>
      <div v-if="show" class="card">
        <div class="cardtop" style="color: #fff">
          <div style="padding-top: 6px; padding-left: 10px">
            <span style="font-size: 20px">Boarding Pass</span> <br />
            <span>{{ boardingPass.class }}</span>
          </div>
        </div>
        <div class="cardcontainer">
          <div style="padding-top: 10px">
            <span class="grey"> Passenger </span> <br />
            <span class="greyres"> {{ boardingPass.passenger }} </span>
          </div>
          <div
            class="grey row"
            style="display: flex; flex-wrap: wrap; padding-top: 10px"
          >
            <span class="column">Flight</span>
            <span class="column">From</span>
            <span class="column">To </span>
            <span class="column">Class </span>
          </div>
          <div class="greyres row">
            <span class="column">{{ boardingPass.flight }}</span>
            <span class="column"> {{ boardingPass.from }}</span>
            <span class="column">{{ boardingPass.to }} </span>
            <span class="column">{{ boardingPass.class }} </span>
          </div>

          <div
            class="grey row2"
            style="display: flex; flex-wrap: wrap; padding-top: 10px"
          >
            <span class="column">Gate</span>
            <span class="column">Time</span>
            <span class="column">Seat </span>
            <span class="column"></span>
          </div>
          <div class="greyres row2">
            <span class="column">{{ boardingPass.gate }}</span>
            <span class="column"> {{ boardingPass.time.split(' ')[1] }}</span>
            <span class="column">{{ boardingPass.seat }} </span>
            <img
              class="column"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR57cfsKn1MWWQ5acSqOhOLDQDAHnaac4xinw&usqp=CAU"
              style="margin-bottom: 20px; heigth: 50px"
            />
          </div>
        </div>
        <div class="cardbottom"></div>
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
    return {
      boardingPass: {},
      show: false,
    }
  },
  computed: mapGetters({
    tickets: 'ticket/getTickets',
  }),
  methods: {
    setBoardingPass(item) {
      this.boardingPass = item
      this.show = true
    },
  },
}
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.column {
  float: left;
  width: 25%;
}

/* Clear floats after the columns */
.row:after {
  content: '';
  display: table;
  clear: both;
}
.column2 {
  float: left;
  width: 33.33%;
}

/* Clear floats after the columns */
.row2:after {
  content: '';
  display: table;
  clear: both;
}
.card {
  width: 1000px;
  height: 380px;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
}
.cardcontainer {
  padding: 2px 16px;
}
.grey {
  font-size: 20px;
  color: #35495e;
}
.greyres {
  font-size: 30px;
}
.cardtop {
  width: 100%;
  height: 60px;
  border-radius: 20px 20px 0px 0px;
  background-color: #37a7dd;
}
.cardbottom {
  margin-top: 15px;
  width: 100%;
  height: 30px;
  border-radius: 0px 0px 20px 20px;
  background-color: #37a7dd;
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
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
