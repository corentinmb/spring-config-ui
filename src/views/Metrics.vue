<template>
  <v-container fluid>
    <v-row>
        <card-metric metric="jvm.memory.used" type="size"></card-metric>
        <card-metric metric="jvm.memory.max" type="size"></card-metric>
        <card-metric metric="system.cpu.usage" type="percentage"></card-metric>
        <card-metric metric="system.cpu.count"></card-metric>
        <card-metric metric="process.start.time" type="time"></card-metric>
        <card-server></card-server>
    </v-row>
  </v-container>
</template>

<script>
import CardMetric from '@/components/CardMetric'
import CardServer from '@/components/CardServer'

export default {
  components: {
    CardMetric,
    CardServer
  },
  data: function () {
    return {
      search: '',
      refreshTimeout: {}
    }
  }
}
</script>
