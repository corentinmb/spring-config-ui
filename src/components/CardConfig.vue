<template>
  <div>
    <v-card-title>{{getConfig(title)}}</v-card-title>
    <v-card-subtitle>{{getPackages(title)}}</v-card-subtitle>
    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn icon @click="show = !show">
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          <json-viewer :value="data" :expand-depth="100" copyable boxed sort expanded></json-viewer>
        </v-card-text>
      </div>
    </v-expand-transition>
  </div>
</template>

<script>
import Vue from 'vue'
import JsonViewer from 'vue-json-viewer'

Vue.use(JsonViewer)

export default {
  data: function () {
    return {
      show: false
    }
  },
  methods: {
    getPackages (title) {
      return title.substring(0, title.lastIndexOf('.'))
    },
    getConfig (title) {
      var parts = title.split('.')
      return parts.slice(-1).pop()
    }
  },
  props: ['data', 'title']
}
</script>
