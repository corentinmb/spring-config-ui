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
                        <v-slider label="Refresh interval" v-model="slider" thumb-label="always" min="1" max="60" thumb-size="24"></v-slider>
                        <v-text-field v-model="model" label="Server address"></v-text-field>
                        <v-radio-group v-model="ex7" row>
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
import { mapGetters } from 'vuex'

export default {
  data: function () {
    return {}
  },
  computed: {
    ...mapGetters('metrics', ['metrics'])
  },
  created () {
  },
  methods: {}
}
</script>
