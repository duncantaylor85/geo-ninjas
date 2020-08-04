<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer">
      <v-list dense>
        <v-list-item link to="/signup">
          <v-list-item-action>
            <v-icon>mdi-account-plus</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              Sign up
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/login">
          <v-list-item-action>
            <v-icon>mdi-login</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              Login
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link @click="logout">
          <v-list-item-action>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              Logout
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      dark
      app
      color="deep-purple darken-1"
    >
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title
        @click="$router.push('/')"
        style="cursor: pointer"
        >GeoNinjas!</v-toolbar-title
      >
      <v-spacer></v-spacer>

      <v-btn to="/signup" icon
        ><v-icon>mdi-account-plus</v-icon></v-btn
      >

      <v-btn icon to="/login"
        ><v-icon>mdi-login</v-icon></v-btn
      >
      <v-btn icon @click="logout"
        ><v-icon>mdi-logout</v-icon></v-btn
      >
    </v-app-bar>
    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
import { auth } from "@/firebase/init";

export default {
  name: "App",

  components: {},

  data: () => ({
    drawer: false,

    //
  }),
  methods: {
    logout() {
      auth.signOut().then(() => {
        this.$router.push({ name: "Signup" });
      });
    },
  },
};
</script>
