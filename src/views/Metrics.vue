<template>
  <v-container fluid>
    <v-col cols="12">{{jvmUsed}}</v-col>
  </v-container>
</template>

<script>
import store from '@/store'

function refresh () {
  store.dispatch('metrics/fetchMetrics')
  setTimeout(refresh, 5000)
}

export default {
  data: function () {
    return {
      search: ''
    }
  },
  computed: {
    jvmUsed () {
      return store.state.metrics.jvmUsed
    }
  },
  created () {
    refresh()
  }
}
</script>
