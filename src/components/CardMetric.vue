<template>
  <v-card>
    <v-card-title>{{infos.value}} {{infos.unit}}</v-card-title>
    <v-card-actions>
      <v-spacer></v-spacer>
    </v-card-actions>

    <v-expand-transition>
      <div>
        <v-divider></v-divider>
      </div>
    </v-expand-transition>
  </v-card>
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
      this.infos = { value: this.getValue(this.metric), unit: this.getUnit(this.metric) }
    },
    getMetric (metricName) {
      return this.metrics.find(m => m.name === metricName)
    },
    getValue (metricName) {
      return this.getMetric(metricName).infos.measurements[0].value
    },
    getUnit (metricName) {
      return this.getMetric(metricName).infos.baseUnit
    }
  },
  props: ['metric']
}
</script>
