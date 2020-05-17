<template>
  <div class="home">
    <div id="app">
      <v-content>
        <v-container class="fill-height" fluid>
          <v-row align="center" justify="center">
            <v-col cols="12" sm="9" md="7">
              <v-card class="elevation-12">
                <v-toolbar color="primary" dark flat>
                  <v-toolbar-title>Welcome</v-toolbar-title>
                  <v-spacer></v-spacer>
                </v-toolbar>
                <v-card-text>
                  <v-container>
                    <span class="display-1">Welcome on your new configuration UI.</span>
                    <pre class="mt-5" style="font-family: 'Roboto'">
You'll discover an enhanced view for your metrics and statistics for your application running under Spring Boot and collecting
metrics through Actuator. This project is under development, so please, you can send feedback to <v-chip
class="ma-0"
color="primary"
text-color="white"
small
href="mailto:cmoreau@ippon.fr"  target="_blank"
><v-avatar left size="16">
    <v-icon>mdi-account-circle</v-icon>
  </v-avatar>cmoreau@ippon.fr
</v-chip>
<v-spacer></v-spacer>
Resources:
- Spring : <a href="https://spring.io/">https://spring.io/</a>
- Actuator : <a href="https://docs.spring.io/spring-boot/docs/current/reference/html/production-ready-features.html">https://docs.spring.io/spring-boot/docs/current/reference/html/production-ready-features.html</a>
- VueJS : <a href="https://vuejs.org/">https://vuejs.org/</a>
- This project repository (Github) : <a href="https://github.com/corentinmb/spring-config-ui">https://github.com/corentinmb/spring-config-ui</a>

This project uses a bunch of dependencies:
- axios: simple HTTP client
- moment: library for parsing and formatting dates and times
- vuetify: component library for material support
- vuex: store implementation for VueJS
</pre>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-chip
class="mr-2"
color="secondary"
text-color="white"
small
href="https://twitter.com/corentinmb"  target="_blank"
><v-avatar left size="16">
    <v-icon>mdi-twitter</v-icon>
  </v-avatar>corentinmb
</v-chip><v-chip
class="ma-0"
color="success"
text-color="white"
small
href="https://github.com/corentinmb"  target="_blank"
><v-avatar left size="16">
    <v-icon>mdi-github</v-icon>
  </v-avatar>corentinmb
</v-chip><v-spacer></v-spacer>
                  <v-btn color="primary" @click="$root.$emit('activate-drawer')">Show me !</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-content>
    </div>
  </div>
</template>
