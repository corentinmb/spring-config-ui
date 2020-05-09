<template>
  <v-container fluid>
    <v-col cols="12">
      <v-text-field label="Search a config property" solo v-model="search"></v-text-field>
    </v-col>
    <v-row>
      <v-col cols="12" sm="12" md="6" lg="4" v-for="(c,i) in filteredList" :key="`config-${i}`">
        <v-card class="pa-3" width="100%" height="100%">
          <card-config :data="c[1]" :title="c[0]"></card-config>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CardConfig from '@/components/CardConfig'

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
      const configs = Object.keys(store.state.configprops.configprops).map(
        function (key) {
          return [key, store.state.configprops.configprops[key]]
        }
      )
      return configs.filter(c => {
        return JSON.stringify(c)
          .toLowerCase()
          .includes(this.search.toLowerCase())
      })
    }
  },
  components: { CardConfig }
}
</script>
