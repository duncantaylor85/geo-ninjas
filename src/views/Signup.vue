<template>
  <div class="signup">
    <v-card max-width="600" class="mx-auto">
      <v-container>
        <v-card-title
          class="headline text-h2 deep-purple--text justify-center"
          >Sign up</v-card-title
        >
        <v-form
          lazy-validation
          v-model="valid"
          ref="form"
        >
          <v-card-text>
            <v-text-field
              :error-messages="emailFeedback"
              required
              :rules="emailRules"
              v-model="email"
              label="Email"
              type="email"
            ></v-text-field>
          </v-card-text>
          <v-card-text>
            <v-text-field
              required
              :rules="passwordRules"
              v-model="password"
              label="Password"
              type="password"
            ></v-text-field>
          </v-card-text>
          <v-card-text>
            <v-text-field
              :error-messages="feedback"
              required
              :rules="aliasRules"
              v-model="alias"
              label="Alias"
              type="text"
            ></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-btn
              @click="signup"
              dark
              color="deep-purple"
              class="mx-auto"
              >Sign up</v-btn
            >
          </v-card-actions>
        </v-form>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import slugify from "slugify";
import {
  db,
  auth,
  usersCollection,
} from "@/firebase/init";

export default {
  name: "Signup",
  data() {
    return {
      userId: "",
      slug: "",
      email: "",
      password: "",
      alias: "",
      feedback: "",
      emailFeedback: "",
      valid: true,
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) =>
          /.+@.+\..+/.test(v) ||
          "E-mail must be valid",
      ],
      passwordRules: [
        (v) => !!v || "Password is required",
        (v) =>
          (v && v.length >= 6) ||
          "Password must be a minimum of 6 characters",
      ],
      aliasRules: [
        (v) => !!v || "You must enter an alias",
        (v) =>
          (v && v.length >= 4) ||
          "Alias must be at least 4 characters",
      ],
    };
  },
  methods: {
    signup() {
      this.feedback = "";
      this.emailFeedback = "";
      if (this.$refs.form.validate()) {
        this.slug = slugify(this.alias, {
          replacement: "-",
          remove: /[$*_+~.()'"!\-:@]/g,
          lower: true,
        });
        let ref = usersCollection.doc(this.slug);
        ref.get().then((doc) => {
          if (doc.exists) {
            this.feedback =
              "this alias already exists";
          } else {
            auth
              .createUserWithEmailAndPassword(
                this.email,
                this.password
              )
              .then(() => {
                auth.onAuthStateChanged(
                  (user) => {
                    if (user) {
                      usersCollection
                        .doc(this.slug)
                        .set({
                          alias: this.alias,
                          geolocation: null,
                          user_id: user.uid,
                        })
                        .then(() => {
                          this.$router.push({
                            name: "GMap",
                          });
                        });
                    } else {
                      console.log(
                        "User does not exist: "
                      );
                    }
                  }
                );
              })
              .catch((err) => {
                console.log(err);
                this.emailFeedback = err.message;
              });
          }
        });
      } else {
      }
    },
  },
};
</script>

<style scoped></style>
