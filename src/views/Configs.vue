<template>
  <v-container fluid>
    <v-col cols="12">
          <v-text-field
            label="Search a config property"
            solo
            v-model="search"
          ></v-text-field>
        </v-col>
    <v-row>
      <v-col cols="12">
        <v-row class="grey lighten-5 mb-3" style="height: 300px;">
          <v-card
            v-for="(c,i) in filteredList"
            :key="`config-${i}`"
            class="ma-3 pa-3"
            outlined
            tile
          >
            <card-content :data="c[1]" :title="c[0]"></card-content>
          </v-card>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CardContent from '@/components/CardContent'

import store from '@/store'
import { mapState } from 'vuex'

function getConfig () {
  store.dispatch('configprops/fetchConfigProps')
}
export default {
  data: function () {
    return {
      search: ''
    }
  },
  created () {
    getConfig()
  },
  computed: {
    ...mapState(['configprops']),
    filteredList () {
      const configs = Object.keys(store.state.configprops.configprops).map(function (key) {
        return [key, store.state.configprops.configprops[key]]
      })
      return configs.filter(c => {
        return JSON.stringify(c).toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  components: { CardContent }
}
</script>
