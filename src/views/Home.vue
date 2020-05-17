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
                    <br />
                    <br />You'll discover an enhanced view for your metrics and statistics for your application running under Spring Boot and collecting
                    metrics through Actuator.
                    This project is under development, so please, you can send feedback to
                    <v-chip class="ma-0" color="primary" text-color="white" small href="mailto:cmoreau@ippon.fr">
                      <v-avatar left size="16">
                        <v-icon>mdi-account-circle</v-icon>
                      </v-avatar>cmoreau@ippon.fr
                    </v-chip>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
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
