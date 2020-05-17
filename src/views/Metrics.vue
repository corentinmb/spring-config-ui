<template>
  <v-container fluid>
    <v-row>
        <card-metric metric="jvm.memory.used" type="size"></card-metric>
        <card-metric metric="jvm.memory.max" type="size"></card-metric>
        <card-metric metric="system.cpu.usage" type="percentage"></card-metric>
        <card-metric metric="system.cpu.count"></card-metric>
        <card-metric metric="process.start.time" type="time"></card-metric>
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
