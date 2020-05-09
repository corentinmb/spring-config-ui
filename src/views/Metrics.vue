<template>
  <v-container fluid>
    <v-row dense>
    <v-flex xs3 offset-xs3><card-metric metric="jvm.memory.used"></card-metric></v-flex>
    <card-metric metric="jvm.memory.max"></card-metric>
    <card-metric metric="system.cpu.usage"></card-metric>
    <card-metric metric="system.cpu.count"></card-metric>
    <card-metric metric="http.server.requests"></card-metric>
    <card-metric metric="process.start.time"></card-metric>
    </v-row>
  </v-container>
</template>

<script>
import CardMetric from '@/components/CardMetric'

export default {
  components: {
    CardMetric
  },
  data: function () {
    return {
      search: '',
      refreshTimeout: {}
    }
  }
}
</script>
