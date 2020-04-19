<template>
  <div class="home">
    <ul><li v-for="(c, index) in configprops.configprops" :key="`config-${index}`">
      {{index}}
      </li></ul>
  </div>
</template>

<script>
import store from '@/store'
import { mapState } from 'vuex'

function getConfig () {
  store.dispatch('configprops/fetchConfigProps')
}
export default {
  created () {
    getConfig()
  },
  computed: {
    ...mapState(['configprops'])
  }
}
</script>
