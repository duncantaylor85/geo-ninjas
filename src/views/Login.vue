<template>
  <div class="login">
    <v-card max-width="600" class="mx-auto">
      <v-container>
        <v-card-title
          class="headline text-h2 deep-purple--text justify-center"
          >Login</v-card-title
        >
        <v-form lazy-validation>
          <v-card-text>
            <v-text-field
              v-model="email"
              label="Email"
              type="email"
            ></v-text-field>
          </v-card-text>
          <v-card-text>
            <v-text-field
              v-model="password"
              label="Password"
              type="password"
            ></v-text-field>
          </v-card-text>

          <v-card-actions>
            <v-btn
              @click="login"
              dark
              color="deep-purple"
              class="mx-auto"
              >Login</v-btn
            >
          </v-card-actions>
        </v-form>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import { auth } from "@/firebase/init";

export default {
  name: "Login",
  data() {
    return {
      email: null,
      password: null,
    };
  },
  methods: {
    login() {
      if (this.email && this.password) {
        auth
          .signInWithEmailAndPassword(
            this.email,
            this.password
          )
          .then((cred) => {
            console.log(cred.user);
          })
          .catch((err) => {
            console.log(err.message);
          });
      } else {
        console.log("Error");
      }
    },
  },
};
</script>

<style scoped></style>
