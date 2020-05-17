<template>
    <v-col cols="12" sm="12" md="6" lg="4">
  <v-card class="d-flex flex-column pa-3" width="100%" height="100%">
    <v-card-text v-if="!changeView">
      <p class="display-1 text--primary">
        {{infos.value}}
      </p>
      <p> {{infos.unit}}</p>
      <div class="text--primary">{{infos.name}}</div>
    </v-card-text>
    <v-card-text v-else>
      <v-sheet color="transparent">
        <v-sparkline
          :smooth="16"
          :gradient="['#f72047', '#ffd200', '#1feaea']"
          :line-width="2"
          :value="history.store"
          :labels="history.store"
          auto-draw
          stroke-linecap="round"
        ></v-sparkline>
      </v-sheet>
    </v-card-text>
    <v-spacer></v-spacer>
    <v-card-actions>
      <v-btn
        text
        color="deep-purple accent-4"
        v-if="this.type != 'time'"
        @click="changeView = !changeView"
      >
        <span v-if="!changeView">Learn More</span>
        <span v-else>Return to value</span>
      </v-btn>
    </v-card-actions>
    </v-card>
    </v-col>
</template>

<script>
import store from '@/store'
import { mapGetters } from 'vuex'
import moment from 'moment'
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
    ...mapGetters('metrics', ['metrics'])
  },
  created () {
    this.pollData()
  },
  methods: {
    pollData () {
      store.dispatch('metrics/fetchMetric', this.metric).then(response => {
        this.filterMetricsWithCurrentMetric()
      })
      this.polling = setInterval(() => {
        store.dispatch('metrics/fetchMetric', this.metric).then(response => {
          this.filterMetricsWithCurrentMetric()
        })
      }, 5000)
    },
    filterMetricsWithCurrentMetric () {
      this.infos = { name: this.getName(), value: this.getValue(), unit: this.getUnit() }
    },
    getMetric () {
      return this.metrics.get(this.metric)
    },
    getValue () {
      let val = this.getMetric().infos.measurements[0].value
      if (this.type === 'percentage') {
        val = Math.round(val * 100)
      } else if (this.type === 'time') {
        val = moment.unix(val).fromNow()
      } else if (this.type === 'size') {
        val = Math.round(val / 1000000)
      }
      if (isNumeric(val)) {
        this.history.add(val)
      }
      return val
    },
    getUnit () {
      let val = this.getMetric().infos.baseUnit
      if (this.type === 'percentage') {
        val = '%'
      } else if (this.type === 'time') {
        val = null
      } else if (this.type === 'size') {
        val = 'MB'
      }
      return val
    },
    getName () {
      return this.getMetric().infos.description
    }
  },
  beforeDestroy () {
    clearInterval(this.polling)
  },
  props: ['metric', 'type']
}
</script>
