<template>
  <div class="home">
    <div id="app">
      <v-content>
        <v-container class="fill-height" fluid>
          <v-row align="center" justify="center">
            <v-col cols="12" sm="9" md="4">
              <v-card class="elevation-12">
                <v-toolbar color="primary" dark flat>
                  <v-toolbar-title>Settings</v-toolbar-title>
                  <v-spacer></v-spacer>
                </v-toolbar>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" md="12" align="center" justify="center">
                        <v-slider label="Refresh interval (in seconds)" v-model="refreshInterval" thumb-label="always" min="1" max="60" thumb-size="24"></v-slider>
                        <v-text-field v-model="baseUrl" label="Base URL (Actuator)"></v-text-field>
                        <v-radio-group row v-model="language">
                          <v-radio label="English" value="English"></v-radio>
                          <v-radio label="French" value="French"></v-radio>
                        </v-radio-group>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-content>
    </div>
  </div>
</template>

<script>

export default {
  data: function () {
    return {}
  },
  computed: {
    refreshInterval: {
      get () {
        return this.$store.state.settings.refreshInterval
      },
      set (v) {
        this.$store.commit('settings/SET_REFRESH_INTERVAL', v)
      }
    },
    language: {
      get () {
        return this.$store.state.settings.language
      },
      set (v) {
        this.$store.commit('settings/SET_LANGUAGE', v)
      }
    },
    baseUrl: {
      get () {
        return this.$store.state.settings.baseUrl
      },
      set (v) {
        this.$store.commit('settings/SET_BASEURL', v)
      }
    }
  },
  created () {
  },
  methods: {
  }
}
</script>
