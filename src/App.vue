<template>
  <v-app>
    <v-app-bar hide-on-scroll app color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>{{name}}</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group>
          <router-link class="rl" to="/">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link class="rl" to="/metrics">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-server</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Metrics</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link class="rl" to="/configs">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-cogs</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Configs</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link class="rl" to="/settings">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-cog</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Settings</v-list-item-title>
            </v-list-item>
          </router-link>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<style scoped>
.rl {
  text-decoration: none;
}
</style>

<script>
export default {
  components: {
  },
  mounted () {
    this.$root.$on('activate-drawer', () => {
      this.drawer = true
    })
  },
  data: () => ({
    drawer: false,
    name: 'Spring-Config-UI'
  })
}
</script>
