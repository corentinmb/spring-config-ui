<template>
  <v-col cols="12" sm="12" md="6" lg="4">
    <v-card dark :color="colorForServerStatus()" class="d-flex flex-column pa-3" width="100%" height="100%">
      <v-card-text v-if="!changeView" class="pb-0">
        <p class="display-1">Disk space and server status</p>
        <v-row class="ma-0">
          <v-col cols="62" justify="center" align="center">
            <v-progress-circular
              dark
              :rotate="-90"
              :size="100"
              :width="15"
              :value="this.usedSpacePercentage"
            >{{ this.usedSpacePercentage }} %</v-progress-circular>
          </v-col>
          <v-col cols="8" align="center" class="pa-1 ma-1">
            Status: {{this.status}}<br/>
            Free disk space: {{ Math.round(this.diskspace.free / 1000000000) }} GB<br/>
            Total disk space: {{ Math.round(this.diskspace.total / 1000000000) }} GB<br/>
            Threshold * : {{ Math.round(this.diskspace.threshold / 1000000) }} MB<br/>
            <p class="font-italic caption">* limit before setting the server to DOWN status</p>

          </v-col>
        </v-row>
      </v-card-text>
      <v-card-text v-else>
        <v-sheet color="transparent">
          <v-sparkline
            :smooth="16"
            :line-width="2"
            :value="history.store"
            :labels="history.store"
            color="white"
            auto-draw
            stroke-linecap="round"
          ></v-sparkline>
        </v-sheet>
      </v-card-text>
      <v-spacer></v-spacer>
      <v-card-actions>
        <v-btn text @click="changeView = !changeView">
          <span v-if="!changeView">Learn More</span>
          <span v-else>Return to value</span>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<style scoped>
.v-progress-circular {
  margin: 1rem;
}
</style>

<script>
import store from '@/store'
import { mapState, mapGetters } from 'vuex'
import History from '@/models/History.js'

function isNumeric (value) {
  return /^-{0,1}\d+$/.test(value)
}

export default {
  data: function () {
    return {
      infos: [],
      history: new History(),
      polling: null,
      changeView: false
    }
  },
  computed: {
    ...mapState('server', ['status', 'diskspace']),
    ...mapGetters('server', ['usedSpacePercentage']),
    ...mapState('settings', ['refreshInterval'])
  },
  created () {
    this.pollData()
  },
  methods: {
    fillInfos () {
      if (isNumeric(this.usedSpacePercentage)) {
        this.history.add(this.usedSpacePercentage)
      }
    },
    pollData () {
      store.dispatch('server/fetchServerInfo').then(response => {
        this.fillInfos()
      })
      this.polling = setInterval(() => {
        store.dispatch('server/fetchServerInfo').then(response => {
          this.fillInfos()
        })
      }, this.refreshInterval * 1000)
    },
    colorForServerStatus () {
      return this.status === 'UP' ? 'green' : 'red'
    }
  },
  beforeDestroy () {
    clearInterval(this.polling)
  }
}
</script>
