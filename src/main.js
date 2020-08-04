import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import { auth } from "@/firebase/init";

Vue.config.productionTip = false;

// import * as VueGoogleMaps from "vue2-google-maps";
// Vue.use(VueGoogleMaps, {
//   load: {
//     key:
//       "AIzaSyBvm3On5Tva2C3mc_XiUzdEP9lQPDaUUjI",
//   },
// });

let app = null;

auth.onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      vuetify,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
