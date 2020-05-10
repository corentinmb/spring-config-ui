<template>
    <v-col cols="12" sm="12" md="6" lg="4">
  <v-card class="d-flex flex-column pa-3" width="100%" height="100%">
    <v-card-text>
      <p class="display-1 text--primary">
        {{infos.value}}
      </p>
      <p> {{infos.unit}}</p>
      <div class="text--primary">{{infos.name}}</div>
    </v-card-text>
    <v-spacer></v-spacer>
    <v-card-actions>
      <v-btn
        text
        color="deep-purple accent-4"
      >
        Learn More
      </v-btn>
    </v-card-actions>
    </v-card>
    </v-col>
</template>

<script>
import store from '@/store'
import { mapGetters } from 'vuex'

export default {
  data: function () {
    return {
      infos: []
    }
  },
  computed: {
    ...mapGetters('metrics', ['metrics'])
  },
  created () {
    store.dispatch('metrics/fetchMetric', this.metric).then(response => {
      this.filterMetricsWithCurrentMetric()
    })
  },
  methods: {
    filterMetricsWithCurrentMetric () {
      this.infos = { name: this.getName(), value: this.getValue(), unit: this.getUnit() }
    },
    getMetric () {
      return this.metrics.find(m => m.name === this.metric)
    },
    getValue () {
      const val = this.getMetric().infos.measurements[0].value
      if (this.type === 'percentage') {
        return Math.round(val * 100)
      } else if (this.type === 'time') {
        // TODO: Use datetime lib to format correctly the time elapsed (in seconds)
      } else {
        return val
      }
    },
    getUnit () {
      return this.getMetric().infos.baseUnit
    },
    getName () {
      return this.getMetric().infos.description
    }
  },
  props: ['metric', 'type']
}
</script>
