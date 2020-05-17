<template>
  <v-container fluid>
    <v-row>
      <card-server></card-server>
      <card-metric metric="jvm.memory.max"></card-metric>
      <card-metric metric="jvm.threads.states"></card-metric>
      <card-metric metric="process.files.max"></card-metric>
      <card-metric metric="jvm.gc.memory.promoted"></card-metric>
      <card-metric metric="system.load.average.1m"></card-metric>
      <card-metric metric="jvm.memory.used"></card-metric>
      <card-metric metric="jvm.gc.max.data.size"></card-metric>
      <card-metric metric="jvm.memory.committed"></card-metric>
      <card-metric metric="system.cpu.count"></card-metric>
      <card-metric metric="logback.events"></card-metric>
      <card-metric metric="jvm.buffer.memory.used"></card-metric>
      <card-metric metric="tomcat.sessions.created"></card-metric>
      <card-metric metric="jvm.threads.daemon"></card-metric>
      <card-metric metric="system.cpu.usage"></card-metric>
      <card-metric metric="jvm.gc.memory.allocated"></card-metric>
      <card-metric metric="tomcat.sessions.expired"></card-metric>
      <card-metric metric="jvm.threads.live"></card-metric>
      <card-metric metric="jvm.threads.peak"></card-metric>
      <card-metric metric="tomcat.sessions.rejected"></card-metric>
      <card-metric metric="process.cpu.usage"></card-metric>
      <card-metric metric="jvm.classes.loaded"></card-metric>
      <card-metric metric="jvm.classes.unloaded"></card-metric>
      <card-metric metric="tomcat.sessions.active.current"></card-metric>
      <card-metric metric="jvm.gc.live.data.size"></card-metric>
      <card-metric metric="process.files.open"></card-metric>
      <card-metric metric="jvm.buffer.count"></card-metric>
      <card-metric metric="jvm.buffer.total.capacity"></card-metric>
      <card-metric metric="tomcat.sessions.active.max"></card-metric>
      <card-metric metric="process.start.time"></card-metric>
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
