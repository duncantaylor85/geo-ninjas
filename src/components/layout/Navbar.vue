<template>
  <div class="Navbar">
    <v-app-bar
      dark
      app
      color="deep-purple darken-1"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title
        >GeoNinjas!</v-toolbar-title
      >
      <v-spacer></v-spacer>
      <v-btn icon
        ><v-icon>mdi-account-plus</v-icon></v-btn
      >
      <v-btn icon
        ><v-icon>mdi-login</v-icon></v-btn
      >
      <v-btn icon><v-icon></v-icon></v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {};
  },
};
</script>

<style scoped>
span {
  margin-right: 10px;
}
</style>
