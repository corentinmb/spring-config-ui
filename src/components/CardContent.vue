<template>
  <div>
      {{title}}
      <v-card-actions>
        <v-btn color="purple" text>Explore</v-btn>

        <v-spacer></v-spacer>

        <v-btn icon @click="show = !show">
          <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show" style="max-width: fit-content">
          <v-divider></v-divider>

          <v-card-text>{{data}}</v-card-text>
        </div>
      </v-expand-transition>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      show: false
    }
  },
  props: ['data', 'title']
}
</script>
